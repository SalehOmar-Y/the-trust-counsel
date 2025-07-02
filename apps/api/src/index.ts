import express from 'express';
import cors from 'cors';

import healthRoutes from './routes/health';
import solicitorsRoutes from './routes/solicitors';

const app = express();

app.use(cors()); // Enable CORS for frontend requests

app.use('/health', healthRoutes);
app.use('/solicitors', solicitorsRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
