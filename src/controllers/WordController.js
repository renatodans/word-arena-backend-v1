const repository = require("../repositories/WordRepository");

class WordController {
  async create(req, res) {
    try {
      await repository.create({
        ...req.body,
      });

      return res.json({ message: "Word created!" });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  }

  async findAll(req, res) {
    try {
      const { language } = req.query;
      const data = await repository.findAll(language);

      return res.json(data);
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  }

  async findBydate(req, res) {
    try {
      const { language, lastUpdate } = req.query;
      const data = await repository.findBydate(language, lastUpdate);

      return res.json(data);
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  }
}

module.exports = new WordController();
