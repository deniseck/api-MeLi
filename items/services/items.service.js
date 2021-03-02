const Price = require("../models/items.model.js").Price;
const Item = require("../models/items.model.js").Item;
const ItemResponse = require("../models/items.model.js").ItemResponse;
const ItemsSearchResponse = require("../models/items.model.js").ItemsSearchResponse;
const Author = require("../models/items.model.js").Author;
const authorName = require("../../config.js").authorName;
const authorLastName = require("../../config.js").authorLastName;

const transformItemsSearch = (data) => {    
  const results = data.results.slice(0,4)
  const items = []
  const categories = []
  results.map(x => {
    const price = new Price(x.currency_id, x.price);
    const item = new Item(x.id, x.title, price , x.thumbnail, x.condition, x.shipping.free_shipping, x.address.city_name)
    items.push(item);
    if (categories.indexOf(x.category_id) === -1) {
      categories.push(x.category_id)
    }
  });
  const author = new Author(authorName, authorLastName)
  return new ItemsSearchResponse(items, categories, author);
}


const transformItem = (itemParam, description) => {    
    const author = new Author(authorName, authorLastName)
    const price = new Price(itemParam.currency_id, itemParam.price);
    const item = new Item(itemParam.id, itemParam.title, price ,itemParam.pictures[0].url, itemParam.condition,
         itemParam.shipping.free_shipping, null, itemParam.sold_quanity, description.plain_text)
    return new ItemResponse(author, item);
  }


module.exports = {
    transformItemsSearch,
    transformItem
  };