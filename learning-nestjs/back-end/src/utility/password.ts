import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => {
    const genPassSalt = bcrypt.genSaltSync(12);
    const genHashPass = bcrypt.hashSync(password, genPassSalt);
    return genHashPass;
}

export const verifyPassword = (password: string, hashPass: string) => {
    const verifyPass = bcrypt.compareSync(password, hashPass);
    return verifyPass;
}

