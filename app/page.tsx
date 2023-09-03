import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Custom Checkout</h1>
      <Link href="/CustomerForm">Go to Customer Form</Link>
    </div>
  );
};

export default Home;
