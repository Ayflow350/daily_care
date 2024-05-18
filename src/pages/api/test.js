import { NextApiRequest, NextApiResponse } from 'next'; // Import types for request and response

/**
 * An example GET API route in Next.js
 */
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Example response to indicate the endpoint is reachable
    res.status(200).json({ message: 'GET request successful', data: { key: 'value' } });
  } else {
    // Handle other request methods, if needed
    res.status(405).json({ message: 'Method Not Allowed' }); // 405: Method Not Allowed
  }
}
