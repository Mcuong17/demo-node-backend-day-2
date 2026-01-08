const respone = (_, res, next) => {
    res.success = (data, status = 200) => {
        res.status(status).json( {
            status: "Success",
            data
        })
    }

    res.error = (status, error = null, message) => {
        res.status(status).json({
            status:"Error",
            error,
            message
        })
    }

    next()
}

module.exports = respone