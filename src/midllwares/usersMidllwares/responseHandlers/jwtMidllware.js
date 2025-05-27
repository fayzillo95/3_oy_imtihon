import { generetor } from "../../../utils/token/tokengeneretor.js"


export const jwtMidllware = (req, res, next) => {
    try {
        const data = generetor(req.userData)
        res.status(req.status || 200).json(data)
    } catch (error) {
        next(error)
    }
}
