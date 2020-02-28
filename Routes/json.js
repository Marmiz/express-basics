const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

// json route --> /json/
router.get('/', async (req, res) => {
  try {
    const file = await fs.readFile('Files/names.json', 'utf8');
    res.status(200).json(JSON.parse(file));
    return;
  } catch(error){
    console.error(error)
  }
})

module.exports = router;
