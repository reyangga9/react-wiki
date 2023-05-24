import React from "react";
import styles from "./Cards.module.css";

export default function Cards({ data }) {
  let display;

  if (data) {
    display = data.map((x) => {
      return (
        <div
          key={x.id}
          className="col-lg-4 col-md-6 col-12 position-relative mb-5"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center `}
          >
            <img src={x.image} className={`${styles.img} img-fluid `} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{x.name}</div>
              <div className="">
                <div className="fs-6">Location</div>
                <div className="fs-5">{x.location.name}</div>{" "}
              </div>
            </div>
          </div>

          {x.status === "Alive" ? (
            <div className={`${styles.badge} bg-success `}>{x.status} </div>
          ) : x.status === "Dead" ? (
            <div className={`${styles.badge} bg-danger `}>{x.status}</div>
          ) : x.status === "unknown" ? (
            <div className={`${styles.badge} bg-dark `}>{x.status}</div>
          ) : (
            ""
          )}
        </div>
      );
    });
  } else {
    display = "No Character Found";
  }

  return <>{display}</>;
}
