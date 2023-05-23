import { Routes, Route } from "react-router-dom";

import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

function App() {
  function handleClick() {

  }

  return (
    <>
      
        <Routes>
          <Route path="/" element={<BookList />} />



          <Route
            path="/books/:slug"
            element={<BookDetails />}
          />
        </Routes>
      

      {/* <BookList onClick={handleClick} /> */}
    </>
  );
}

export default App;
