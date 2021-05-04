import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import Book from './book.model';
import { BooksService } from "./books.service";

@Controller('books')
export default class BooksController {

    constructor(private bookService: BooksService) {

    }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.getAll();
    }

    @Get(':id')
    async getBook(@Param() params): Promise<Book> {
        return this.bookService.getOne(params.id);
    }

    @Post()
    async createBook(@Body() book: Book) {
        this.bookService.create(book);
    }

    @Put(':id')
    async updateBook(@Body() book: Book): Promise<[number, Book[]]> {
        return this.bookService.update(book);
    }

    @Delete(':id')
    async deleteBook(@Param() params) {
        this.bookService.delete(params.id);
    }
}

