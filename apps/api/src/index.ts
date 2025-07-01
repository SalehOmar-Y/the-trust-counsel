import express from 'express';
import router from './routes';

const app = express();
const PORT = 4000;

app.use(express.json()); // to parse JSON request bodies
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
