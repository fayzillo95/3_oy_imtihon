import JWT from "jsonwebtoken";

export const generetor = (payload) => {

    const accessToken = JWT.sign(payload,process.env.JWT_A_KEY, {expiresIn:'24h'})
    const refreshToken = JWT.sign(payload,process.env.JWT_R_KEY, {expiresIn:'48h'})
    return {
        success : true,
        accessToken, refreshToken
    }
}

export const veryToken = (token) => {
    return JWT.verify(token, process.env.JWT_A_KEY)
}