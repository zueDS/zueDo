const express = require('express');
const {createToDo, getAllToDo, deleteToDo, updateToDo} = require('../controllers/toDoController');
const authenticateToken = require('../middleware/authJwt');
const router = express.Router();

router.post('/create-to-do', authenticateToken, createToDo)
router.get('/get-all-to-do', authenticateToken, getAllToDo);
router.delete('/delete-to-do', authenticateToken, deleteToDo);
router.patch('/update-to-do', authenticateToken, updateToDo);


module.exports = router;