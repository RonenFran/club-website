/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ChatMessage").del();
  await knex("ChatMember").del();
  await knex("TextChat").del();
  await knex("Membership").del();
  await knex("Club").del();
  await knex("User").del();

  await knex.raw("ALTER TABLE ChatMessage AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE TextChat AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE User AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Club AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Membership AUTO_INCREMENT = 1");

  await knex("User").insert([
    { firstName: "John", lastName: "Smith", email: "john.smith@gmail.com", passwordHash: "hash" },
    { firstName: "Alex", lastName: "Baldwin", email: "alex.baldwin@smu.ca", passwordHash: "hash" },
    { firstName: "Ronen", lastName: "Franzman", email: "ronen@smu.ca", passwordHash: "hash" },
    { firstName: "Emily", lastName: "Chen", email: "emily.chen@smu.ca", passwordHash: "hash" },
    { firstName: "Michael", lastName: "O'Neill", email: "m.oneill@smu.ca", passwordHash: "hash" },
    { firstName: "Sarah", lastName: "Ahmed", email: "s.ahmed@smu.ca", passwordHash: "hash" },
    { firstName: "Daniel", lastName: "Kowalski", email: "d.kowalski@smu.ca", passwordHash: "hash" },
    { firstName: "Olivia", lastName: "Martinez", email: "o.martinez@smu.ca", passwordHash: "hash" },
    { firstName: "Lucas", lastName: "Nguyen", email: "l.nguyen@smu.ca", passwordHash: "hash" },
    { firstName: "Priya", lastName: "Patel", email: "p.patel@smu.ca", passwordHash: "hash" },
    { firstName: "Noah", lastName: "Thompson", email: "n.thompson@smu.ca", passwordHash: "hash" },
    { firstName: "Isabella", lastName: "Rossi", email: "i.rossi@smu.ca", passwordHash: "hash" },
    { firstName: "Ethan", lastName: "Murphy", email: "e.murphy@smu.ca", passwordHash: "hash" },
    { firstName: "Sophia", lastName: "Dubois", email: "s.dubois@smu.ca", passwordHash: "hash" },
    { firstName: "Aiden", lastName: "Wilson", email: "a.wilson@smu.ca", passwordHash: "hash" },
    { firstName: "Maya", lastName: "Singh", email: "m.singh@smu.ca", passwordHash: "hash" },
    { firstName: "James", lastName: "Park", email: "j.park@smu.ca", passwordHash: "hash" },
    { firstName: "Hannah", lastName: "Lee", email: "h.lee@smu.ca", passwordHash: "hash" },
    { firstName: "Benjamin", lastName: "Taylor", email: "b.taylor@smu.ca", passwordHash: "hash" },
    { firstName: "Ava", lastName: "Johnson", email: "a.johnson@smu.ca", passwordHash: "hash" },
  ]);

  await knex("Club").insert([
    {
      name: "Equestrian Society",
      iconPath: "/horse_cropped.jpg",
      clubLink: "/ClubPage",
    },
    { name: "Debate Team", iconPath: "/podium.jpg" },
    { name: "League of Legends E-Sports Team", iconPath: "/league_cropped.jpg" },
    { name: "Chess Club", iconPath: "/chess_cropped.png" },
    { name: "Computer Science Society" },
    { name: "Photography Club" },
    { name: "International Students Association" },
    { name: "Robotics Club" },
    { name: "Film Appreciation Society" },
    { name: "Outdoor Adventure Club" },
  ]);

  await knex("Role").insert([
    { roleId: 1, clubId: 4, roleName: "President" }, // Chess Club
    { roleId: 2, clubId: 4, roleName: "Member" }, // Chess Club
    { roleId: 3, clubId: 5, roleName: "President" }, // CS Society
    { roleId: 4, clubId: 5, roleName: "Member" }, // CS Society
    { roleId: 5, clubId: 2, roleName: "Member" }, // Debate Team
    { roleId: 6, clubId: 8, roleName: "Member" }, // Robotics Club
  ]);

  await knex("Membership").insert([
    // Chess Club (clubId: 4)
    { clubId: 4, userId: 1, roleId: 2, status: "joined" },
    { clubId: 4, userId: 3, roleId: 1, status: "joined" },
    { clubId: 4, userId: 7, roleId: 2, status: "joined" },

    // Debate Team (clubId: 2)
    { clubId: 2, userId: 2, status: "joined" },
    { clubId: 2, userId: 5, status: "pending" },
    { clubId: 2, userId: 11, status: "joined" },

    // LoL Team (clubId: 3)
    { clubId: 3, userId: 6, status: "joined" },
    { clubId: 3, userId: 8, status: "joined" },
    { clubId: 3, userId: 9, status: "pending" },

    // CS Society (clubId: 5)
    { clubId: 5, userId: 3, roleId: 3, status: "joined" },
    { clubId: 5, userId: 10, roleId: 4, status: "joined" },
    { clubId: 5, userId: 12, roleId: 4, status: "joined" },

    // Robotics Club (clubId: 8)
    { clubId: 8, userId: 7, roleId: 6, status: "joined" },
    { clubId: 8, userId: 14, roleId: 6, status: "joined" },

    // Photography Club (clubId: 6)
    { clubId: 6, userId: 15, status: "joined" },
    { clubId: 6, userId: 16, status: "pending" },

    // Outdoor Adventure Club (clubId: 10)
    { clubId: 10, userId: 18, status: "joined" },
    { clubId: 10, userId: 19, status: "joined" },
    { clubId: 10, userId: 20, status: "joined" },
  ]);

  await knex("TextChat").insert([
    { chatType: "group" }, // chatId: 1 — Chess Club group chat
    { chatType: "dm" }, // chatId: 2 — John & Ronen DM
  ]);

  await knex("ChatMember").insert([
    // Chess Club group chat
    { chatId: 1, userId: 1 }, // John
    { chatId: 1, userId: 3 }, // Ronen
    { chatId: 1, userId: 7 }, // Daniel

    // John & Ronen DM
    { chatId: 2, userId: 1 }, // John
    { chatId: 2, userId: 3 }, // Ronen
  ]);

  await knex("ChatMessage").insert([
    // Chess Club group chat
    {
      chatId: 1,
      userId: 3,
      message: "Hey everyone, are we still meeting Thursday?",
      posted: "2025-05-01 10:00:00",
    },
    {
      chatId: 1,
      userId: 7,
      message: "Yeah I'll be there, bringing my opening book too",
      posted: "2025-05-01 10:05:00",
    },
    {
      chatId: 1,
      userId: 1,
      message: "Thursday works for me, see you both then!",
      posted: "2025-05-01 10:09:00",
    },
    { chatId: 1, userId: 3, message: "Perfect, I'll book the room", posted: "2025-05-01 10:12:00" },

    // John & Ronen DM
    {
      chatId: 2,
      userId: 1,
      message: "Hey Ronen, do you want to run through some endgame drills before Thursday?",
      posted: "2025-05-01 11:00:00",
    },
    {
      chatId: 2,
      userId: 3,
      message: "Sure! How about Wednesday evening?",
      posted: "2025-05-01 11:04:00",
    },
    { chatId: 2, userId: 1, message: "Works for me, around 7pm?", posted: "2025-05-01 11:06:00" },
    { chatId: 2, userId: 3, message: "Perfect, see you then", posted: "2025-05-01 11:07:00" },
  ]);
};
