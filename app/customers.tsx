// app/Customers.tsx

import React from 'react';
import { useEffect, useState } from 'react';

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCustomers() {
            const response = await fetch('/api/customers');
            const data = await response.json();
            setCustomers(data);
            setLoading(false);
        }

        fetchCustomers();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.first_name} {customer.last_name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
