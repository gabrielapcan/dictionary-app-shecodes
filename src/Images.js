import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.data) {
    return (
      <section className="Images">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-6 col-sm-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  label="original photo link"
                >
                  <div className="around-photo">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid display-images"
                      alt="searched word dislpay example"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
