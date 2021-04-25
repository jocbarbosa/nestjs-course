export default class Product {
    id: Number;
    code: string;
    name: string;
    price: Number;

    constructor(code: string, name: string, price: Number) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
}