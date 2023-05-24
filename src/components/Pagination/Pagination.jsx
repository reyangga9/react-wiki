import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ api, pageNumber, setPageNumber }) {
  let { info } = api;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      nextClassName="btn border border-primary "
      previousClassName="btn border border-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageRangeDisplayed={width < 576 ? 0 : 1}
      marginPagesDisplayed={width < 576 ? 0 : 2}
      pageCount={info?.pages}
      activeClassName="active"
    />
  );
}
