import sanityClient from '@sanity/client'

export const client = sanityClient({
	projectId: 'sdo5v8e1',
	dataset: 'production',
	apiVersion: '2023-02-13',
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
