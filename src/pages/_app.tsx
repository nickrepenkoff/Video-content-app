import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Layout from '@/components/ui/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true)

	useEffect(() => {
		setIsSSR(false)
	}, [])

	if (isSSR) return null

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
