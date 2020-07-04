const express    = require('express');
const journalRoutes = express.Router();
const JournalEntry       = require('../models/journalEntry-model');

journalRoutes.post('/journal', (req, res, next) =>{
  console.log("posting entry")
  const entry = req.body.entry;


  const newEntry = new JournalEntry({
    entry: entry,
  });


  newEntry.save(err => {
    if (err) {
        res.status(400).json({ message: 'Saving entry to database went wrong.' });
        return;
    } else {
      res.status(200)
    }

  }).then(()=>{
    res.status(200)

  })

})

module.exports = journalRoutes;