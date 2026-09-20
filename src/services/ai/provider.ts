// AI Provider Interface
export interface AIProvider {
  generateText(messages: any[], options?: any): Promise<string>
  streamText(messages: any[], onToken: (token: string) => void, onComplete?: () => void): Promise<string>
  countTokens(messages: any[]): number
  getModelInfo(): any
}

// OpenAI Provider Adapter
export class OpenAIProvider implements AIProvider {
  private apiKey: string
  private readonly model: string

  constructor(apiKey: string, model = 'gpt-4o') {
    this.apiKey = apiKey
    this.model = model
  }

  async generateText(messages: any[], options?: any): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: options?.temperature ?? 0.7,
        stream: options?.stream ?? false,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.error?.message || 'Erro na IA')
    }
    return data.choices[0]?.message?.content || ''
  }

  async streamText(
    messages: any[],
    onToken: (token: string) => void,
    onComplete?: () => void
  ): Promise<string> {
    let fullText = ''

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: 0.7,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error('Erro na IA')
    }

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (reader) {
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter((line: string) => line.startsWith('data: '))
        for (const line of lines) {
          try {
            const data = JSON.parse(line.replace('data: ', ''))
            if (data.choices?.[0]?.delta?.content) {
              const token = data.choices[0].delta.content
              if (token) {
                fullText += token
                onToken(token)
              }
            }
          } catch (e) {
            // Ignore parse errors
          }
        }
      }
    }

    if (onComplete) onComplete()
    return fullText
  }

  countTokens(messages: any[]): number {
    return JSON.stringify(messages).length / 4
  }

  getModelInfo(): any {
    return {
      name: this.model,
      provider: 'OpenAI',
      supportsVision: false,
      supportsStreaming: true,
      supportsTools: false,
      supportsCode: true,
    }
  }
}