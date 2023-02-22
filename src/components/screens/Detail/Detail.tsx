import React, { useEffect, useRef, useState } from 'react'
import Layout from '@/components/ui/Layout/Layout'
import { NextPage } from 'next'
import { IDetailProps } from '@/pages/detail/[id]'
import { MdOutlineCancel } from 'react-icons/md'
import { BsFillPlayFill } from 'react-icons/bs'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { useRouter } from 'next/router'

const Detail: NextPage<IDetailProps> = ({ postDetails }) => {
	const [post, setPost] = useState(postDetails)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	const router = useRouter()

	useEffect(() => {
		if (post && videoRef?.current) {
			videoRef.current.muted = isMuted
		}
	}, [isMuted])

	if (!post) return null

	const onVideoClick = () => {
		if (isPlaying) {
			videoRef?.current?.pause()
			setIsPlaying(false)
		} else {
			videoRef?.current?.play()
			setIsPlaying(true)
		}
	}

	return (
		<Layout title="Post details">
			<div className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
				<div
					className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img
				bg-no-repeat bg-cover bg-center"
				>
					<div className="absolute top-6 left-2 lg:left-6 gap-6 flex z-50">
						<p className="cursor-pointer">
							<MdOutlineCancel
								className="text-white text-[35px]"
								onClick={() => router.back()}
							/>
						</p>
					</div>
					<div className="relative">
						<div className="lg:h-[100vh] h-[60vh]">
							<video
								src={post.video.asset.url}
								className="h-full cursor-pointer"
								ref={videoRef}
								loop
								onClick={onVideoClick}
							/>
						</div>

						<div className="absolute top-[45%] left-[45%] cursor-pointer">
							{!isPlaying && (
								<button onClick={onVideoClick}>
									<BsFillPlayFill className="text-white text-6xl lg:text-8xl" />
								</button>
							)}
						</div>
					</div>

					<div className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 cursor-pointer">
						{isMuted ? (
							<button onClick={() => setIsMuted(false)}>
								<HiVolumeOff className="text-white text-2xl lg:text-4xl" />
							</button>
						) : (
							<button onClick={() => setIsMuted(true)}>
								<HiVolumeUp className="text-white text-2xl lg:text-4xl" />
							</button>
						)}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Detail
