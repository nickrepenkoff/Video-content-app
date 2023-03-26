import React, { FC } from 'react'
import NoResults from '@/components/ui/NoResults/NoResults'
import useAuthStore from '@/store/authStore'
import { IComments } from '@/components/ui/Comments/IComments'

const Comments: FC<IComments> = ({
	comments,
	comment,
	setComment,
	addComment,
	isPosted,
}) => {
	const { userProfile } = useAuthStore()

	return (
		<div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
			<div className="overflow-scroll lg:h-[475px] ">
				{comments?.length ? (
					<div>videos</div>
				) : (
					<NoResults text={'There are no comments yet'} />
				)}
			</div>

			{userProfile && (
				<div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
					<form className="flex gap-4" onSubmit={addComment}>
						<input
							value={comment}
							onChange={e => setComment(e.target.value.trim())}
							placeholder="Add a comment..."
							className="bg-primary px-6 py-4 text-base font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100
							focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
						/>
						{/*@ts-ignore*/}
						<button className="text-base text-gray-400" onClick={addComment}>
							{isPosted ? 'Commenting...' : 'Comment'}
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default Comments
