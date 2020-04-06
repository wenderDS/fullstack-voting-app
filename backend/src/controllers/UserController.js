const connection = require("../database/connection");
const hash = require("password-hash");

module.exports = {
  async index(request, response) {
    const users = await connection("users").select("*");

    return response.json(users);
  },

  async create(request, response) {
    const { date, name, email, pass, domain_id, admin, status } = request.body;
    const password = hash.generate(pass);

    const [id] = await connection("users").insert({
      date,
      name,
      email,
      password,
      domain_id,
      admin,
      status,
    });

    return response.json({ id });
  },
};
