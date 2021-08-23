import React from 'react';
import Headshot from '../images/IMG_0527.jpeg';

const styles = {
  profileImage: {
    display: 'flex',
    margin: 'auto',
    width: '30%',
    height: 'auto',
    border: '3px solid var(--main-accent)',
    borderRadius: '20px',
  }
}


export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={Headshot} style={styles.profileImage} alt="My headshot" class="profile-image"></img>
      <p>
      Hi there!  My name is Harrison Kidd and I am an aspiring software developer.  Check out some of the cool things that I've been working on!
      </p>
    </div>
  );
}
