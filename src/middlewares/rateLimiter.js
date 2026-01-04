const createRateLimiter = (config) => {
    const { windowMs, maxRequests, message } = config

    const ipStore = {};
    return function rateLimiter(req, res, next) {
        const ip = req.ip
        const now = Date.now()

        if(!ipStore[ip]) {
            ipStore[ip] = {
                count: 1,
                startTime: now
            }
        }

        const ipData = ipStore[ip];
       if (now - ipData.startTime > windowMs) {
            ipData.count = 1;
            ipData.startTime = now;
            return next();
        }

        ipData.count++;

        if (ipData.count > maxRequests) {
            return res.error({
                message: message
            }, 429);
        }

        next();
    }
}

const apiRateLimiter = createRateLimiter({
    windowMs: 60000,         
    maxRequests: 100,
    message: "Too many requests"
});

module.exports = {
    createRateLimiter,
    apiRateLimiter
};