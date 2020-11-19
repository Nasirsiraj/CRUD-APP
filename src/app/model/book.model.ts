export class Book {
  public id ?: number;
  public subject ?: string;
  public bookName ?: string;
  public writerName ?: string;
  public price ?: number;


  constructor(id ?: number,
              subject ?: string,
              bookName ?: string,
              writerName ?: string,
              price ?: number) {
    this.id = id;
    this.subject = subject;
    this.bookName = bookName;
    this.writerName = writerName;
    this.price = price;
  }
}
