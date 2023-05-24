import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetails() {
  const { slug } = useParams()
  const book = books.find(item => item.id == slug)

    return (
        <>
        <Link to="/">Retour</Link>
        <h2>{ book.title } </h2>
        <p>Nombre de chapitres: { book.chapter }</p>
        </>
      )
}