/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'false',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/tokens.css",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        'background-subtle': '#f8fafc',
        'background-muted': '#f1f5f9',
        text: '#0f172a',
        'text-secondary': '#334155',
        'text-muted': '#64748b',
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        'primary-light': '#eff6ff',
        'primary-border': '#e2e8f0',
        accent: '#06b6d4',
        success: '#16a34a',
        'success-light': '#d1e7dd',
        warning: '#d97706',
        'warning-light': '#fed7aa',
        error: '#dc2626',
        'error-light': '#fecaca',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        none: 'none',
      },
    },
  },
  plugins: [],
}
