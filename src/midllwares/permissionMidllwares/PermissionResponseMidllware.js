export const PermissionResponseMidllware = (req, res, next) => {
    try {
        let data = {success : true}
        data.message = req.message || "successfully !"
        data.data = req.permissionData || []
        res.status(req.status || 200).json(data)
    } catch (error) {
        next(error)
    }
}