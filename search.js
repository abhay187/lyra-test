import { create, insertBatch, search } from '@lyrasearch/lyra'

const db = create({
	schema: {
		word: 'string'
	}
})

const addData = async () => {
	const docs = [
		'Indian Institute of Technology (BHU) Varanasi',
		'Indian Institute of Technology Bhilai',
		'Indian Institute Of Technology Bhubaneswar',
		'Indian Institute of Technology Bombay',
		'Indian Institute of Technology Delhi',
		'Indian Institute Of Technology Dharwad',
		'Indian Institute of Technology Guwahati',
		'Indian Institute of Technology Jodhpur',
		'Indian Institute of Technology Kanpur',
		'Indian Institute of Technology Kharagpur'
	]

	await insertBatch(db, docs)
}

const searchFn = () => {
	const searchResult = search(db, {
		term: 'Indian',
		properties: '*'
	})

	console.log(searchResult)
}

export const setupSearch = (element) => {
	element.addEventListener('click', () => {
		searchFn()
	})
}

addData()