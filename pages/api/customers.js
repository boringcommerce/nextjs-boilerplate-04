// pages/api/customers.js

import { getDb } from '../../db';

export default async function handler(req, res) {
    const db = await getDb();
    const customers = await db.all('SELECT * FROM customers');
    res.json(customers);
}
