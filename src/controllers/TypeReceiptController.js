const TypeReceipt = require("../models/TypeReceipt");

class TypeReceiptController {
    create(req, res) {
        return res.render("box/register");
    }

    createUpdate(req, res) {
        return res.render("box/updatebox");
    }

    async index(req, res) {
        const typeReceipts = await TypeReceipt.find();

        return res.render("typeReceipt/list", { typeReceipts });
    }

    async store(req, res) {
        await TypeReceipt.create(req.body);
        return res.redirect("/");
    }

    async edit(req, res) {
        const { id } = req.params; 

        const box = await Box.findById(id);

        return res.render("box/update", { box: box });
    }

    async update(req, res) {
        const { id } = req.params;

        await Box.findByIdAndUpdate(id, req.body, { new: true });

        return res.redirect("/boxslist");
    }

    async destroy(req, res) {
        const { id } = req.params;

        await Box.findByIdAndRemove(id);

        return res.redirect("/boxslist");
    }
}

module.exports = new TypeReceiptController();