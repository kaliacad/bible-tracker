import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { books } from "../data/books";
import ProgressBar from "./ProgressBar/ProgressBar";
import NotFoundPage from "./NotFound/NotFoundPage";

export default function BookDetails() {
  const { slug } = useParams();

  const validBookIds = Array.from({ length: 66 }, (_, i) => i + 1);
  const isValidBookIdPage = validBookIds.includes(parseInt(slug, 10));
  if (!isValidBookIdPage) {
    return <NotFoundPage />;
  }

  const book = books.find((item) => item.id == slug);
  const chapters = Array.from(
    { length: book.chapter },
    (value, idx) => idx + 1
  );

  const localStorageKey = book.title;

  const [selecteds, setSelecteds] = useState(
    localStorage.hasOwnProperty(localStorageKey)
      ? JSON.parse(localStorage.getItem(localStorageKey))
      : []
  );
  const COLORS = {
    selected: "rgb(254 245 231)",
  };

  const handleClick = (chap) => {
    if (selecteds.includes(chap)) {
      const myChaps = selecteds.filter((el) => el !== chap);
      setSelecteds(myChaps);
      localStorage.setItem(localStorageKey, JSON.stringify(myChaps));
    } else {
      setSelecteds((prev) => [...prev, chap]);
      localStorage.setItem(
        localStorageKey,
        JSON.stringify([...selecteds, chap])
      );
    }
  };

  const progresBarsTable = new Array(book.chapter).fill("0");
  const mappedProgresBarsTable = progresBarsTable.map((chap, index) => {
    if (selecteds.includes(index + 1)) return (chap = "1");
    else return chap;
  });

  const progressionLecture = Math.round(
    (selecteds.length / book.chapter) * 100
  );

  const [title, setTitle] = useState(book.title);

  useEffect(() => {
    document.title = book.title + " | Bible Track";
  }, [book]);

  const handleRetourClick = () => {
    document.title = "Bible Track";
  };

  return (
    <>
      <Link to="/" onClick={handleRetourClick}>
        Retour
      </Link>
      <h2>{book.title}</h2>
      <div className="container-progress">
        <p>{progressionLecture}%</p>
        <ProgressBar percentage={mappedProgresBarsTable} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {chapters.map((chap, idx) => {
          return (
            <div
              style={{
                borderRadius: ".25rem",
                boxShadow: "0 1px 7px #999",
                padding: "2em",
                height: "5em",
                width: "5em",
                backgroundColor: selecteds.includes(chap)
                  ? COLORS.selected
                  : "",
                cursor: "pointer",
              }}
              onClick={() => handleClick(chap)}
              key={(idx + 1).toString()}
            >
              {chap}
            </div>
          );
        })}
      </div>
    </>
  );
}
