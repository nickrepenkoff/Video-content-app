import { Dispatch, FormEvent, SetStateAction } from 'react'

export interface IComments {
	isPosted: boolean
	comment: string
	setComment: Dispatch<SetStateAction<string>>
	addComment: (event: FormEvent<HTMLFormElement>) => Promise<void>
	comments: IComment[]
}

export interface IComment {
	comment: string
	length?: number
	_key: string
	postedBy: { _ref: string; _id?: string }
}


interfaceITestCommit{
	test: string
}