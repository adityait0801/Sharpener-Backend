const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "data", "products.json");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
        }
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
        } else {
          console.log("File updated successfully.");
        }
      });
    });
  }

  static fetchAll(cb) {
    return fs.readFile(p, (error, data) => {
      if (error) {
        cb([]);
      }
      cb(JSON.parse(data));
    });
  }
};