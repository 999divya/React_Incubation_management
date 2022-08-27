const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name:String,
    address:String,
    city:String,
    state:String,
    email:String,
    mobile:String,
    company:String,
    teamStory:String,
    productstory:String,
    problemstory:String,
    uniquestory:String,
    valuestory:String,
    compstory:String,
    revenuestory:String,
    marketStory:String,
    marketplan:String,
    proposal:String
})

module.exports = mongoose.model('Company',companySchema)