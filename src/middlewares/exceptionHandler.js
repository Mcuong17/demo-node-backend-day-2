const exeptionHandler = (err, req, res, next) => {
    res.error({
        message: String(err)
    })
}

module.exports = exeptionHandler