// app/CustomerForm.tsx

import React from 'react';
import { useState } from 'react';

export default function CustomerForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        phone_number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success) {
            alert('Customer added successfully!');
            // You can add code here to refresh the customers list or navigate to another page
        } else {
            alert('Error adding customer.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
            <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
            <input name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" />
            <button type="submit">Add Customer</button>
        </form>
    );
}
