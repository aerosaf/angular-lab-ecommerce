import { User } from "./user";

export class LoginResponse {

    public accessToken:string;
    public user:User;

    constructor(accessToken:string, user:User) {
        this.accessToken = accessToken;
        this.user = user;
    }

}
