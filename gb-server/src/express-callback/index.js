module.exports = function makeExpressCallback (controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                "Content-Type": req.get("Content-Type"),
                Referer: req.get("referer"),
                "User-Agent": req.get("User-Agent")
            }
        };
        controller(httpRequest).then(httpRequest => {
            if(httpRequest.headers) {
                res.set(httpRequest.headers);
            }
            res.type("json");
            res.status(httpResponse.statusCode).send(httpRequest.body);
        }).catch(e => res.status(500).send({ error: "Internal server error." }));
    };
}