/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("ChatMessage").del();
  await knex("ChatMember").del();
  await knex("TextChat").del();
  await knex("Membership").del();
  await knex("Role").del();
  await knex("Club").del();
  await knex("User").del();

  await knex.raw("ALTER TABLE ChatMessage AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE TextChat AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE User AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Club AUTO_INCREMENT = 1");

  await knex("User").insert([
    {
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@gmail.com",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Alex",
      lastName: "Baldwin",
      email: "alex.baldwin@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Ronen",
      lastName: "Franzman",
      email: "ronen@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Emily",
      lastName: "Chen",
      email: "emily.chen@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Michael",
      lastName: "O'Neill",
      email: "m.oneill@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Sarah",
      lastName: "Ahmed",
      email: "s.ahmed@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Daniel",
      lastName: "Kowalski",
      email: "d.kowalski@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Olivia",
      lastName: "Martinez",
      email: "o.martinez@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Lucas",
      lastName: "Nguyen",
      email: "l.nguyen@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Priya",
      lastName: "Patel",
      email: "p.patel@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Noah",
      lastName: "Thompson",
      email: "n.thompson@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Isabella",
      lastName: "Rossi",
      email: "i.rossi@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Ethan",
      lastName: "Murphy",
      email: "e.murphy@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Sophia",
      lastName: "Dubois",
      email: "s.dubois@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Aiden",
      lastName: "Wilson",
      email: "a.wilson@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Maya",
      lastName: "Singh",
      email: "m.singh@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "James",
      lastName: "Park",
      email: "j.park@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Hannah",
      lastName: "Lee",
      email: "h.lee@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Benjamin",
      lastName: "Taylor",
      email: "b.taylor@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
    {
      firstName: "Ava",
      lastName: "Johnson",
      email: "a.johnson@smu.ca",
      passwordHash: "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe",
    },
  ]);

  await knex("Club").insert([
    {
      name: "Equestrian Society",
      iconPath: "/horse_cropped.jpg",
      bannerPath: "/club_banners/equestrian4.avif",
      slogan: "Ride. Learn. Connect.",
    },
    {
      name: "Debate Team",
      iconPath: "/podium.jpg",
      bannerPath: "/club_banners/debating.jpg",
      slogan: "May the best argument win.",
    },
    {
      name: "League of Legends E-Sports Team",
      iconPath: "/league_cropped.jpg",
      bannerPath: "/club_banners/league.avif",
      slogan: "Queue Up",
    },
    {
      name: "Chess Club",
      iconPath: "/chess_cropped.png",
      bannerPath: "/club_banners/chess.jpg",
      slogan: "Make every move count",
    },
    {
      name: "Computer Science Society",
      iconPath: "/computer.jpg",
      bannerPath: "/club_banners/code.jpg",
      slogan: "We speak fluent machine",
    },
    {
      name: "Photography Club",
      iconPath: "/camera.jpg",
      bannerPath: "/club_banners/viewfinder.jpg",
      slogan: "Capture it before it's gone",
    },
    {
      name: "International Students Association",
      iconPath: "/earth.avif",
      bannerPath: "/club_banners/graduation.webp",
      slogan: "One world, one campus",
    },
    {
      name: "Robotics Club",
      iconPath: "/robot.png",
      bannerPath: "/club_banners/robot.jpg",
      slogan: "Built by students, powered by curiosity",
    },
    {
      name: "Film Appreciation Society",
      iconPath: "/film.jpg",
      bannerPath: "/club_banners/projector.jpg",
      slogan: "The credits never really roll",
    },
    {
      name: "Outdoor Adventure Club",
      iconPath: "/tree.jpg",
      bannerPath: "/club_banners/outdoors.jpg",
      slogan: "It's about time to unplug",
    },
  ]);

  await knex("Role").insert([
    { roleId: 1, clubId: 4, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 4, roleName: "Member", isLeadership: false },
    { roleId: 3, clubId: 5, roleName: "President", isLeadership: true },
    { roleId: 4, clubId: 5, roleName: "Member", isLeadership: false },
    { roleId: 5, clubId: 2, roleName: "President", isLeadership: true },
    { roleId: 6, clubId: 2, roleName: "Member", isLeadership: false },
    { roleId: 7, clubId: 3, roleName: "Captain", isLeadership: true },
    { roleId: 8, clubId: 3, roleName: "Member", isLeadership: false },
    { roleId: 9, clubId: 8, roleName: "Lead Engineer", isLeadership: true },
    { roleId: 10, clubId: 8, roleName: "Member", isLeadership: false },
    { roleId: 11, clubId: 6, roleName: "President", isLeadership: true },
    { roleId: 12, clubId: 6, roleName: "Member", isLeadership: false },
    { roleId: 13, clubId: 10, roleName: "President", isLeadership: true },
    { roleId: 14, clubId: 10, roleName: "Member", isLeadership: false },
  ]);

  await knex("Membership").insert([
    // Chess Club (clubId: 4)
    { clubId: 4, userId: 1, roleId: 2, status: "joined" },
    { clubId: 4, userId: 3, roleId: 1, status: "joined" },
    { clubId: 4, userId: 7, roleId: 2, status: "joined" },

    // Debate Team (clubId: 2)
    { clubId: 2, userId: 2, roleId: 5, status: "joined" },
    { clubId: 2, userId: 5, roleId: 6, status: "pending" },
    { clubId: 2, userId: 11, roleId: 6, status: "joined" },

    // LoL Team (clubId: 3)
    { clubId: 3, userId: 6, roleId: 7, status: "joined" },
    { clubId: 3, userId: 8, roleId: 8, status: "joined" },
    { clubId: 3, userId: 9, roleId: 8, status: "pending" },

    // CS Society (clubId: 5)
    { clubId: 5, userId: 3, roleId: 3, status: "joined" },
    { clubId: 5, userId: 10, roleId: 4, status: "joined" },
    { clubId: 5, userId: 12, roleId: 4, status: "joined" },

    // Robotics Club (clubId: 8)
    { clubId: 8, userId: 7, roleId: 9, status: "joined" },
    { clubId: 8, userId: 14, roleId: 10, status: "joined" },

    // Photography Club (clubId: 6)
    { clubId: 6, userId: 15, roleId: 11, status: "joined" },
    { clubId: 6, userId: 16, roleId: 12, status: "pending" },

    // Outdoor Adventure Club (clubId: 10)
    { clubId: 10, userId: 18, roleId: 13, status: "joined" },
    { clubId: 10, userId: 19, roleId: 14, status: "joined" },
    { clubId: 10, userId: 20, roleId: 14, status: "joined" },
  ]);

  await knex("TextChat").insert([
    { chatType: "group" }, // chatId: 1 — Chess Club group chat
    { chatType: "dm" }, // chatId: 2 — John & Ronen DM
  ]);

  await knex("ChatMember").insert([
    { chatId: 1, userId: 1 },
    { chatId: 1, userId: 3 },
    { chatId: 1, userId: 7 },
    { chatId: 2, userId: 1 },
    { chatId: 2, userId: 3 },
  ]);

  await knex("ChatMessage").insert([
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
