export const userResponseMidllware = (req, res, next) => {
    try {
        let data = {success : true}
        data.message = req.message || "successfully !"
        data.data = req.userData || []
        res.status(req.status || 200).json(data)
    } catch (error) {
        next(error)
    }
}