const { ranking } = require('../model');

module.exports = {

    async findAll(req, res) {
        const rankings = await ranking.findAll({
            order: [
                ['attempts', 'ASC'],
                ['total_time', 'ASC']
            ],
            raw: true
         });
        res.json(rankings);
    },

    async findById(id) {
        const ranking = await ranking.findByPk(id);
        return ranking;
    },

    async findByPk(id) {
        const ranking = await ranking.findOne({
            where: {
                id: id
            },
        });
        return ranking;
    },

    async store(req, res) {
        var score = req.body
        const newRanking = await ranking.create(score)
        res.json(newRanking)
    }
}