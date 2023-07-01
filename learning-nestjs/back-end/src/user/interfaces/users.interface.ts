
export interface UserInterface {
    name: string;
    username?: string;
    email: string;
    phone: string;
    password: string;
    role: string;
}

export interface LoginUserInterface {
    usernameOrEmail: string;
    password: string;
}
