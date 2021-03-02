//const express = require('express')
//const app = express()  
const port = 3600
const app = require("./app.js").app;
//const apiMeLi = "https://api.mercadolibre.com"
//const axios = require('axios').default;
/*
const Price = require("./items/models/items.model.js").Price;
const Item = require("./items/models/items.model.js").Item;
const ItemsResponse = require("./items/models/items.model.js").ItemsResponse;
const Author = require("./items/models/items.model.js").Author;*/
//const transformItem = require("./items/services/items.service.js").transformItem;


/*
const transformItem = (data) => {    
  const results = data.results.slice(0,4)
  const items = []
  const categories = []
  results.map(x => {
    const price = new Price(x.currency_id, x.price);
    const item = new Item(x.title, price , x.thumbnail, x.condition, x.shipping.free_shipping)
    items.push(item);
    if (categories.indexOf(x.category_id) === -1) {
      categories.push(x.category_id)
    }
  });
  const author = new Author(authorName, authorLastName)
  return new ItemsResponse(items, categories, author);
}


app.get('/api/items', async (req, res) => {   
  try {
  const responseExternalApi = await axios.get(apiMeLi + '/sites/MLA/search?q=' + req.query.q);
  const responseTransformed = transformItem(responseExternalApi.data)
  res.status(200).send(responseTransformed)
} catch (error) {
  console.error(error);
  res.status(500).send("Internal Server Error")
}
})
*/

const getItems = require('./items/controllers/items.controller').getItems;

app.listen(port, () => {  
  console.log(`MeLi app listening at http://localhost:${port}`)
})



