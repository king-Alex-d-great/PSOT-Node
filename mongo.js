const mongoose = require("mongoose");

//Step one : require it
//Connect mongoose to our db
mongoose
  .connect("")
  .then(() => console.log("Connected to Db"))
  .catch((err) => console.log(`An error occured`, err));

//We create Schema
const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  category: [String],
});

//We create a model - class Human
const BookModel = mongoose.model("Book", bookSchema);
//Instance

let bookOne = new BookModel({
  title: "Marteris Circle",
  author: "Robert Hoodlum",
  year: 1257,
  category: ["fiction", "foreign"],
});

//Save it to our db
bookOne.save();

// Let’s build a library management system
// Add a book
let addBook = async (title, author, year, category) => {
  let bookOne = new BookModel({
    title,
    author,
    year,
    category,
  });

  //Save it to our db
  let book = await bookOne.save();
  console.log(book)
};

//addBook("Old man", "KIng Alex", 1021 ,["fantasy", "Alien"]);

// Get A book
let getBook = async (id) => {
    let book = await BookModel.findOne({ _id: id });
    console.log(book);
}

//getBook();

// Get All books
let getAllBooks = async (id) => {
  let books = await BookModel.find();
  console.log(books);
};

//getAllBooks();

// Update a book
let updateABook = async (id, newName) => {
    //Method One: Find and then update
    let book = await BookModel.findOne({ _id: id });
    book.author = newName;
    book = book.save();

    console.log(book, "BOOK")
    
    //Method Two : Update without finding
    let bookTwo = await BookModel.findByIdAndUpdate({ _id: id }, {author : newName});
    console.log(bookTwo, "BOOKTWO")
};
// Delete A book
let deleteABook = async (id) => {
  //Method One: Find and then update
  let book = await BookModel.findOne({ _id: id });
  book.author = newName;
  book = book.save();

  console.log(book, "BOOK");

  //Method Two : Update without finding
  let bookTwo = await BookModel.findByIdAndDelete(
    { _id: id },
    { author: newName }
  );
  console.log(bookTwo, "BOOKTWO");
};