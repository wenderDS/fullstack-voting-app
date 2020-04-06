const crypto = require("crypto");
const hash = require("password-hash");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const domains = await connection("domains").select("*");

    return response.json(domains);
  },

  async create(request, response) {
    const { date, name, email, pass, status } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");
    const password = hash.generate(pass);

    await connection("domains").insert({
      id,
      date,
      name,
      email,
      password,
      status,
    });

    return response.json({ id });
  },
};
