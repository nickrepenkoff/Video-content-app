import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../../../utils/tiktik-logo.png'
import styles from './Navbar.module.scss'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { createOrGetUser } from '../../../../../utils'
import useAuthStore from '@/store/authStore'
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai'

const Navbar = () => {
	const { addUser, userProfile, removeUser } = useAuthStore()

	return (
		<div className={styles.wrapper}>
			<Link href="/">
				<div className={styles.image}>
					<Image
						src={Logo}
						alt="logo"
						layout="responsive"
						className="cursor-pointer"
					/>
				</div>
			</Link>

			<div>Search</div>

			<div>
				{userProfile ? (
					<div className={styles.upload}>
						<Link href="/upload">
							<button className={styles.uploadButton}>
								<IoMdAdd className="text-xl" /> {` `}
								<span className="hidden md:block">Upload</span>
							</button>
						</Link>
						{userProfile.image && (
							<Link href="/">
								<>
									<Image
										width={40}
										height={40}
										className="rounded-full cursor-pointer"
										src={userProfile.image}
										alt="user img"
									/>
								</>
							</Link>
						)}
						<button
							type="button"
							className="px-2"
							onClick={() => {
								googleLogout()
								removeUser()
							}}
						>
							<AiOutlineLogout color="red" fontSize={21} />
						</button>
					</div>
				) : (
					<GoogleLogin
						onSuccess={response => createOrGetUser(response, addUser)}
						onError={() => console.log('error')}
					/>
				)}
			</div>
		</div>
	)
}

export default Navbar
