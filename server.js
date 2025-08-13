const express = require('express');
const app = express();
const port = 3000;

app.get('/restaurants', (req, res) => {
  res.json([
    { id: 1, name: "Zomato  Restaurant" },
    { id: 2, name: "Foodie Hub" }
  ]);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
