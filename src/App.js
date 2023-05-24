import { Routes, Route } from "react-router-dom";

import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

function App() {

  return (
    <>
      
        <Routes>
          <Route path="/" element={<BookList />} />

          <Route
            path="/books/:slug"
            element={<BookDetails />}
          />
        </Routes>
      
    </>
  );
}

export default App;
