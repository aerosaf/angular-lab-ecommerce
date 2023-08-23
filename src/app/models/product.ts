export class Product {
    id:number;
    name:string;
    description:string;
    quantity:number;
    price:number;
    photo:string;

    constructor(id:number,
        name:string,
        description:string,
        quantity:number,
        price:number,
        photo:string) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.photo = photo;

    }
}
