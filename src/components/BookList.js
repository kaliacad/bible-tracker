import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';
import GlobalProgressBar from './ProgressBar/GlobalProgressBar';

export default function BookList() {
  const firstColumn = books.slice(0, 39);
  const secondColumn = books.slice(39);

  const renderColumn = (columnBooks) => {
    return columnBooks.map((book) => (
      <Link to={`/books/${book.id}`} style={{
        textDecoration: 'none',
        color: '#000',
        width: '50%',
      }} key={book.id.toString()}>
        <li style={{
          listStyleType: 'none',
          borderRadius: '5px',
          border: '2px solid #fff',
          boxShadow: '0 1px 7px #999',
          padding: '5px',
          cursor: 'pointer',
        }}>
          {book.title}
        </li>
      </Link>
    ));
  };

  return (
    <>
      <h2>Liste des livres</h2>
      <GlobalProgressBar />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Old Testament</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '550rem' }}>
          {renderColumn(firstColumn)}
        </ul>
        <h2>New Testament</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '550rem' }}>
          {renderColumn(secondColumn)}
        </ul>
      </div>
    </>
  );
}