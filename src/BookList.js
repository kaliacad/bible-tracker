const books = [
    { title: 'Proverbe', chapter: 50, id: 1 },
    { title: 'Tite', chapter: 3, id: 2 },
    { title: 'Phielemon', chapter: 1, id: 3 },
    { title: 'Hebreux', chapter: 1, id: 4 },
    { title: 'Jacques', chapter: 1, id: 5 },
  ];
  
  export default function BookList() {
    const listItems = books.map(book =>
      <li
        key={book.id}
        style={{
          listStyleType: 'none',
          borderRadius: '5px',
          border: '2px solid #fff',
          boxShadow: '0 1px 7px #999',
          padding: '5px'
        }}
      >
        {book.title} <br/>
        <label for="file">70%</label>
        <progress id="file" max="100" value="70"> 70% </progress>
      </li>
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