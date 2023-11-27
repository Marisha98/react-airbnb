import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function AdditionalProperties({ additional_properties }) {
  const {
    house_rules,
    cancellation_policy,
    local_transportation,
    host_languages,
    special_offers,
    checkin_instructions,
  } = additional_properties;
  return (
    <div>
      <Box shadow>
        <Heading border>Additional properties</Heading>

        <ul className="property-details__list">
          <ListItem title="House rules">{house_rules}</ListItem>
          <ListItem title="Cancellation policy">{cancellation_policy}</ListItem>
          <ListItem title="Local transportation">
            {local_transportation}
          </ListItem>
          <ListItem title="Host languages">
            {host_languages.map((language, index) => {
              if (index === host_languages.length - 1) {
                return <span key={index}>{language}</span>;
              } else {
                return <span key={index}>{language}, </span>;
              }
            })}
          </ListItem>
          <ListItem title="Special offers">{special_offers}</ListItem>
          <ListItem title="Check-in instructions">
            {checkin_instructions}
          </ListItem>
        </ul>
      </Box>
    </div>
  );
}
