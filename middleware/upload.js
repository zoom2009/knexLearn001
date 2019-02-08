const path = require('path')
const multer = require('multer')

const destination = path.join(__dirname, '..', 'public')

const storage = multer.diskStorage({
    destination,
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

module.exports = multer({storage})