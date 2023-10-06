import express from 'express';
import axios from 'axios';

const app = express();

app.get('/numbers', async (req: { query: { url: string[]; }; }, res: { send: (arg0: any[]) => void; }) => {
  const urls = req.query.url as string[];
  const numbers = await Promise.all(urls.map(async (url) => {
    const response = await axios.get(url);
    return response.data.number;
  }));

  return res.send(numbers);
});

app.listen(3000, () => {
  console.log('Server is listening in 3000');
});
