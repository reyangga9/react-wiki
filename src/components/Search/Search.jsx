import styles from "./Search.module.css";

export default function Search({ setSearchName, setPageNumber }) {
  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <form
        className="container justify-content-center d-flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Search for Characters"
          className={`${styles.input} 3`}
          onChange={(e) => {
            setPageNumber(1);
            setSearchName(e.target.value);
          }}
        />
        <button className={`${styles.btn} btn btn-primary fs-5 sm-d-none`}>
          Search{" "}
        </button>
      </form>
    </div>
  );
}
