import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let [searchName, setSearchName] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchName}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);
  return (
    <>
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search setSearchName={setSearchName} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row justify-content-center">
          <div className=" col-12 ">
            <div className="row">
              <Cards data={fetchedData.results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        api={fetchedData}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </>
  );
}

export default App;
