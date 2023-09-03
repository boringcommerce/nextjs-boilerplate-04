import React from 'react';
import { useClient } from 'react';
import CustomerForm from './CustomerForm.client';

function Home() {
    useClient();
    return (
        <div>
            <h1>Welcome to the Custom Checkout</h1>
            <CustomerForm />
        </div>
    );
}

export default Home;
