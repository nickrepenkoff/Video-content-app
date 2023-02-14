import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true)

	useEffect(() => {
		setIsSSR(false)
	}, [])

	if (isSSR) return null

	return (
		<GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN!}>
			<Component {...pageProps} />
		</GoogleOAuthProvider>
	)
}
