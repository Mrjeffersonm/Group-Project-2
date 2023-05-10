const router = require('express').Router();
const { Item } = require('../../models');
const sequelize = require('../../config/connection');
const { load } = require('dotenv');

router.get('/:name', async (req, res) => {

    const itemName = req.params.name
    const item = await Item.findAll({
      where: {
        item_name: itemName
      },
      
    })
    res.send(
      JSON.stringify(item, null, 2)
    )
  });

module.exports = router