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
					
					<Discover />
					<SuggestedAccounts />
					<SidebarFooter />
				</div>
			)}
		</div>
	)
}

export default Sidebar
