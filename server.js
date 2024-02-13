const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs');

app.get('/', (req, res) => {
  const category = req.query.category;
  const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));

  if (category) {
    const filteredProducts = products.filter(product => product.Category === category);
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}).on('error', (err) => {
  console.log('unable to start server', err);
});