import { Link } from 'react-router-dom';
import { books } from '../data/books';

export default function BookList() {

  const listItems = books.map((book) =>
    <Link to={`/books/${book.id}`}>
      <li
        key={book.id.toString()}
        style={{
          listStyleType: 'none',
          borderRadius: '5px',
          border: '2px solid #fff',
          boxShadow: '0 1px 7px #999',
          padding: '5px',
          cursor: 'pointer'
        }}
      >
        {book.title} <br />
        <label for="file"><small>70%</small></label>
        <progress id="file" max="100" value="70"> 70% </progress>
      </li>
    </Link>
  );

  return (
    <>
      <h2>Liste des livres</h2>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '7px'
        }}
      >
        {listItems}
      </ul>
    </>
  );
}