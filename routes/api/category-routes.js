const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]

  }).then((data)=> {
    res.json(data)
  })

  // find all categories
  // be sure to include its associated Products
});



router.get('/:id', (req, res) => {
    
     Category.findByPk(req.params.id, {
      include: [Product]


    }).then((data)=> {
      res.json(data)
    });
  

});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((data)=> {
    res.json(data)
  })
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body)
  .then((data))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
