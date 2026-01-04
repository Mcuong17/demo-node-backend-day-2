const taskValidator = (req, res, next) => {

    const lengTitle = String(req.body.title).trim()
    console.log(lengTitle)
    if(lengTitle.length < 2) {
        res.error({
            message: "Min length title is 2 charactor"
        }, 422)
    }
    if(lengTitle.length > 50) {
        res.error({
            message: "Max length title is 50 charactor"
        }, 422)
    }
    next()
}

module.exports = taskValidator