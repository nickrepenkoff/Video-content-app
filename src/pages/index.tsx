import Head from 'next/head'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Video App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<h1 className="text-3xl font-bold underline">Main content</h1>
			</main>
		</>
	)
}

export default Home
