const respone = (_, res, next) => {
    res.success = (data, status = 200, passProps = {}) => {
        res.status(status).json( {
            status: "Success",
            data,
            ...passProps
        })
    }

    res.paginate = ({ rows , pagination }) => {
        res.success(rows, 200, {pagination})
    }

    res.error = (status = 400, error = null, message) => {
        res.status(status).json({
            status:"Error",
            error,
            message
        })
    }

    next()
}

module.exports = respone