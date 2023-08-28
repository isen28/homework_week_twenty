import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileDetailed';
import Container from '../components/UI/ListItem';

import API from '../utils/API';

export default function ProfilePage() {
  const [user, setUser] = useState({});

  return (
    <>
      <p>Contact Info</p>
    </>
  );
}
