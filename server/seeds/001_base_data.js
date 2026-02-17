/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Membership").del();
  await knex("Club").del();
  await knex("User").del();

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
    { name: "Equestrian Society", iconPath: "/horse_cropped.jpg", clubLink: "/ClubPage" },
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

  await knex("Membership").insert([
    // Chess Club (clubId: 4)
    { clubId: 4, userId: 1, status: "joined" },
    { clubId: 4, userId: 3, status: "joined" },
    { clubId: 4, userId: 7, status: "joined" },

    // Debate Team (clubId: 2)
    { clubId: 2, userId: 2, status: "joined" },
    { clubId: 2, userId: 5, status: "pending" },
    { clubId: 2, userId: 11, status: "joined" },

    // LoL Team (clubId: 3)
    { clubId: 3, userId: 6, status: "joined" },
    { clubId: 3, userId: 8, status: "joined" },
    { clubId: 3, userId: 9, status: "pending" },

    // CS Society (clubId: 5)
    { clubId: 5, userId: 3, status: "joined" },
    { clubId: 5, userId: 10, status: "joined" },
    { clubId: 5, userId: 12, status: "joined" },

    // Robotics Club (clubId: 8)
    { clubId: 8, userId: 7, status: "joined" },
    { clubId: 8, userId: 14, status: "joined" },

    // Photography Club (clubId: 6)
    { clubId: 6, userId: 15, status: "joined" },
    { clubId: 6, userId: 16, status: "pending" },

    // Outdoor Adventure Club (clubId: 10)
    { clubId: 10, userId: 18, status: "joined" },
    { clubId: 10, userId: 19, status: "joined" },
    { clubId: 10, userId: 20, status: "joined" },
  ]);
};
