import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetails() {
  const { slug } = useParams()
  const book = books.find(item => item.id == slug)
  const chapters = Array.from({ length: book.chapter }, (value, idx) => idx + 1)

  return (
    <>
      <Link to="/">Retour</Link>
      <h2>{book.title} </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
        }}
      >
        {
          chapters.map(chap =>
            <p
              style={{
                borderRadius: '.25rem',
                boxShadow: '0 1px 7px #999',
                padding: '2em',
                height: '5em',
                width: '5em'
              }}
            >
              {chap}
            </p>
          )
        }
      </div>
    </>
  )
}