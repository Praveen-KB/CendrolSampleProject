import { Component } from "react";
import { StyleSheet, StatusBar, Platform, BackHandler } from "react-native";
import styled from "styled-components/native";
import ListComponent from "./src/component/ListComponent";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import RestaurantDetailsComp from "./src/component/RestaurantDetailsComp";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <SafeArea>
          <Routes>
            <Route excat path="/" element={<ListComponent id={1} />} />
            <Route excat path="/:id" Component={RestaurantDetailsComp} />
          </Routes>
        </SafeArea>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
