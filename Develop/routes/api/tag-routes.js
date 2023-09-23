const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll()
    res.json(allTags)

  } catch (err) {
    res.status(500).send(err)
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const getTagByID = await Tag.findByPk(id)
    res.json(getTagByID)
  } catch(err) {
    res.json(500).send(err)
  }
});

router.post('/', async (req, res) => {
  try{
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch(err) {
    res.status(500).send(err)
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  try{
    const updateTag = await Tag.update(req.body, {
      where: {
        id
      }
    })
    res.json(updateTag)
  } catch(err) {
    res.status(500).send(err)
  }
});

router.delete('/:id', async (req, res) => {
const id = req.params.id
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id
      }
    })
    res.json(deleteTag)
  } catch(err) {
    res.json(err)
  }
});

module.exports = router;
