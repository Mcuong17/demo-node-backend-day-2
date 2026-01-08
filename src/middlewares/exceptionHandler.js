const exeptionHandler = (err, req, res, next) => {
   res.error(500, err.message, err);
}

module.exports = exeptionHandler