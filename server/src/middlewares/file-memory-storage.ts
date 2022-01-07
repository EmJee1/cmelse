import multer from 'multer'

const fileMemoryStorage = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024, // max 5mb asset size
	},
})

export default fileMemoryStorage
