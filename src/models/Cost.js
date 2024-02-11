const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema({
    dateCost: {
        type: Date,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    chartOfAccounts: {
        type: String,
        required: true,
    },
    canceled: {
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

module.exports = mongoose.model("Cost", CostSchema);