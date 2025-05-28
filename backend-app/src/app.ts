import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';            // <-- import cors
import router from './routes';
import './firebase';                // Firebase initialization

const app = express();
const PORT = 4000;

// Enable CORS for localhost:3000 only
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,              // if you use cookies/auth headers
}));

app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
