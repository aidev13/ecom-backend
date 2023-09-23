const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{ 
    const allCategories = await Category.findAll()
    res.json(allCategories)
  } catch(err) {
    res.status(500).json(err)
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id
  try {
    const category = await Category.findByPk(id)
    res.json(category)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCateorgy = await Category.create(req.body)
    res.json(newCateorgy)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id
      },
      raw: true
    })
    res.json(updateCategory)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const id = req.params.id
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id
      }
    })
    res.json(deleteCategory)
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
