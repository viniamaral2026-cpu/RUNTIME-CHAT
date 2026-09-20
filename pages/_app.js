import '../styles/globals.css'
import { AuthProvider } from '../src/contexts/AuthContext'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    const checkInit = setTimeout(() => {
      setHasInitialized(true)
    }, 1000)
    return () => clearTimeout(checkInit)
  }, [])

  if (!hasInitialized) {
    return <Component {...pageProps} />
  }

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
