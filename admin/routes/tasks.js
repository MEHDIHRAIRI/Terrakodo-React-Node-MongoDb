const express = require("express");
const TasksController = require("../controller/Tasks");

const router = express.Router();

router.route("/").get(TasksController.getTask);
router.post("/add", TasksController.createTask);
router.patch("/:id", TasksController.updateTask);
router.delete("/:id", TasksController.DeleteTask);

module.exports = router;
