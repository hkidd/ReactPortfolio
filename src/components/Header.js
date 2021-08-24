import React from "react";

const styles = {
  header: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
  }
}

export default function Header() {
  return (
    <div class="container">
      <header style={styles.header}>
        <h2>Harrison Kidd</h2>
      </header>
    </div>
  );
};