const auth = require("./auth")

exports.fastOperation = (req, res, operation) => {
    auth.checkAuth(req, res).then(data => {
        if (data) {
            try {
                const o1 = Number(req.query.o1)
                const o2 = Number(req.query.o2)
                if (o1 == null || o2 == null) {
                    return res.status(400).json({"error": `missing o1 or o2`})
                }
                if (operation === "/" && o2 === 0) {
                    res.status(403).json({
                        message: "div 0 error"
                    });
                }
                let result = o1
                let op = ""
                switch (operation) {
                    case "+":
                        result += o2
                        op = "add"
                        break
                    case "-":
                        result -= o2
                        op = "sub"
                        break
                    case "*":
                        result *= o2
                        op = "mult"
                        break
                    case "/":
                        result /= o2
                        op="div"
                        break
                }

                res.json({
                    o1: o1,
                    o2: o2,
                    operation: op,
                    result: result
                })
            } catch (err) {
                res.status(500).json({
                    message: err.message || "Some error"
                });
            }
        }
    })

}

exports.slowOperation = (req, res, operation) => {

    auth.checkAuth(req, res).then(data => {
        if (data) {
            try {
                setTimeout(async () => {
                    try {
                        const o1 = Number(req.query.o1)
                        if (o1 == null) {
                            return res.status(400).json({"error": `missing o1`})
                        }
                        await slowOp(o1, operation).then(data => {
                            res.json({
                                o1,
                                operation: operation,
                                result: data
                            });
                        })
                            .catch(err => {
                                res.status(500).json({
                                    message: err.message || `Some error during slow_operation`
                                });
                            });
                    } catch (err) {
                        res.status(500).json({
                            message: err.message || "Some error during slow_operation"
                        });
                    }
                }, 5000)
            } catch (err) {
                res.status(500).json({
                    message: err.message || "Some error"
                });
            }
        }
    })
}


const factorial = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++)
        result = result * i;
    return result;
}

const slowOp = async (a, operation) => {
    let result = 0
    switch (operation) {
        case "sqrt":
            result = Math.sqrt(a)
            break
        case "fact":
            result = factorial(a)
            break
    }
    return result
};
