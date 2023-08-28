import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';

import API from '../utils/API';

export default function HomePage() {

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        <p>About</p>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Resume</p>
      </ul>
    </div>
  );
}
