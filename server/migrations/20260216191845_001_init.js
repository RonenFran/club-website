/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  await knex.schema
    .createTable("User", (t) => {
      t.increments("userId").primary();
      t.string("firstName", 50).notNullable();
      t.string("preferredName", 50).nullable();
      t.string("lastName", 50).notNullable();
      t.string("email", 255).notNullable().unique();
      t.string("displayName", 100).nullable().unique();
      t.string("passwordHash", 255).notNullable();
      t.timestamps(true, true);

      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("Club", (t) => {
      t.increments("clubId").primary();
      t.string("name", 100).notNullable().unique();
      t.text("description").nullable();
      t.string("bannerPath", 255).nullable();
      t.string("iconPath", 255).nullable();
      t.string("clubLink", 255).nullable();
      t.timestamps(true, true);

      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("Membership", (t) => {
      t.primary(["clubId", "userId"]);
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.integer("roleId");
      t.enum("status", ["pending", "joined", "rejected", "banned"]).notNullable();
      t.timestamps(true, true);

      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("Event", (t) => {
      t.increments("eventId").primary();
      t.string("title", 160).notNullable();
      t.text("description").nullable();
      t.dateTime("startsAt").notNullable();
      t.dateTime("endsAt").nullable();
      t.string("location", 255).nullable();
      t.timestamps(true, true);

      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    });
};

/**
 * @param {import("knex").Knex} knex
 */
exports.down = async function down(knex) {
  // Drop in reverse dependency order
  await knex.schema
    .dropTableIfExists("Event")
    .dropTableIfExists("Membership")
    .dropTableIfExists("Club")
    .dropTableIfExists("User");
};
