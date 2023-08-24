export class Product {
    public id: number;
    public name: string;
    public description: string;
    public quantity: number;
    public price: number;
    public photo: string;
    public source: string;

    constructor(id: number,
        name: string,
        description: string,
        quantity: number,
        price: number,
        photo: string,
        source: string) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.photo = photo;
        this.source = source;

    }
}
