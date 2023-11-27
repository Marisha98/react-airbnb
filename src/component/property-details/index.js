import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function PropertyDetails({ guests, bedrooms, beds, baths }) {
  return (
    <div>
      <Box shadow>
        <Heading border>Property details</Heading>

        <ul className="property-details__list">
          <ListItem imageSrc="../../svg/guests-icon.svg">
            {guests} guest(s)
          </ListItem>
          <ListItem imageSrc="../../svg/bedrooms-icon.svg">
            {bedrooms} bedroom(s)
          </ListItem>
          <ListItem imageSrc="../../svg/beds-icon.svg">{beds} bed(s)</ListItem>
          <ListItem imageSrc="../../svg/baths-icon.svg">
            {baths} bath(s)
          </ListItem>
        </ul>
      </Box>
    </div>
  );
}
