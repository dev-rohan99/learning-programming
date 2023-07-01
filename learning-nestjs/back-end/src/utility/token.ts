import jwt from "jsonwebtoken";

export const createToken = (payload: object, exp: string) => {
    const token = jwt.sign(payload, process.env.JWT_SECRECT as string, {
        expiresIn: exp 
    });
    return token;
}

export const verifyToken = (token: string) => {
    const verify = jwt.verify(token, process.env.JWT_SECRECT as string);
    return verify;
}

