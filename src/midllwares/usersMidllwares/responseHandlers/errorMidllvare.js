import logger from "../../../utils/logs/logger/errorLogger.js"

export const errorMidllvare = (err, req, res, next) => {

    if (err.status) {
        logger.info(err)
        return res.status(err.status).json({
            success: false,
            message: err.message,
            data: null
        })
    }
    logger.error(err)
    return res.status(500).json({
        success: false,
        message: "Internal server error !",
        data: null
    })
}