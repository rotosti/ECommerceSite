const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }})
    res.status(200).json(categories);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category_data = await Category.findByPk(req.params.id, {
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
    }})

    if(!category_data) {
      res.status(404).json({message: 'No Category exists with given ID.'})
      return;
    }

    res.status(200).json(category_data);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    if(!category_data) {
      res.status(404).json({message: 'No Category exists with given ID.'})
      return;
    }

    res.stats(200).json(categoryData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const category_data = await Category.destroy({
      where: {
        id: req.params.id
      }
    })

    if(!category_data) {
      res.status(404).json({message: 'No Category exists with given ID.'})
      return;
    }

    res.status(200).end();
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
