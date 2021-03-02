//const express = require('express')
//const app = express()  
const apiMeLi = "https://api.mercadolibre.com"
const axios = require('axios').default;
const transformItemsSearch = require("../services/items.service.js").transformItemsSearch;
const transformItem = require("../services/items.service.js").transformItem;
const app = require("../../app.js").app;

const getItems = app.get('/api/items', async (req, res) => {   
  try {
  const responseExternalApi = await axios.get(apiMeLi + '/sites/MLA/search?q=' + req.query.q);
  const responseTransformed = transformItemsSearch(responseExternalApi.data)
  res.status(200).send(responseTransformed)
} catch (error) {
  console.error(error);
  res.status(500).send("Internal Server Error")
}
})

const getItemById = app.get('/api/items/:id', async (req, res) => {   
    try {
    const responseGetItem = await axios.get(apiMeLi + '/items/' + req.params.id);
    const responseGetItemDescription = await axios.get(apiMeLi + '/items/' + req.params.id + '/description');
    const responseTransformed = transformItem(responseGetItem.data, responseGetItemDescription.data)
    res.status(200).send(responseTransformed)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error")
  }
  })

module.exports = {
    getItems,
    getItemById
  };


