const Word = require("../models/Word");

class WordRepository {
  async create(data) {
    const w = { ...data };
    if (await Word.findOne({ title: w.title, language: w.language })) {
      throw new Error(
        `Word > (${w.original} - ${w.language}), already exists!`
      );
    }
    await Word.create(w);
  }

  async findAll(language) {
    return await Word.find(
      {
        language: language,
      },
      ["-_id theme title original level tips"],
      { sort: { level: 1 } }
    );
  }

  async findBydate(language, lastUpdate) {
    return await Word.find(
      {
        language: language,
        createdAt: { $gt: new Date(lastUpdate) },
      },
      ["-_id theme title original level tips"],
      { sort: { level: 1 } }
    );
  }
}

module.exports = new WordRepository();
