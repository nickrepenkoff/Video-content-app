import styles from './Layout.module.scss'
import { FC, PropsWithChildren } from 'react'
import Navbar from '@/components/ui/Layout/NavBar/Navbar'
import Sidebar from '@/components/ui/Layout/SideBar/Sidebar'
import Meta from '../../../../utils/meta/Meta'
import { IMeta } from '../../../../utils/meta/IMeta'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...metaArgs }) => {
	return (
		<>
			<Meta {...metaArgs} />
			<div className={styles.wrapper}>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.sidebar}>
						<Sidebar />
					</div>
					<main className={styles.content}>{children}</main>
				</div>
			</div>
		</>
	)
}

export default Layout
