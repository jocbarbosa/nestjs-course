import { Injectable } from "@nestjs/common";
import Book from "./book.model";

@Injectable()
export class BooksService {
    bookList: Book[] = [
        new Book('LIV01', 'Aprendendo Node JS', 199.99),
        new Book('LIV02', 'Aprendendo Flutter', 99.99)
    ]

    getAll(): Book[] {
        return this.bookList;
    }

    getOne(id: Number): Book {
        return this.bookList[0];
    }

    create(book: Book) {
        this.bookList.push(book);
    }

    update(book: Book): Book {
        return book;
    }

    delete(id: Number) {
        this.bookList.pop();
    }
}