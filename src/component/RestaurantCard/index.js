import { Component } from "react";
import styled from "styled-components/native";
import { Link } from "react-router-native";
import { Card, Title, Paragraph } from "react-native-paper";
const Li = styled(Link)`
  margin-top: 10px;
`;

const CardStyled = styled(Card)`
  padding: 10px;
`;

class RestaurantCard extends Component {
  render() {
    const { list } = this.props;

    return (
      <Li to={`/${list.id}`} className="home__restaurant-link">
        <CardStyled elevation={2}>
          <Card.Cover source={{ uri: list.imageUrl }} />
          <Title>{list.name}</Title>
          <Paragraph className="home__restaurant-cuisine">
            {list.cuisine}
          </Paragraph>
        </CardStyled>
      </Li>
    );
  }
}

export default RestaurantCard;
