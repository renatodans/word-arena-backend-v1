const Word = require("../models/Word");

class WordRepository {
  async create(data) {
    const w = { ...data };
    if (await Word.findOne({ title: w.title })) {
      throw new Error(`Word > (${w.original}), already exists!`);
    }

    await Word.create(w);
  }

  async findAll(language) {
    return await Word.find({
      language: language,
    });
  }

  async findBydate(language, lastUpdate) {
    return await Word.find(
      {
        language: language,
        createdAt: { $gt: new Date(lastUpdate) },
      },
      "-_id theme title original level tips"
    );
  }
}

module.exports = new WordRepository();
