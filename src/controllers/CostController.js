const  Cost = require("../models/Cost");

class CostController {
    create(req, res) {
        return res.render("box/register");
    }

    createUpdate(req, res) {
        return res.render("box/updatebox");
    }

    async index(req, res) {
        const costs = await Cost.find();
        return res.render("cost/list", { costs });
    }

    async store(req, res) {
        await Cost.create(req.body);
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

module.exports = new CostController();