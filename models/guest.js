var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    isAttending: {type: Boolean, required: true},
    email: {type: String, required: false},
    numberOfGuests: {type: Number, required: false},
    guestNames: {type: String, required: false},
    mealChoice: {type: String, required: false},
    guestMealChoice: {type: String, required: false},
    songSuggestion: {type: String, required: false},
    dietaryRestrictions: {type: String, required: false}
});

module.exports = mongoose.model('Guest', schema);