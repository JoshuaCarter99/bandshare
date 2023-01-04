const router = require('express').Router();
const { Tag } = require('../../models');

router.get('/', async (req, res) => {
    const tagData = await Tag.findAll();
    return res.json(tagData);
  });
  

module.exports = router;