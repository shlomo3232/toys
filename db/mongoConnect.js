const {config} = require("../config/secret");
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://{config.userDb}:{config.userPass}@clustercats.jxiby8y.mongodb.net/idf77`);
  console.log("toys is working");
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}