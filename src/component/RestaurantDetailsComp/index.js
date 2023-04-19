import { useEffect, useState } from "react";
import { Text, Card, Title, Paragraph } from "react-native-paper";
import { useParams } from "react-router-native";

const RestaurantDetailsComp = (props) => {
  console.log(props);
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getRestDetails = async () => {
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`;
    const jwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU";
    const option = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    const response = await fetch(apiUrl, option);
    const data = await response.json();
    setDetails(data);
  };
  useEffect(getRestDetails, []);
  return (
    <Card style={{ color: "blue", fontSize: 30, padding: 10, margin: 10 }}>
      <Card.Cover source={{ uri: details.image_url }} />
      <Title>{details.name}</Title>
      <Paragraph>{details.cuisine}</Paragraph>
      <Paragraph>{details.location}</Paragraph>

      <Paragraph>{details.rating}</Paragraph>

      <Paragraph>{`${details.reviews_count}+ Ratings`}</Paragraph>

      <Paragraph>{`₹ ${details.cost_for_two}`}</Paragraph>
      <Paragraph>Cost for two</Paragraph>
    </Card>
  );
};

export default RestaurantDetailsComp;
