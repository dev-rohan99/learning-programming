

export const isEmail = (email: string) => {
    const check = /^[a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/;
    return check.test(email);
}

export const isUsername = (username: string) => {
    const check = /^[a-z0-9-_]{3,}$/;
    return check.test(username);
}

