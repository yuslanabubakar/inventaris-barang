const express = require('express');
const { update } = require('../models/Item');
const router = express.Router();
const Item = require('../models/Item');

//GET BACK ALL THE ITEMS
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        // res.json(items);
        res.render('item', {data: items});
    } catch (error) {
        res.json({ message:error });
    }
});

//SHOW INPUT FORM
router.get('/input', async (req, res) => {
    try {
        res.render('input');
    } catch (error) {
        res.json({ message:error });
    }
})


//SUBMIT THE ITEM
router.post('/input', async (req, res) => {
    const item = new Item({
        code: req.body.itemCode,
        name: req.body.itemName,
        color: req.body.itemColor,
        price: req.body.itemPrice,
        qty: req.body.itemQty,
        desc: req.body.itemDesc
    });

    try {
        const savedItem = await item.save();
        res.redirect('/items');
    } catch (error) {
        console.log(item);
        res.json({ message:error });
    }
});


//DELETE THE ITEM
router.delete('/:itemId', async (req, res) => {
    try {
        const removedItem = await Item.remove({_id: req.params.itemId});
        res.json(removedItem);
    } catch (error) {
        res.json({ message:error });
    }
});


//UPDATE AN ITEM



module.exports = router;