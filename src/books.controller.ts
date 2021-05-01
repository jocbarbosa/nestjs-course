import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import Book from './book.model';
import { BooksService } from "./books.service";

@Controller('books')
export default class BooksController {

    constructor(private bookService: BooksService) {

    }

    @Get()
    getAllBooks(): Book[] {
        return this.bookService.getAll();
    }

    @Get(':id')
    getBook(@Param() params): Book {
        return this.bookService.getOne(params.id);
    }

    @Post()
    createBook(@Body() book: Book) {
        this.bookService.create(book);
    }

    @Put(':id')
    updateBook(@Body() book: Book): Book {
        return this.bookService.update(book);
    }

    @Delete(':id')
    deleteBook(@Param() params) {
        this.bookService.delete(params.id);
    }
}

