import { books } from "../../data/books";

function GlobalProgressBar() {
  const bookTitles = books.map((book) => book.title);
  const chapitresLus = bookTitles.reduce(
    (acc, bookTitle) =>
      acc + (JSON.parse(localStorage.getItem(bookTitle)) || []).length,
    0
  );
  console.log("bookTitles", bookTitles)
  const totalChap = books.reduce((acc, book) => acc + book.chapter, 0);
  const percentage = Math.round((chapitresLus * 100) / totalChap);

  return (
    <div className="container-progress">
      <p>{percentage}%</p>
      <div className={`progress-bar-container`}>
        <div
          className={`progress-bar segment-read-color`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
export default GlobalProgressBar;
