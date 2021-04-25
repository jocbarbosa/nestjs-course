import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import Product from './product.model';

@Controller('products')
export default class ProductController {
    productList: Product[] = [
        new Product('LIV01', 'Aprendendo Node JS', 199.99),
        new Product('LIV02', 'Aprendendo Flutter', 99.99)
    ]

    @Get()
    getAllProducts(): Product[] {
        return this.productList;
    }

    @Get(':id')
    getProduct(@Param() params): string {
        return `Id recebido: ${params.id}`;
    }

    @Post()
    createProduct(@Body() product): string {
        product.id = 100;
        this.productList.push(product);
        return product;
    }

    @Put(':id')
    updateProduct(@Body() product: Product): Product {
        return product;
    }

    @Delete(':id')
    deleteProduct(@Param() params) {
        this.productList.pop();
    }
}

