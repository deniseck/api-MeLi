const port = 3600
const app = require("./app.js").app;
const getItems = require('./items/controllers/items.controller').getItems;

app.listen(port, () => {  
  console.log(`MeLi app listening at http://localhost:${port}`)
})



