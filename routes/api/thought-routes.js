const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');


router.route('/')
.get(getAllThoughts)
.post(addThought);

router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router.route('/:thoughtId/reactions')
.put(addReaction)
.delete(removeReaction);


module.exports = router;