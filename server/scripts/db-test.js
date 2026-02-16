const knexConfig = require("../knexfile.js").development;
const knex = require("knex")(knexConfig);

(async () => {
  try {
    const r = await knex.raw("SELECT 1 AS ok");
    console.log("DB OK:", r);
  } catch (e) {
    console.error("DB FAILED:", e.message);
  } finally {
    await knex.destroy();
  }
})();
