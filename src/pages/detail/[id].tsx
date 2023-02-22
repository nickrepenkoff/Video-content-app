import React from 'react'
import Detail from '@/components/screens/Detail/Detail'
import { NextPage } from 'next'
import axios from 'axios'
import { BASE_URL } from '../../../utils'
import { IVideo } from '@/components/screens/Home/IHome'

export interface IDetailProps {
	postDetails: IVideo
}

const DetailPage: NextPage<IDetailProps> = props => {
	return <Detail {...props} />
}

export const getServerSideProps = async ({
	params: { id },
}: {
	params: { id: string }
}) => {
	const { data } = await axios.get(`${BASE_URL}/api/post/${id}`)

	return {
		props: { postDetails: data },
	}
}

export default DetailPage
