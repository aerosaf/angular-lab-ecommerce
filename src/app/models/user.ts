export class User {

    public id:number;
    public firstname:string;
    public lastname:string;
    public email:string;
    public password:string;

    public constructor(id:number, firstname:string, lastname:string,
            email:string, password:string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

}