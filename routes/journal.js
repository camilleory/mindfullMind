const express    = require('express');
const journalRoutes = express.Router();
const JournalEntry       = require('../models/journalEntry-model');
const journalEntry = require('../models/journalEntry-model');





//Posting entries into DB

journalRoutes.post('/journal', (req, res, next) =>{
  const entry = req.body.entry;

  const newEntry = new JournalEntry({
    entry: entry,
    owner: req.user._id

  });


  newEntry.save().then((storedEntry)=>{
    res.status(200).json(storedEntry);

  }).catch(() => {
    res.status(400).json({ message: 'Saving entry to database went wrong.' });
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

// Delete journal entries
journalRoutes.delete('/journal/:_id', (req, res, next) => {

  // if (!mongoose.Types.ObjectId.isValid(req.params._id)) {
  //   res.status(400).json({ message: 'Specified id is not valid' });
  //   return;
  // }

  JournalEntry.findByIdAndRemove(req.params._id)
    .then(() => {
      res.json({ message: `Task with ${req.params._id} is removed successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

  // Update journal entries
  journalRoutes.put('/journal/:_id', (req, res, next) => {
    // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    //   res.status(400).json({ message: 'Specified id is not valid' });
    //   return;
   
   
    JournalEntry.findByIdAndUpdate(req.params._id, req.body)
      .then(() => {
        res.json({ message: `Project with ${req.params._id} is updated successfully.` });
      })
      .catch(error => {
        res.json(error);
      });
  });

module.exports = journalRoutes;