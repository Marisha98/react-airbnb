import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function AttractionNearby({ attractions_nearby }) {
  const { id, name, link } = attractions_nearby;
  return (
    <div>
      <Box shadow>
        <Heading border>Attractions nearby</Heading>

        <ul className="property-details__list">
          {attractions_nearby.map((attraction) => {
            return (
              <ListItem key={attraction.id}>
                <a href={attraction.link}>{attraction.name}</a>
              </ListItem>
            );
          })}
        </ul>
      </Box>
    </div>
  );
}
