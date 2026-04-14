const express = require('express');
const app = express();

app.use(express.json());

// Feedback endpoint
app.post('/api/feedback', (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));