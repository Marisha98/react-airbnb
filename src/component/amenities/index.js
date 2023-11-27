import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function Amenities({ amenities }) {
  const {
    hasPool,
    hasGym,
    hasFreeBreakfast,
    hasFreeWiFi,
    hasParking,
    hasPetsAllowed,
    hasAirportShuttle,
    hasConciergeService,
    hasRoomService,
    hasChildFriendly,
  } = amenities;
  return (
    <div>
      <Box shadow>
        <Heading border>Amenities</Heading>

        <ul className="property-details__list">
          {hasPool ? (
            <ListItem imageSrc="../../svg/pool-icon.svg">
              Swimming pool
            </ListItem>
          ) : (
            ""
          )}

          {hasGym ? (
            <ListItem imageSrc="../../svg/gym-icon.svg">Gym</ListItem>
          ) : (
            ""
          )}

          {hasFreeBreakfast ? (
            <ListItem imageSrc="../../svg/free-breakfast-icon.svg">
              Free breakfast
            </ListItem>
          ) : (
            ""
          )}

          {hasFreeWiFi ? (
            <ListItem imageSrc="../../svg/free-wifi-icon.svg">
              Free Wi-Fi
            </ListItem>
          ) : (
            ""
          )}

          {hasParking ? (
            <ListItem imageSrc="../../svg/free-parking-icon.svg">
              Free parking
            </ListItem>
          ) : (
            ""
          )}

          {hasPetsAllowed ? (
            <ListItem imageSrc="../../svg/pets-allowed-icon.svg">
              Pets allowed
            </ListItem>
          ) : (
            ""
          )}

          {hasAirportShuttle ? (
            <ListItem imageSrc="../../svg/transfer-icon.svg">Transfer</ListItem>
          ) : (
            ""
          )}

          {hasConciergeService ? (
            <ListItem imageSrc="../../svg/concierge-service-icon.svg">
              Concierge service
            </ListItem>
          ) : (
            ""
          )}

          {hasRoomService ? (
            <ListItem imageSrc="../../svg/room-service-icon.svg">
              Room service
            </ListItem>
          ) : (
            ""
          )}

          {hasChildFriendly ? (
            <ListItem imageSrc="../../svg/children-icon.svg">
              Child friendly
            </ListItem>
          ) : (
            ""
          )}
        </ul>
      </Box>
    </div>
  );
}
