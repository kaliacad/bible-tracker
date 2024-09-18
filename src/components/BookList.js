import { Link } from "react-router-dom";
import { books } from "../data/books";
import GlobalProgressBar from "./ProgressBar/GlobalProgressBar";
import ProgressBar from "./ProgressBar/ProgressBar";

export default function BookList() {
  const listItems = books.map((book) => {
    const selecteds = localStorage.hasOwnProperty(book.title)
      ? JSON.parse(localStorage.getItem(book.title))
      : [];

    const progresBarsTable = new Array(book.chapter).fill("0");
    const mappedProgresBarsTable = progresBarsTable.map((chap, index) => {
      if (selecteds.includes(index + 1)) return (chap = "1");
      else return chap;
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        key={book.id}
      >
        <Link
          to={`/books/${book.id}`}
          style={{
            textDecoration: "none",
            color: "#000",
            width: "50%",
          }}
          key={book.id.toString()}
        >
          <li
            style={{
              listStyleType: "none",
              borderRadius: "5px",
              border: "2px solid #fff",
              boxShadow: "0 1px 7px #999",
              padding: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <h4 style={{ margin: "5px" }}>{book.title}</h4>
              <p style={{ margin: "5px" }}>
                {Math.round((selecteds.length / book.chapter) * 100)}%
              </p>
            </div>
            <ProgressBar percentage={mappedProgresBarsTable} />
          </li>
        </Link>
      </div>
    );
  });

  return (
    <>
      <h2>Liste des livres</h2>
      <GlobalProgressBar />
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "7px",
        }}
      >
        {listItems}
      </ul>
    </>
  );
}
