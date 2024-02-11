const mongoose = require("mongoose");

const BoxSchema = new mongoose.Schema({
    dateBox: {
        type: Date,
        required: true,
    },
    dateBoxOpen: {
        type: Date,
        required: true,
    },
    dateBoxClose: {
        type: Date
    },
    boxClosed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Box", BoxSchema);