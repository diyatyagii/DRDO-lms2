import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Allbooks.css";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";

function Allbooks() {
  const { user } = useContext(AuthContext); // ✅ VALID use inside a component

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const booksPerPage = 20;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/books/allbooks`)
      .then((res) => {
        setBooks(res.data);
        setFilteredBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setCurrentPage(1);
    const filtered = books.filter(
      (book) =>
        book.Title?.toLowerCase().includes(term) ||
        book.Author1?.toLowerCase().includes(term)
    );
    setFilteredBooks(filtered);
  };

  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="books-page">
      <h2 className="books-heading">📚 Library Book Collection</h2>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={handleSearch}
          className="book-search-input"
        />
      </div>

      <div className="books-table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Language</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book, index) => (
              <tr key={book._id}>
                <td>{indexOfFirst + index + 1}</td>
                <td>{book.Title}</td>
                <td>{book.Author1}</td>
                <td>{book.Language || "N/A"}</td>
                <td>{book.Location || "Not Specified"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <p>
          Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredBooks.length)} of {filteredBooks.length} books
        </p>
        <div className="pagination-buttons">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            ⬅ Prev
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Allbooks;
