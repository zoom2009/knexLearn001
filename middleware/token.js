exports.token = () => (req, res, next) => {
    console.log('hello token')
    req.observe = 'server'
    next()
}