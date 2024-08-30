import { Routes, Route } from "react-router-dom";

import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

import NotFoundPage from "./components/NotFound/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />

        <Route path="/books/:slug" element={<BookDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
