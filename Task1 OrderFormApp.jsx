import React from "react";
import OrderForm from "./Fullstack/React/Orderform";
import bg from "./assets/bg.jpg"; // background image stored in src/assets

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>
      <OrderForm />
    </div>
  );
}

const styles = {
  page: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(245,230,204,0.4)", // Soft cream tint overlay
  }
};

export default App;
