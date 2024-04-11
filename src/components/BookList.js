import { Link } from "react-router-dom";
import { books } from "../data/books";
import GlobalProgressBar from "./ProgressBar/GlobalProgressBar";

export default function BookList() {
  const listItems = books.map((book) => (
    <div style={ {
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>


  

    <Link to={`/books/${book.id}`} style={{
      textDecoration: 'none',
      color: '#000',
      width: '50%',
    }}
    key={book.id.toString()}>
      <li
        style={{
          listStyleType: "none",
          borderRadius: "5px",
          border: "2px solid #fff",
          boxShadow: "0 1px 7px #999",
          padding: "5px",
          cursor: "pointer",
          
        }}
      >
        {book.title}
      </li>
    </Link>
    </div>
  ));

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
