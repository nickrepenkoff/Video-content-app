import React, { FC } from 'react'
import { IVideo } from '@/components/screens/Home/IHome'
import styles from './VideoCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'

const VideoCard: FC<{ post: IVideo }> = ({ post }) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={'flex gap-3 p-2 cursor-pointer font-semibold rounded'}>
					<div className={'md:w-16 md:h-16 w-10 h-10'}>
						<Link href="/">
							<>
								<Image
									src={post.postedBy.image}
									alt="video img"
									width={62}
									height={62}
									className="rounded-full"
									layout="responsive"
								/>
							</>
						</Link>
					</div>
					<div>
						<Link href="/">
							<div className="flex items-center gap-2">
								<p className="flex gap-2 items-center md:text-md font-bold text-primary">
									{post.postedBy.userName}{' '}
									<GoVerified className="text-blue-400" />
								</p>
								<p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
									{post.postedBy.userName}
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
