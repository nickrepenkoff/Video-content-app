import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import Home from '@/components/screens/Home/Home'
import { IHome } from '@/components/screens/Home/IHome'

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
	const { data } = await axios.get(`http://localhost:3000/api/post`)

	return {
		props: {
			videos: data,
		},
	}
}

export default HomePage
