const respone = (_, res, next) => {
    res.success = (data, status = 200, passProps = {}) => {
        res.status(status).json( {
            status: "Success",
            data,
            ...passProps
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