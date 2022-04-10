const router = require('express').Router();

// Importing functions from thought-controller
const { 
    getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');


// api for getting all thoughts
router.route('/').get(getAllThoughts);

// api for getting/ updating/deleting one thought
router.route('/:id')
      .get(getThoughtById)
      .put(updateThought)
      .delete(deleteThought); 

      // api for creating new thought
router.route('/:userId')    
      .post(createThought);

// api for creating reactions
router.route('/:thoughtId/reactions')
      .post(addReaction);

// api for deleting a reaction by user and reaction id
router.route('/:thoughtId/reactions/:reactionId')
      .delete(deleteReaction);

module.exports = router;