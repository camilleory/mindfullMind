const express    = require('express');
const journalRoutes = express.Router();
const JournalEntry       = require('../models/journalEntry-model');


//Posting entries into DB

journalRoutes.post('/journal', (req, res, next) =>{
  const entry = req.body.entry;

  const newEntry = new JournalEntry({
    entry: entry,
    owner: req.user._id 

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

// Get route to get entries from DB 

journalRoutes.get('/journal', (req, res, next) => {
  JournalEntry.find()
    // .populate('journalEntries')
    .then(allEntries => {
      res.json(allEntries);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = journalRoutes;