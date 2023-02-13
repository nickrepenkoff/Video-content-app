import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../../../utils/tiktik-logo.png'
import styles from './Navbar.module.scss'

const Navbar = () => {
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
		</div>
	)
}

export default Navbar
