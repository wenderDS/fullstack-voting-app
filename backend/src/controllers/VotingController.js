const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const votings = await connection("votings").select("*");

    return response.json(votings);
  },

  async create(request, response) {
    const { date, vote_item, status } = request.body;

    const [id] = await connection("votings").insert({
      date,
      vote_item,
      status,
    });

    return response.json({ id });
  },
};
