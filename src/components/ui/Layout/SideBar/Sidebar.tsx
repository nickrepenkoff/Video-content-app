import { useState } from 'react'

import styles from './Sidebar.module.scss'
import { ImCancelCircle } from 'react-icons/im'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import Discover from '@/components/ui/Layout/SideBar/Discover/Discover'
import SuggestedAccounts from '@/components/ui/Layout/SideBar/SuggestedAccounts/SuggestedAccounts'
import SidebarFooter from '@/components/ui/Layout/SideBar/Footer/SidebarFooter'

const Sidebar = () => {
	const [isSidebar, setIsSidebar] = useState(true)

	const userProfile = false

	const showSidebar = () => {
		setIsSidebar(prev => !prev)
	}
	return (
		<div>
			<div className={styles.button} onClick={showSidebar}>
				{isSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
			</div>
			{isSidebar && (
				<div className={styles.sidebar}>
					<div className={styles.link}>
						<Link href="/">
							<div className={styles.normalLink}>
								<p className="text-2xl">
									<AiFillHome />
								</p>
								<span className="text-xl hidden xl:block">For you</span>
							</div>
						</Link>
					</div>
					{!userProfile && (
						<div className="px-2 py-4 hidden xl:block">
							<p className="text-gray-400">
								Log in to able to like and comment
							</p>
							<div className="pr-4">
								<GoogleLogin
									clientId=""
									onSuccess={() => {}}
									onFailure={() => {}}
									cookiePolicy="single_host_origin"
									render={renderProps => (
										<button
											className={styles.logIn}
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}
										>
											Log in
										</button>
									)}
								/>
							</div>
						</div>
					)}

					<Discover />
					<SuggestedAccounts />
					<SidebarFooter />
				</div>
			)}
		</div>
	)
}

export default Sidebar
