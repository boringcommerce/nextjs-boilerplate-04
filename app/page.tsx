import React from 'react';
import { useClient } from 'react';
import CustomerForm from './CustomerForm';

function Page() {
  useClient(); // This tells Next.js that this is a client-side component

  return (
    <div>
      <h1>Welcome to the Custom Checkout</h1>
      <CustomerForm />
      {/* ... any other components or content you want to include */}
    </div>
  );
}

export default Page;
