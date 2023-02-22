import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import Home from '@/components/screens/Home/Home'
import { IHome } from '@/components/screens/Home/IHome'
import {BASE_URL} from "../../utils";

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
	const { data } = await axios.get(`${BASE_URL}/api/post`)

	return {
		props: {
			videos: data,
		},
	}
}

export default HomePage
