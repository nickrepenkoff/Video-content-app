import React, { FC, useRef, useState } from 'react'
import { IVideo } from '@/components/screens/Home/IHome'
import styles from './VideoCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'

const VideoCard: FC<{ post: IVideo }> = ({ post }) => {
	const [isHover, setIsHover] = useState(false)
	const [playing, setPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(false)

	const videoRef = useRef<HTMLVideoElement>(null)

	const onVideoPlay = () => {
		if (playing) {
			videoRef?.current?.pause()
			setPlaying(false)
		} else {
			videoRef?.current?.play()
			setPlaying(true)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.content}>
					<div className={styles.userImage}>
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
							<div className={styles.user}>
								<p className={styles.userName}>
									{post.postedBy.userName}{' '}
									<GoVerified className="text-blue-400" />
								</p>
								<p className={styles.nickName}>{post.postedBy.userName}</p>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.videoContent}>
				<div
					className="rounded-3xl"
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				>
					<Link href="/">
						<video
							src={post.video.asset.url}
							loop
							ref={videoRef}
							className={styles.video}
						/>
					</Link>
					{isHover && (
						<div className={styles.buttons}>
							{playing ? (
								<button onClick={onVideoPlay}>
									<BsFillPauseFill className={styles.button} />
								</button>
							) : (
								<button onClick={onVideoPlay}>
									<BsFillPlayFill className={styles.button} />
								</button>
							)}
							{isMuted ? (
								<button onClick={() => setIsMuted(false)}>
									<HiVolumeOff className={styles.button} />
								</button>
							) : (
								<button onClick={() => setIsMuted(true)}>
									<HiVolumeUp className={styles.button} />
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default VideoCard
