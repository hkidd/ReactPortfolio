import React from "react";

const styles = {
  header: {
    width: "75%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
};

export default function Header() {
  return (
    <div className="container">
      <header style={styles.header}>
        <h2>Harrison Kidd</h2>
      </header>
    </div>
  );
}
