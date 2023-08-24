// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js Auth App</h1>
      <p>This is a simple Next.js application with authentication.</p>
      <Link href="/signup">Signup</Link>
      <br />
      <Link href="/login">Login</Link>
      <br />
      <Link href="/dashboard">dashboard</Link>
    </div>
  );
};

export default HomePage;
