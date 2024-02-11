const mongoose = require("mongoose");

const CashReceiptSchema = new mongoose.Schema({
    box: {
        type: String,
        required: true,
    },
    typeReceipt: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    dateReceipt: {
        type: Date,
        required: true,
    },
    canceled: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("CashReceipt", CashReceiptSchema);