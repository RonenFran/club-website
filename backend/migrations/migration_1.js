/**
 * @param {import("knex").Knex} knex
 */
exports.up = async function up(knex) {
  await knex.schema
    // Individual users and account data
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

    // Clubs and their respective page information
    .createTable("Club", (t) => {
      t.increments("clubId").primary();
      t.string("name", 100).notNullable().unique();
      t.text("description").nullable();
      t.string("bannerPath", 255).nullable();
      t.string("iconPath", 255).nullable();
      t.string("slogan", 127).nullable();
      t.string("email", 255).nullable();
      t.string("twitterX", 255).nullable();
      t.string("instagram", 255).nullable();
      t.string("facebook", 255).nullable();
      t.enum("enrollmentType", ["open", "tryouts", "membership"]);
      t.timestamps(true, true);
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Generic tag describing a theme of the club
    .createTable("InterestTag", (t) => {
      t.increments("tagId").primary();
      t.string("name", 100).notNullable().unique();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Permissions for specific roles in clubs
    .createTable("Permission", (t) => {
      t.increments("permissionId").primary();
      t.string("permissionKey", 100).notNullable().unique();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Event information
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

    // Group chats and direct message chats between users
    .createTable("TextChat", (t) => {
      t.increments("chatId").primary();
      t.enum("chatType", ["dm", "group"]).notNullable();
      t.timestamps(true, true);
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Roles in clubs that give members certain permissions
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

    // Table dependent on chats and describes which users are in which chat
    .createTable("ChatMember", (t) => {
      t.primary(["chatId", "userId"]);
      t.integer("chatId")
        .notNullable()
        .unsigned()
        .references("chatId")
        .inTable("TextChat")
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

    // Chat message entities for each user in a chat
    .createTable("ChatMessage", (t) => {
      t.increments("messageId").primary();
      t.integer("chatId")
        .notNullable()
        .unsigned()
        .references("chatId")
        .inTable("TextChat")
        .onDelete("CASCADE");
      t.integer("userId")
        .nullable()
        .unsigned()
        .references("userId")
        .inTable("User")
        .onDelete("SET NULL");
      t.string("message", 255).notNullable();
      t.dateTime("posted").notNullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Describes what clubs users are in
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
      t.boolean("favorite").defaultTo(false);
      t.enum("status", ["pending", "joined", "rejected", "banned"]).notNullable();
      t.engine("InnoDB");
      t.charset("utf8mb4");
      t.collate("utf8mb4_0900_ai_ci");
    })

    // Front page posts created by clubs
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

    // Tags that clubs establish as related to them
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

    // Tags that users establish as their interests
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

    // Tags that events establish that are related to them
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

    // Permissions given to certain roles in clubs, dictated by club managers
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

    // Body that leads an event that is not a club
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

    // Body that leads an event that is a club
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

    // Users who have registered or shown interest in an event
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
    .dropTableIfExists("TextChat")
    .dropTableIfExists("Role")
    .dropTableIfExists("Event")
    .dropTableIfExists("Permission")
    .dropTableIfExists("InterestTag")
    .dropTableIfExists("Club")
    .dropTableIfExists("User");
};
