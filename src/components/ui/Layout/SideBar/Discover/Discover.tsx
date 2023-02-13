import React from 'react'
import styles from './Discover.module.scss'
import { topics } from '../../../../../../utils/constants'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const Discover = () => {
	const router = useRouter()

	const { topic } = router.query

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Popular topics</h3>
			<div className={styles.topics}>
				{topics.map(item => (
					<Link href={`/?topic=${item.name}`} key={item.name}>
						<div
							className={clsx(styles.topicStyle, {
								[styles.activeTopicStyle]: topic === item.name,
							})}
						>
							<span className={styles.icon}>{item.icon}</span>
							<span className={styles.name}>{item.name}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Discover
