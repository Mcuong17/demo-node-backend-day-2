const respone = (_, res, next) => {
    res.success = (data, status = 200) => {
        res.status(status).json( {
            status: "Success",
            data
        })
    }

    res.error = (error, status = 400) => {
        res.status(status).json({
            status:"Error",
            error
        })
    }

    next()
}

module.exports = respone