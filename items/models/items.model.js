class ItemsSearchResponse {
  constructor(items, categories, author) {
    this.items = items
    this.author = author
    this.categories = categories
  }
}

class ItemResponse {
  constructor(author, item) {
    this.author = author
    this.item = item
  }
}

class Price {
  constructor(currency, amount) {
    this.currency = currency
    this.amount = amount
    this.decimals = "00"
  }
}

class Item {
  constructor(id, title, price, picture, condition, freeShiping, city, soldQuantity = null, description = null) {
    this.id = id
    this.title = title
    this.price = price
    this.picture = picture
    this.condition = condition
    this.free_shipping = freeShiping
    this.city = city
    this.sold_quantity = soldQuantity
    this.description = description 
  }
}

class Author {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
}

module.exports = {
  Price,
  Author,
  ItemResponse,
  ItemsSearchResponse,
  Item
};