const successHandler = (res, code = 200, data) => {
    res.send({
        status: "true",
        statusCode: code,
        data: data

    })
}

const errorHandler = (res, code = 500, error, message = "Something went worng") => {
    res.send({
        status: "false",
        statusCode: code,
        error: error,
        message: message

    })

}

module.exports = {
    successHandler,
    errorHandler
}