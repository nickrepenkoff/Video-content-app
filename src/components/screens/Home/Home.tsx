import React, { FC } from 'react'
import { IHome } from '@/components/screens/Home/IHome'
import Layout from '@/components/ui/Layout/Layout'
import styles from './Home.module.scss'
import VideoCard from '@/components/ui/VideoCard/VideoCard'
import NoResults from '@/components/ui/NoResults/NoResults'

const Home: FC<IHome> = ({ videos }) => {
	return (
		<Layout title="Homepage">
			<div className={styles.wrapper}>
				{videos.length ? (
					videos.map(video => <VideoCard post={video} key={video._id} />)
				) : (
					<NoResults text="Oops there are no videos :(" />
				)}
			</div>
		</Layout>
	)
}

export default Home
