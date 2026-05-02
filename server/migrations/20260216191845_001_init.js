/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  await knex.schema
    // No FKs — create first
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

    .createTable("InterestTag", (t) => {
      t.increments("tagId").primary();
      t.string("name", 100).notNullable().unique();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("Permission", (t) => {
      t.increments("permissionId").primary();
      t.string("permissionKey", 100).notNullable().unique();
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
    })

    // Depends on Club only
    .createTable("Role", (t) => {
      t.increments("roleId").primary();
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.string("roleName", 100).notNullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Depends on Club
    .createTable("ClubChat", (t) => {
      t.increments("chatId").primary();
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.string("name", 100).notNullable();
      t.timestamps(true, true);
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Depends on ClubChat + User
    .createTable("ChatMember", (t) => {
      t.primary(["chatId", "userId"]);
      t.integer("chatId")
        .notNullable()
        .unsigned()
        .references("chatId")
        .inTable("ClubChat")
        .onDelete("CASCADE");
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.dateTime("lastView").nullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Depends on ClubChat + User
    .createTable("ChatMessage", (t) => {
      t.increments("messageId").primary();
      t.integer("chatId")
        .notNullable()
        .unsigned()
        .references("chatId")
        .inTable("ClubChat")
        .onDelete("CASCADE");
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.string("message", 255).notNullable();
      t.dateTime("posted").notNullable();
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
      t.integer("roleId")
        .nullable()
        .unsigned()
        .references("roleId")
        .inTable("Role")
        .onDelete("SET NULL");
      t.dateTime("joinedAt").nullable();
      t.enum("status", ["pending", "joined", "rejected", "banned"]).notNullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("Post", (t) => {
      t.increments("postId").primary();
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.text("content").notNullable();
      t.dateTime("createdAt").notNullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Junction tables
    .createTable("ClubTag", (t) => {
      t.primary(["clubId", "tagId"]);
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.integer("tagId")
        .notNullable()
        .unsigned()
        .references("tagId")
        .inTable("InterestTag")
        .onDelete("CASCADE");
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("UserTag", (t) => {
      t.primary(["userId", "tagId"]);
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.integer("tagId")
        .notNullable()
        .unsigned()
        .references("tagId")
        .inTable("InterestTag")
        .onDelete("CASCADE");
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("EventTag", (t) => {
      t.primary(["eventId", "tagId"]);
      t.integer("eventId")
        .notNullable()
        .unsigned()
        .references("eventId")
        .inTable("Event")
        .onDelete("CASCADE");
      t.integer("tagId")
        .notNullable()
        .unsigned()
        .references("tagId")
        .inTable("InterestTag")
        .onDelete("CASCADE");
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("RolePermission", (t) => {
      t.primary(["roleId", "clubId", "permissionId"]);
      t.integer("roleId")
        .notNullable()
        .unsigned()
        .references("roleId")
        .inTable("Role")
        .onDelete("CASCADE");
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.integer("permissionId")
        .notNullable()
        .unsigned()
        .references("permissionId")
        .inTable("Permission")
        .onDelete("CASCADE");
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("EventUserHost", (t) => {
      t.primary(["userId", "eventId"]);
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.integer("eventId")
        .notNullable()
        .unsigned()
        .references("eventId")
        .inTable("Event")
        .onDelete("CASCADE");
      t.string("hostRole", 100).nullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("EventClubHost", (t) => {
      t.primary(["eventId", "clubId"]);
      t.integer("eventId")
        .notNullable()
        .unsigned()
        .references("eventId")
        .inTable("Event")
        .onDelete("CASCADE");
      t.integer("clubId")
        .notNullable()
        .unsigned()
        .references("clubId")
        .inTable("Club")
        .onDelete("CASCADE");
      t.string("hostRole", 100).nullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    .createTable("Registered", (t) => {
      t.primary(["userId", "eventId"]);
      t.integer("userId")
        .notNullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("CASCADE");
      t.integer("eventId")
        .notNullable()
        .unsigned()
        .references("eventId")
        .inTable("Event")
        .onDelete("CASCADE");
      t.string("position", 100).nullable();
      t.string("status", 50).nullable();
      t.dateTime("registeredAt").nullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    });
};

/**
 * @param {import("knex").Knex} knex
 */
exports.down = async function down(knex) {
  await knex.schema
    .dropTableIfExists("Registered")
    .dropTableIfExists("EventClubHost")
    .dropTableIfExists("EventUserHost")
    .dropTableIfExists("RolePermission")
    .dropTableIfExists("EventTag")
    .dropTableIfExists("UserTag")
    .dropTableIfExists("ClubTag")
    .dropTableIfExists("Post")
    .dropTableIfExists("Membership")
    .dropTableIfExists("ChatMessage")
    .dropTableIfExists("ChatMember")
    .dropTableIfExists("ClubChat")
    .dropTableIfExists("Role")
    .dropTableIfExists("Event")
    .dropTableIfExists("Permission")
    .dropTableIfExists("InterestTag")
    .dropTableIfExists("Club")
    .dropTableIfExists("User");
};
