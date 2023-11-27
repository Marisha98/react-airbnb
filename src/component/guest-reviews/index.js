import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function ReviewsList({ list }) {
  return (
    <div className="reviews__block">
      <Heading>Guest reviews</Heading>

      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__header">
        <span className="review__sender">{guestName}</span>
        <span className="review__rating">Rating: {rating}</span>
      </div>
      <span className="review__description">{review}</span>
    </Box>
  );
}
