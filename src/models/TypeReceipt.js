const mongoose = require("mongoose");

const TypeReceiptSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    calendarDays: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    situ: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("TypeReceipt", TypeReceiptSchema);