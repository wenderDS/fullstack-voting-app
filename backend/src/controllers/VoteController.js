const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const votes = await connection("votes").select("*");

    return response.json(votes);
  },

  async create(request, response) {
    const { date, voting_id, user_id, status } = request.body;

    const [id] = await connection("votings").insert({
      date,
      voting_id,
      user_id,
      status,
    });

    return response.json({ id });
  },
};
