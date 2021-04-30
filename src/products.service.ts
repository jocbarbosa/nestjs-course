import { Injectable } from "@nestjs/common";
import Product from "./product.model";

@Injectable()
export class ProductService {
    productList: Product[] = [
        new Product('LIV01', 'Aprendendo Node JS', 199.99),
        new Product('LIV02', 'Aprendendo Flutter', 99.99)
    ]

    getAll(): Product[] {
        return this.productList;
    }

    getOne(id: Number): Product {
        return this.productList[0];
    }

    create(product: Product) {
        this.productList.push(product);
    }

    update(product: Product): Product {
        return product;
    }

    delete(id: Number) {
        this.productList.pop();
    }
}