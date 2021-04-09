const { text } = require('express');
const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        index: { unique: true }
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Items', ItemSchema);