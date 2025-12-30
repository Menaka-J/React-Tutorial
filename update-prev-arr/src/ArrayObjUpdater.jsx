import { useState } from "react"

function ArrObjUpdater() {

    const [books, setBooks] = useState([]);
    const [bookname, setBookname] = useState("");
    const [bookyear, setBookyear] = useState(new Date().getFullYear());
    const [bookauthor, setBookauthor] = useState("");

    function handlebkname(e) {
        setBookname(e.target.value);
    }

    function handlebkyear(e) {
        setBookyear(e.target.value);
    }

    function handlebkauthor(e) {
        setBookauthor(e.target.value);
    }

    function addbook() {
        const newbk = { name: bookname, year: bookyear, author: bookauthor };
        setBooks(b => ([...b, newbk]));
        setBookauthor("");
        setBookname("");
        setBookyear(new Date().getFullYear());
    }

    function deletebook(idx) {
        setBooks(books.filter((_, index) => index != idx));
    }

    return (
        <>

            <div className="rapper">
                <h2>ARRAY OF OBJECTS</h2>

                <div className="displaytxt">
                    <h2>BOOK DETAILS </h2>
                    <ul className="listitems">
                        {books.map((el, i) =>
                            <li key={i} onClick={() => deletebook(i)}>{el.year} {el.name} by {el.author}</li>
                        )}
                    </ul>
                </div>

                <div className="inputtxt">
                    <h2>INPUT FORM </h2>
                    <br />
                    <label>Enter Book Name:</label><br />
                    <input type="text" value={bookname} placeholder="Enter Book Name" onChange={handlebkname} />
                    <br /><br />

                    <label>Enter Book Year:</label><br />
                    <input type="number" value={bookyear} placeholder="Enter Year of Book" onChange={handlebkyear} />
                    <br /><br />

                    <label>Enter Book Author:</label><br />
                    <input type="text" value={bookauthor} placeholder="Enter Book Author" onChange={handlebkauthor} />
                    <br /><br />

                    <button className="button1" onClick={addbook}>Add Book </button>
                </div>
            </div>
        </>
    )
}

export default ArrObjUpdater