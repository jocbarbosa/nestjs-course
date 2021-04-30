import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import Product from './product.model';
import { ProductService } from "./products.service";

@Controller('products')
export default class ProductController {

    constructor(private productService: ProductService) {

    }

    @Get()
    getAllProducts(): Product[] {
        return this.productService.getAll();
    }

    @Get(':id')
    getProduct(@Param() params): Product {
        return this.productService.getOne(params.id);
    }

    @Post()
    createProduct(@Body() product: Product) {
        this.productService.create(product);
    }

    @Put(':id')
    updateProduct(@Body() product: Product): Product {
        return this.productService.update(product);
    }

    @Delete(':id')
    deleteProduct(@Param() params) {
        this.productService.delete(params.id);
    }
}

