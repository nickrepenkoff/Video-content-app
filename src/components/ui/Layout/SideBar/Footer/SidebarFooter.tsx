import React, { FC } from 'react'
import styles from './SidebarFooter.module.scss'
import {
	footerList1,
	footerList2,
	footerList3,
} from '../../../../../../utils/constants'
import clsx from 'clsx'

const List: FC<{ items: string[]; mt: boolean }> = ({ items, mt }) => (
	<div className={clsx(styles.content, { ['mt-5']: mt })}>
		{items.map(item => (
			<p key={item} className={styles.listItem}>
				{item}
			</p>
		))}
	</div>
)

const SidebarFooter = () => {
	return (
		<div className={styles.wrapper}>
			<List items={footerList1} mt={false} />
			<List items={footerList2} mt />
			<List items={footerList3} mt />
			<p className="text-gray-400 text-sm mt-5">2023 Nickrepenkoff Video app</p>
		</div>
	)
}

export default SidebarFooter
