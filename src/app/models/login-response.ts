import { User } from "./user";

export class LoginResponse {
    public user:User;
    public accessToken: string;

    constructor(user:User, accessToken:string) {
        this.user = user;
        this.accessToken = accessToken;
    }
}
