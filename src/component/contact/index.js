import { Fragment } from "react";
import Heading from "../heading";

import "./index.css";

export default function Contact({ contact_info }) {
  const { name, image, phone, response_time, response_rate, info } =
    contact_info;

  return (
    <Fragment>
      <div className="owner__section">
        <div className="owner-acc__info">
          <img className="owner__photo" src={image} />

          <div className="owner__block">
            <Heading>Hosted by {name}</Heading>
            <div className="owner__info-line">
              <span className="owner__info">{phone}</span>

              <span className="owner__info">{response_time}</span>

              <span className="owner__info">
                {response_rate}% response speed
              </span>
            </div>
          </div>
        </div>
        <div className="owner-acc__description">{info}</div>
      </div>
    </Fragment>
  );
}
