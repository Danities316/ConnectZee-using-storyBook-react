import { AuthProvider } from '../hooks/userAuth';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
  
}

export default MyApp
