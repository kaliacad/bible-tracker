import { books } from "../../data/books";

function GlobalProgressBar() {
  const bookTitles = books.map((book) => book.title);
  const chapitresLus = bookTitles.reduce(
    (acc, bookTitle) =>
      acc + (JSON.parse(localStorage.getItem(bookTitle)) || []).length,
    0
  );
  console.log("bookTitles", bookTitles);
  const totalChap = books.reduce((acc, book) => acc + book.chapter, 0);
  const percentage = Math.round((chapitresLus * 100) / totalChap);
  console.log("TatalChapters", totalChap);
  const bookChap = books.map((book) => book.chapter);
  console.log("bookChap", bookChap);

  return (
    <div className="container-progress">
      <p>{percentage}%</p>

      {/* Main container width based on total chapters */}
      <div className="g-progress-bar-container" style={{ width: `${totalChap}px`, height: "1px" }}>
        
        {/* Use map() to iterate over books and generate progress bars */}
        {books.map((book, index) => {
          const readChapters = JSON.parse(localStorage.getItem(book.title)) || [];
          const bookPercentage = Math.round((readChapters.length * 100) / book.chapter);
          
          console.log(`Read chapters for ${book.title}:`, readChapters);

          return (
            <div key={index} className="i-progress-bar-container" style={{ width: `${book.chapter}px` }}>
              <div
                className="i-progress-bar segment-read-color"
                style={{ width: `${bookPercentage}%` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default GlobalProgressBar;
