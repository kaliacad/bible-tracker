import { books } from "../../data/books";
import ProgressBar from "./ProgressBar";

function GlobalProgressBar() {
  const bookTitles = books.map((book) => book.title);
  const chapitresLus = bookTitles.reduce(
    (acc, bookTitle) =>
      acc + (JSON.parse(localStorage.getItem(bookTitle)) || []).length,
    0
  );
  const totalChap = books.reduce((acc, book) => acc + book.chapter, 0);
  const percentage = Math.round((chapitresLus * 100) / totalChap);
  const bookChap = books.map((book) => book.chapter);

  const progresBarsTable = [];
  books.forEach((book) => {
    const readChapters = JSON.parse(localStorage.getItem(book.title)) || [];
    const chapters = new Array(book.chapter).fill("0");
    chapters.forEach((_, index) => {
      if (readChapters.includes(index)) progresBarsTable.push("1");
      else progresBarsTable.push("0");
    });
  });
  return (
    <div className="container-progress">
      <p>{percentage}%</p>
      {/* Use map() to iterate over books and generate progress bars */}
      <ProgressBar percentage={progresBarsTable} />
    </div>
  );
}
export default GlobalProgressBar;
