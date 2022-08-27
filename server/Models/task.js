const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        requires: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("task",taskSchema)