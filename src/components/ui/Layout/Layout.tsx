import styles from './Layout.module.scss'
import { FC, PropsWithChildren } from 'react'
import Navbar from '@/components/ui/Layout/NavBar/Navbar'
import Sidebar from '@/components/ui/Layout/SideBar/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}

export default Layout
