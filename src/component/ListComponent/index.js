import { Component } from "react";
import styled from "styled-components/native";
import { Text, FlatList, View } from "react-native";
import camelize from "camelize";
import RestaurantCard from "../RestaurantCard";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

class ListComponent extends Component {
  state = { restList: [] };

  componentDidMount() {
    this.getRestaruntList();
  }

  getRestaruntList = async () => {
    const jwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU";
    const option = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
    const offset = 0;
    const selecedValue = "Highest";
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=20&sort_by_rating=${selecedValue}`;
    const response = await fetch(apiUrl, option);
    const data = await response.json();
    const { total } = data;
    this.setState({
      restList: camelize(data.restaurants),
    });
  };

  render() {
    const { restList } = this.state;
    return (
      <View>
        <RestaurantList
          data={restList}
          renderItem={({ item }) => <RestaurantCard list={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default ListComponent;
