class Book {
//properties / attributes
    title: string;
    pages: number;
    author: string;
    type: string;
    stock: number;

// parameter dari class book
    constructor(title: string, pages: number, author: string, type: string, stock: number) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.type = type;
        this.stock = stock;
    }
    
    // medthod dari class bookk
    borrow() {
        if (this.stock === 0) {
            throw new Error(`Stok Buku "${this.title}" sedang habis`)
        }
        this.stock--;
    }
    returnBook() {
        this.stock++;
    }
}

class Member {
    name: string;
    studentId: string
    private borrowedBooks: Book[] = [] ;

    constructor(name: string, studentId: string) {
        this.name = name;
        this.studentId = studentId;
    }
    borrow(book: Book) {
        if (this.borrowedBooks.length >= 3) {
            throw new Error(`gagal: ${this.name} sudah meminjam batas maksimal 3 buku.`);
        }
        book.borrow();
        this.borrowedBooks.push(book);
        console.log(`${this.name} berhasil meminjam "${book.title}". Sisa stock buku: ${book.stock}`);
    }
    returnBook(book: Book) {
        const index = this.borrowedBooks.findIndex(b => b.title === book.title);

        if (index === -1) {
            console.log(`${this.name} tidak sedang meminjam buku "${book.title}".`);
            return;
        }
        this.borrowedBooks.splice(index, 1);
        book.returnBook();
        console.log(`${this.name} berhasil mengembalikan "${book.title}". sisa stock buku: ${book.stock}`);
    }
}

const book1 = new Book("Laskar Pelangi", 529, "Andrea Hirata", "Novel", 2);
const book2 = new Book("One Piece", 100, "Eiichiro Oda", "Comic", 1);
const book3 = new Book("Filosofi Teras", 320, "Henry Manampiring", "Edukasi", 3);


const member1 = new Member("Bintang", "STD001");
const member2 = new Member("Siti", "STD002");

console.log("--- Pengujian Meminjam Buku ---")

member1.borrow(book1);
member1.borrow(book2);
member1.borrow(book3);

try {
    member1.borrow(book1);
} catch (error: any) {
    console.error(error.message);
}

console.log("\n--- Pengujian Mengambalikan & Peminjaman baru ---");
member1.returnBook(book2);
member2.borrow(book2);