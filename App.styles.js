import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  card: {
    backgroundColor: "#2D2E30",
    margin: 10,
    padding: 5,
    height: 180,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  cardText: {
    color: "white",
  }
});

export default styles;