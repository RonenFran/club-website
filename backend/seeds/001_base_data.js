/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // ─── Teardown (dependency order) ─────────────────────────────────────────
  await knex("Registered").del();
  await knex("EventClubHost").del();
  await knex("EventUserHost").del();
  await knex("EventTag").del();
  await knex("Event").del();
  await knex("RolePermission").del();
  await knex("Permission").del();
  await knex("Announcement").del();
  await knex("ChatMessage").del();
  await knex("ChatMember").del();
  await knex("TextChat").del();
  await knex("Membership").del();
  await knex("Role").del();
  await knex("UserTag").del();
  await knex("ClubTag").del();
  await knex("InterestTag").del();
  await knex("Club").del();
  await knex("User").del();

  await knex.raw("ALTER TABLE ChatMessage AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE TextChat AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE User AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Club AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Event AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Announcement AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE InterestTag AUTO_INCREMENT = 1");
  await knex.raw("ALTER TABLE Permission AUTO_INCREMENT = 1");

  // ─── Users (userId 1–30) ──────────────────────────────────────────────────
  const PW = "$2b$10$RPjXPw8cHS6BeB5iaV7i3OsU4zTdNUanHLpIDeHKwJnPcF.XW8YGe";

  await knex("User").insert([
    // 1–20: existing users
    { firstName: "John", lastName: "Smith", email: "john.smith@gmail.com", passwordHash: PW },
    { firstName: "Alex", lastName: "Baldwin", email: "alex.baldwin@smu.ca", passwordHash: PW },
    { firstName: "Ronen", lastName: "Franzman", email: "ronen@smu.ca", passwordHash: PW },
    { firstName: "Emily", lastName: "Chen", email: "emily.chen@smu.ca", passwordHash: PW },
    { firstName: "Michael", lastName: "O'Neill", email: "m.oneill@smu.ca", passwordHash: PW },
    { firstName: "Sarah", lastName: "Ahmed", email: "s.ahmed@smu.ca", passwordHash: PW },
    { firstName: "Daniel", lastName: "Kowalski", email: "d.kowalski@smu.ca", passwordHash: PW },
    { firstName: "Olivia", lastName: "Martinez", email: "o.martinez@smu.ca", passwordHash: PW },
    { firstName: "Lucas", lastName: "Nguyen", email: "l.nguyen@smu.ca", passwordHash: PW },
    { firstName: "Priya", lastName: "Patel", email: "p.patel@smu.ca", passwordHash: PW },
    { firstName: "Noah", lastName: "Thompson", email: "n.thompson@smu.ca", passwordHash: PW },
    { firstName: "Isabella", lastName: "Rossi", email: "i.rossi@smu.ca", passwordHash: PW },
    { firstName: "Ethan", lastName: "Murphy", email: "e.murphy@smu.ca", passwordHash: PW },
    { firstName: "Sophia", lastName: "Dubois", email: "s.dubois@smu.ca", passwordHash: PW },
    { firstName: "Aiden", lastName: "Wilson", email: "a.wilson@smu.ca", passwordHash: PW },
    { firstName: "Maya", lastName: "Singh", email: "m.singh@smu.ca", passwordHash: PW },
    { firstName: "James", lastName: "Park", email: "j.park@smu.ca", passwordHash: PW },
    { firstName: "Hannah", lastName: "Lee", email: "h.lee@smu.ca", passwordHash: PW },
    { firstName: "Benjamin", lastName: "Taylor", email: "b.taylor@smu.ca", passwordHash: PW },
    { firstName: "Ava", lastName: "Johnson", email: "a.johnson@smu.ca", passwordHash: PW },
    // 21–30: new users to fill out clubs
    { firstName: "Liam", lastName: "Carter", email: "l.carter@smu.ca", passwordHash: PW },
    { firstName: "Zoe", lastName: "Petrov", email: "z.petrov@smu.ca", passwordHash: PW },
    { firstName: "Marcus", lastName: "Hall", email: "m.hall@smu.ca", passwordHash: PW },
    { firstName: "Fatima", lastName: "Al-Rashid", email: "f.alrashid@smu.ca", passwordHash: PW },
    { firstName: "Connor", lastName: "Walsh", email: "c.walsh@smu.ca", passwordHash: PW },
    { firstName: "Yuna", lastName: "Kim", email: "y.kim@smu.ca", passwordHash: PW },
    { firstName: "Andre", lastName: "Leblanc", email: "a.leblanc@smu.ca", passwordHash: PW },
    { firstName: "Nadia", lastName: "Okafor", email: "n.okafor@smu.ca", passwordHash: PW },
    { firstName: "Tyler", lastName: "Brooks", email: "t.brooks@smu.ca", passwordHash: PW },
    { firstName: "Elena", lastName: "Vasquez", email: "e.vasquez@smu.ca", passwordHash: PW },
  ]);

  // ─── Clubs (clubId 1–10) ──────────────────────────────────────────────────
  await knex("Club").insert([
    // 1
    {
      name: "Equestrian Society",
      description:
        "A community for horse lovers of all skill levels. We organize trail rides, jumping clinics, and stable visits throughout the year.",
      iconPath: "/horse_cropped.jpg",
      bannerPath: "/club_banners/equestrian4.avif",
      slogan: "Ride. Learn. Connect.",
      email: "equestrian@smu.ca",
      instagram: "@smu_equestrian",
      enrollmentType: "Open",
    },
    // 2
    {
      name: "Debate Team",
      description:
        "Sharpen your argumentation and public speaking skills. We compete in regional and national tournaments and host weekly practice rounds.",
      iconPath: "/podium.jpg",
      bannerPath: "/club_banners/debating.jpg",
      slogan: "May the best argument win.",
      email: "debate@smu.ca",
      twitterX: "@SMUDebate",
      facebook: "SMUDebateTeam",
      enrollmentType: "Open",
    },
    // 3
    {
      name: "League of Legends E-Sports Team",
      description:
        "SMU's competitive LoL roster. We scrim weekly and compete in the Canadian University E-Sports League.",
      iconPath: "/league_cropped.jpg",
      bannerPath: "/club_banners/league.avif",
      slogan: "Queue Up",
      email: "esports@smu.ca",
      twitterX: "@SMUEsports",
      instagram: "@smu_esports",
      enrollmentType: "Tryouts",
    },
    // 4
    {
      name: "Chess Club",
      description:
        "From beginners to tournament players, everyone is welcome. We run rated games, puzzle nights, and an end-of-year championship.",
      iconPath: "/chess_cropped.png",
      bannerPath: "/club_banners/chess.jpg",
      slogan: "Make every move count",
      email: "chess@smu.ca",
      facebook: "SMUChessClub",
      enrollmentType: "Open",
    },
    // 5
    {
      name: "Computer Science Society",
      description:
        "Hackathons, tech talks, and networking events for CS students and anyone passionate about software. Industry partnerships and resume help included.",
      iconPath: "/computer.jpg",
      bannerPath: "/club_banners/code.jpg",
      slogan: "We speak fluent machine",
      email: "css@smu.ca",
      twitterX: "@SMUCSS",
      instagram: "@smu_css",
      facebook: "SMUComputerScienceSociety",
      enrollmentType: "Open",
    },
    // 6
    {
      name: "Photography Club",
      description:
        "Explore photography from street to studio. We run workshops, photo walks, and an annual gallery showcase open to the whole campus.",
      iconPath: "/camera.jpg",
      bannerPath: "/club_banners/viewfinder.jpg",
      slogan: "Capture it before it's gone",
      email: "photo@smu.ca",
      instagram: "@smu_photo",
      enrollmentType: "Open",
    },
    // 7
    {
      name: "International Students Association",
      description:
        "Celebrating cultural diversity on campus. We host cultural fairs, language exchanges, and provide a support network for international students.",
      iconPath: "/earth.avif",
      bannerPath: "/club_banners/graduation.webp",
      slogan: "One world, one campus",
      email: "isa@smu.ca",
      instagram: "@smu_isa",
      facebook: "SMUISA",
      enrollmentType: "Open",
    },
    // 8
    {
      name: "Robotics Club",
      description:
        "Design, build, and program robots from the ground up. We compete in regional engineering challenges and mentor high school robotics teams.",
      iconPath: "/robot.png",
      bannerPath: "/club_banners/robot.jpg",
      slogan: "Built by students, powered by curiosity",
      email: "robotics@smu.ca",
      twitterX: "@SMURobotics",
      enrollmentType: "Open",
    },
    // 9
    {
      name: "Film Appreciation Society",
      description:
        "Weekly screenings, director deep-dives, and lively post-film discussions. From silent classics to contemporary world cinema.",
      iconPath: "/film.jpg",
      bannerPath: "/club_banners/projector.jpg",
      slogan: "The credits never really roll",
      email: "film@smu.ca",
      instagram: "@smu_film",
      enrollmentType: "Open",
    },
    // 10
    {
      name: "Outdoor Adventure Club",
      description:
        "Hiking, kayaking, climbing, and camping trips for all experience levels. We get SMU students off-screen and into the Nova Scotia wilderness.",
      iconPath: "/tree.jpg",
      bannerPath: "/club_banners/outdoors.jpg",
      slogan: "It's about time to unplug",
      email: "outdoor@smu.ca",
      instagram: "@smu_outdoor",
      facebook: "SMUOutdoorAdventure",
      enrollmentType: "Open",
    },
  ]);

  // ─── Interest Tags (tagId 1–20) ───────────────────────────────────────────
  await knex("InterestTag").insert([
    { name: "Strategy" }, // 1
    { name: "Gaming" }, // 2
    { name: "Technology" }, // 3
    { name: "Competitive" }, // 4
    { name: "Animals" }, // 5
    { name: "Outdoors" }, // 6
    { name: "Public Speaking" }, // 7
    { name: "Leadership" }, // 8
    { name: "Photography" }, // 9
    { name: "Arts" }, // 10
    { name: "Film" }, // 11
    { name: "Culture" }, // 12
    { name: "Engineering" }, // 13
    { name: "Science" }, // 14
    { name: "Social" }, // 15
    { name: "Sports" }, // 16
    { name: "Nature" }, // 17
    { name: "Programming" }, // 18
    { name: "E-Sports" }, // 19
    { name: "Community" }, // 20
    { name: "Business" }, //21
  ]);

  // ─── Club Tags ────────────────────────────────────────────────────────────
  await knex("ClubTag").insert([
    // Equestrian Society (1)
    { clubId: 1, tagId: 5 }, // Animals
    { clubId: 1, tagId: 6 }, // Outdoors
    { clubId: 1, tagId: 15 }, // Social
    { clubId: 1, tagId: 16 }, // Sports
    // Debate Team (2)
    { clubId: 2, tagId: 7 }, // Public Speaking
    { clubId: 2, tagId: 8 }, // Leadership
    { clubId: 2, tagId: 4 }, // Competitive
    { clubId: 2, tagId: 15 }, // Social
    // LoL E-Sports (3)
    { clubId: 3, tagId: 2 }, // Gaming
    { clubId: 3, tagId: 4 }, // Competitive
    { clubId: 3, tagId: 19 }, // E-Sports
    { clubId: 3, tagId: 15 }, // Social
    // Chess Club (4)
    { clubId: 4, tagId: 1 }, // Strategy
    { clubId: 4, tagId: 4 }, // Competitive
    { clubId: 4, tagId: 15 }, // Social
    { clubId: 4, tagId: 8 }, // Leadership
    // CS Society (5)
    { clubId: 5, tagId: 3 }, // Technology
    { clubId: 5, tagId: 18 }, // Programming
    { clubId: 5, tagId: 8 }, // Leadership
    { clubId: 5, tagId: 20 }, // Community
    // Photography Club (6)
    { clubId: 6, tagId: 9 }, // Photography
    { clubId: 6, tagId: 10 }, // Arts
    { clubId: 6, tagId: 15 }, // Social
    { clubId: 6, tagId: 6 }, // Outdoors
    // ISA (7)
    { clubId: 7, tagId: 12 }, // Culture
    { clubId: 7, tagId: 15 }, // Social
    { clubId: 7, tagId: 20 }, // Community
    { clubId: 7, tagId: 8 }, // Leadership
    // Robotics (8)
    { clubId: 8, tagId: 13 }, // Engineering
    { clubId: 8, tagId: 14 }, // Science
    { clubId: 8, tagId: 3 }, // Technology
    { clubId: 8, tagId: 18 }, // Programming
    // Film Society (9)
    { clubId: 9, tagId: 11 }, // Film
    { clubId: 9, tagId: 10 }, // Arts
    { clubId: 9, tagId: 12 }, // Culture
    { clubId: 9, tagId: 15 }, // Social
    // Outdoor Adventure (10)
    { clubId: 10, tagId: 6 }, // Outdoors
    { clubId: 10, tagId: 17 }, // Nature
    { clubId: 10, tagId: 16 }, // Sports
    { clubId: 10, tagId: 20 }, // Community
  ]);

  // ─── User Tags ────────────────────────────────────────────────────────────
  await knex("UserTag").insert([
    { userId: 1, tagId: 1 },
    { userId: 1, tagId: 4 },
    { userId: 2, tagId: 7 },
    { userId: 2, tagId: 8 },
    { userId: 3, tagId: 1 },
    { userId: 3, tagId: 3 },
    { userId: 3, tagId: 18 },
    { userId: 4, tagId: 9 },
    { userId: 4, tagId: 10 },
    { userId: 5, tagId: 7 },
    { userId: 5, tagId: 15 },
    { userId: 6, tagId: 2 },
    { userId: 6, tagId: 19 },
    { userId: 7, tagId: 13 },
    { userId: 7, tagId: 3 },
    { userId: 8, tagId: 2 },
    { userId: 8, tagId: 4 },
    { userId: 9, tagId: 2 },
    { userId: 9, tagId: 19 },
    { userId: 10, tagId: 3 },
    { userId: 10, tagId: 18 },
    { userId: 11, tagId: 7 },
    { userId: 11, tagId: 4 },
    { userId: 12, tagId: 18 },
    { userId: 12, tagId: 14 },
    { userId: 13, tagId: 13 },
    { userId: 13, tagId: 14 },
    { userId: 14, tagId: 13 },
    { userId: 14, tagId: 3 },
    { userId: 15, tagId: 9 },
    { userId: 15, tagId: 10 },
    { userId: 16, tagId: 9 },
    { userId: 16, tagId: 6 },
    { userId: 17, tagId: 12 },
    { userId: 17, tagId: 15 },
    { userId: 18, tagId: 6 },
    { userId: 18, tagId: 17 },
    { userId: 19, tagId: 6 },
    { userId: 19, tagId: 16 },
    { userId: 20, tagId: 17 },
    { userId: 20, tagId: 20 },
    { userId: 21, tagId: 5 },
    { userId: 21, tagId: 6 },
    { userId: 22, tagId: 11 },
    { userId: 22, tagId: 12 },
    { userId: 23, tagId: 7 },
    { userId: 23, tagId: 8 },
    { userId: 24, tagId: 12 },
    { userId: 24, tagId: 20 },
    { userId: 25, tagId: 2 },
    { userId: 25, tagId: 4 },
    { userId: 26, tagId: 5 },
    { userId: 26, tagId: 16 },
    { userId: 27, tagId: 11 },
    { userId: 27, tagId: 10 },
    { userId: 28, tagId: 12 },
    { userId: 28, tagId: 15 },
    { userId: 29, tagId: 6 },
    { userId: 29, tagId: 17 },
    { userId: 30, tagId: 5 },
    { userId: 30, tagId: 6 },
  ]);

  // ─── Roles ────────────────────────────────────────────────────────────────
  // roleId is scoped per club — each club starts its own sequence
  await knex("Role").insert([
    // Equestrian Society (clubId: 1)  roleId 1-3
    { roleId: 1, clubId: 1, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 1, roleName: "Secretary", isLeadership: true },
    { roleId: 3, clubId: 1, roleName: "Member", isLeadership: false },

    // Debate Team (clubId: 2)  roleId 1-4
    { roleId: 1, clubId: 2, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 2, roleName: "Vice President", isLeadership: true },
    { roleId: 3, clubId: 2, roleName: "Secretary", isLeadership: true },
    { roleId: 4, clubId: 2, roleName: "Member", isLeadership: false },

    // LoL E-Sports (clubId: 3)  roleId 1-3
    { roleId: 1, clubId: 3, roleName: "Captain", isLeadership: true },
    { roleId: 2, clubId: 3, roleName: "Coach", isLeadership: true },
    { roleId: 3, clubId: 3, roleName: "Member", isLeadership: false },

    // Chess Club (clubId: 4)  roleId 1-3
    { roleId: 1, clubId: 4, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 4, roleName: "Tournament Director", isLeadership: true },
    { roleId: 3, clubId: 4, roleName: "Member", isLeadership: false },

    // CS Society (clubId: 5)  roleId 1-4
    { roleId: 1, clubId: 5, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 5, roleName: "VP Events", isLeadership: true },
    { roleId: 3, clubId: 5, roleName: "VP Technical", isLeadership: true },
    { roleId: 4, clubId: 5, roleName: "Member", isLeadership: false },

    // Photography Club (clubId: 6)  roleId 1-3
    { roleId: 1, clubId: 6, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 6, roleName: "Gallery Curator", isLeadership: true },
    { roleId: 3, clubId: 6, roleName: "Member", isLeadership: false },

    // ISA (clubId: 7)  roleId 1-4
    { roleId: 1, clubId: 7, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 7, roleName: "Vice President", isLeadership: true },
    { roleId: 3, clubId: 7, roleName: "Cultural Director", isLeadership: true },
    { roleId: 4, clubId: 7, roleName: "Member", isLeadership: false },

    // Robotics Club (clubId: 8)  roleId 1-3
    { roleId: 1, clubId: 8, roleName: "Lead Engineer", isLeadership: true },
    { roleId: 2, clubId: 8, roleName: "Build Captain", isLeadership: true },
    { roleId: 3, clubId: 8, roleName: "Member", isLeadership: false },

    // Film Society (clubId: 9)  roleId 1-3
    { roleId: 1, clubId: 9, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 9, roleName: "Programme Director", isLeadership: true },
    { roleId: 3, clubId: 9, roleName: "Member", isLeadership: false },

    // Outdoor Adventure (clubId: 10)  roleId 1-3
    { roleId: 1, clubId: 10, roleName: "President", isLeadership: true },
    { roleId: 2, clubId: 10, roleName: "Safety Officer", isLeadership: true },
    { roleId: 3, clubId: 10, roleName: "Member", isLeadership: false },
  ]);

  // ─── Memberships ──────────────────────────────────────────────────────────
  await knex("Membership").insert([
    // ── Equestrian Society (clubId: 1) — 7 members ──
    { clubId: 1, userId: 21, roleId: 1, status: "joined", joinedAt: "2024-09-05 12:00:00" },
    { clubId: 1, userId: 26, roleId: 2, status: "joined", joinedAt: "2024-09-06 12:00:00" },
    { clubId: 1, userId: 4, roleId: 3, status: "joined", joinedAt: "2024-09-10 12:00:00" },
    { clubId: 1, userId: 30, roleId: 3, status: "joined", joinedAt: "2024-09-11 12:00:00" },
    { clubId: 1, userId: 18, roleId: 3, status: "joined", joinedAt: "2024-09-14 12:00:00" },
    { clubId: 1, userId: 20, roleId: 3, status: "pending" },
    { clubId: 1, userId: 29, roleId: 3, status: "joined", joinedAt: "2024-10-01 12:00:00" },

    // ── Debate Team (clubId: 2) — 9 members ──
    { clubId: 2, userId: 2, roleId: 1, status: "joined", joinedAt: "2024-09-03 12:00:00" },
    { clubId: 2, userId: 23, roleId: 2, status: "joined", joinedAt: "2024-09-04 12:00:00" },
    { clubId: 2, userId: 11, roleId: 3, status: "joined", joinedAt: "2024-09-05 12:00:00" },
    { clubId: 2, userId: 5, roleId: 4, status: "joined", joinedAt: "2024-09-10 12:00:00" },
    { clubId: 2, userId: 15, roleId: 4, status: "joined", joinedAt: "2024-09-12 12:00:00" },
    { clubId: 2, userId: 17, roleId: 4, status: "joined", joinedAt: "2024-09-15 12:00:00" },
    { clubId: 2, userId: 1, roleId: 4, status: "joined", joinedAt: "2024-10-02 12:00:00" },
    { clubId: 2, userId: 28, roleId: 4, status: "pending" },
    { clubId: 2, userId: 24, roleId: 4, status: "joined", joinedAt: "2024-10-10 12:00:00" },

    // ── LoL E-Sports (clubId: 3) — 8 members ──
    { clubId: 3, userId: 6, roleId: 1, status: "joined", joinedAt: "2024-09-02 12:00:00" },
    { clubId: 3, userId: 25, roleId: 2, status: "joined", joinedAt: "2024-09-03 12:00:00" },
    { clubId: 3, userId: 8, roleId: 3, status: "joined", joinedAt: "2024-09-08 12:00:00" },
    { clubId: 3, userId: 9, roleId: 3, status: "joined", joinedAt: "2024-09-09 12:00:00" },
    { clubId: 3, userId: 22, roleId: 3, status: "joined", joinedAt: "2024-09-10 12:00:00" },
    { clubId: 3, userId: 29, roleId: 3, status: "joined", joinedAt: "2024-09-15 12:00:00" },
    { clubId: 3, userId: 13, roleId: 3, status: "pending" },
    { clubId: 3, userId: 19, roleId: 3, status: "joined", joinedAt: "2024-10-05 12:00:00" },

    // ── Chess Club (clubId: 4) — 8 members ──
    { clubId: 4, userId: 3, roleId: 1, status: "joined", joinedAt: "2024-09-01 12:00:00" },
    { clubId: 4, userId: 14, roleId: 2, status: "joined", joinedAt: "2024-09-02 12:00:00" },
    { clubId: 4, userId: 1, roleId: 3, status: "joined", joinedAt: "2024-09-07 12:00:00" },
    { clubId: 4, userId: 7, roleId: 3, status: "joined", joinedAt: "2024-09-08 12:00:00" },
    { clubId: 4, userId: 11, roleId: 3, status: "joined", joinedAt: "2024-09-12 12:00:00" },
    { clubId: 4, userId: 23, roleId: 3, status: "joined", joinedAt: "2024-09-20 12:00:00" },
    { clubId: 4, userId: 5, roleId: 3, status: "joined", joinedAt: "2024-10-01 12:00:00" },
    { clubId: 4, userId: 22, roleId: 3, status: "pending" },

    // ── CS Society (clubId: 5) — 10 members ──
    { clubId: 5, userId: 10, roleId: 1, status: "joined", joinedAt: "2024-09-01 12:00:00" },
    { clubId: 5, userId: 3, roleId: 2, status: "joined", joinedAt: "2024-09-02 12:00:00" },
    { clubId: 5, userId: 7, roleId: 3, status: "joined", joinedAt: "2024-09-03 12:00:00" },
    { clubId: 5, userId: 12, roleId: 4, status: "joined", joinedAt: "2024-09-08 12:00:00" },
    { clubId: 5, userId: 13, roleId: 4, status: "joined", joinedAt: "2024-09-09 12:00:00" },
    { clubId: 5, userId: 14, roleId: 4, status: "joined", joinedAt: "2024-09-15 12:00:00" },
    { clubId: 5, userId: 21, roleId: 4, status: "joined", joinedAt: "2024-09-20 12:00:00" },
    { clubId: 5, userId: 25, roleId: 4, status: "joined", joinedAt: "2024-10-03 12:00:00" },
    { clubId: 5, userId: 29, roleId: 4, status: "pending" },
    { clubId: 5, userId: 4, roleId: 4, status: "joined", joinedAt: "2024-10-10 12:00:00" },

    // ── Photography Club (clubId: 6) — 7 members ──
    { clubId: 6, userId: 15, roleId: 1, status: "joined", joinedAt: "2024-09-04 12:00:00" },
    { clubId: 6, userId: 4, roleId: 2, status: "joined", joinedAt: "2024-09-05 12:00:00" },
    { clubId: 6, userId: 16, roleId: 3, status: "joined", joinedAt: "2024-09-10 12:00:00" },
    { clubId: 6, userId: 22, roleId: 3, status: "joined", joinedAt: "2024-09-11 12:00:00" },
    { clubId: 6, userId: 27, roleId: 3, status: "joined", joinedAt: "2024-09-18 12:00:00" },
    { clubId: 6, userId: 8, roleId: 3, status: "pending" },
    { clubId: 6, userId: 30, roleId: 3, status: "joined", joinedAt: "2024-10-01 12:00:00" },

    // ── ISA (clubId: 7) — 9 members ──
    { clubId: 7, userId: 17, roleId: 1, status: "joined", joinedAt: "2024-09-02 12:00:00" },
    { clubId: 7, userId: 24, roleId: 2, status: "joined", joinedAt: "2024-09-03 12:00:00" },
    { clubId: 7, userId: 28, roleId: 3, status: "joined", joinedAt: "2024-09-04 12:00:00" },
    { clubId: 7, userId: 26, roleId: 4, status: "joined", joinedAt: "2024-09-10 12:00:00" },
    { clubId: 7, userId: 16, roleId: 4, status: "joined", joinedAt: "2024-09-12 12:00:00" },
    { clubId: 7, userId: 9, roleId: 4, status: "joined", joinedAt: "2024-09-15 12:00:00" },
    { clubId: 7, userId: 22, roleId: 4, status: "joined", joinedAt: "2024-09-20 12:00:00" },
    { clubId: 7, userId: 2, roleId: 4, status: "joined", joinedAt: "2024-10-01 12:00:00" },
    { clubId: 7, userId: 30, roleId: 4, status: "pending" },

    // ── Robotics Club (clubId: 8) — 8 members ──
    { clubId: 8, userId: 7, roleId: 1, status: "joined", joinedAt: "2024-09-01 12:00:00" },
    { clubId: 8, userId: 13, roleId: 2, status: "joined", joinedAt: "2024-09-02 12:00:00" },
    { clubId: 8, userId: 14, roleId: 3, status: "joined", joinedAt: "2024-09-08 12:00:00" },
    { clubId: 8, userId: 12, roleId: 3, status: "joined", joinedAt: "2024-09-09 12:00:00" },
    { clubId: 8, userId: 21, roleId: 3, status: "joined", joinedAt: "2024-09-14 12:00:00" },
    { clubId: 8, userId: 10, roleId: 3, status: "joined", joinedAt: "2024-09-20 12:00:00" },
    { clubId: 8, userId: 29, roleId: 3, status: "pending" },
    { clubId: 8, userId: 23, roleId: 3, status: "joined", joinedAt: "2024-10-05 12:00:00" },

    // ── Film Society (clubId: 9) — 7 members ──
    { clubId: 9, userId: 27, roleId: 1, status: "joined", joinedAt: "2024-09-03 12:00:00" },
    { clubId: 9, userId: 22, roleId: 2, status: "joined", joinedAt: "2024-09-04 12:00:00" },
    { clubId: 9, userId: 11, roleId: 3, status: "joined", joinedAt: "2024-09-10 12:00:00" },
    { clubId: 9, userId: 17, roleId: 3, status: "joined", joinedAt: "2024-09-12 12:00:00" },
    { clubId: 9, userId: 20, roleId: 3, status: "joined", joinedAt: "2024-09-18 12:00:00" },
    { clubId: 9, userId: 4, roleId: 3, status: "joined", joinedAt: "2024-10-02 12:00:00" },
    { clubId: 9, userId: 15, roleId: 3, status: "pending" },

    // ── Outdoor Adventure (clubId: 10) — 8 members ──
    { clubId: 10, userId: 18, roleId: 1, status: "joined", joinedAt: "2024-09-01 12:00:00" },
    { clubId: 10, userId: 29, roleId: 2, status: "joined", joinedAt: "2024-09-02 12:00:00" },
    { clubId: 10, userId: 19, roleId: 3, status: "joined", joinedAt: "2024-09-08 12:00:00" },
    { clubId: 10, userId: 20, roleId: 3, status: "joined", joinedAt: "2024-09-09 12:00:00" },
    { clubId: 10, userId: 6, roleId: 3, status: "joined", joinedAt: "2024-09-15 12:00:00" },
    { clubId: 10, userId: 16, roleId: 3, status: "joined", joinedAt: "2024-09-20 12:00:00" },
    { clubId: 10, userId: 30, roleId: 3, status: "joined", joinedAt: "2024-10-01 12:00:00" },
    { clubId: 10, userId: 26, roleId: 3, status: "pending" },
  ]);

  // ─── Announcements (3 per club) ───────────────────────────────────────────
  await knex("Announcement").insert([
    // Equestrian Society (clubId: 1, president userId: 21)
    {
      clubId: 1,
      userId: 21,
      content:
        "Welcome to the Equestrian Society! Our first trail ride of the semester is happening September 21st at Shubie Park. Helmets are mandatory — if you need to borrow one, let us know in advance.",
      createdAt: "2024-09-08 10:00:00",
      isPinned: true,
    },
    {
      clubId: 1,
      userId: 26,
      content:
        "Reminder that membership fees ($20) are due by October 1st. E-transfer to equestrian@smu.ca. Fees go toward arena bookings and equipment maintenance.",
      createdAt: "2024-09-22 14:00:00",
      isPinned: false,
    },
    {
      clubId: 1,
      userId: 21,
      content:
        "We're hosting a beginner jumping clinic on October 12th with Coach Marie Bouchard. Only 8 spots available — sign up through the link in our Instagram bio!",
      createdAt: "2024-10-03 09:00:00",
      isPinned: false,
    },

    // Debate Team (clubId: 2, president userId: 2)
    {
      clubId: 2,
      userId: 2,
      content:
        "The fall semester practice schedule is now live. We meet every Tuesday and Thursday at 6pm in McNally 215. All skill levels are welcome — first session is a friendly intro round.",
      createdAt: "2024-09-05 09:00:00",
      isPinned: true,
    },
    {
      clubId: 2,
      userId: 23,
      content:
        "Registration for the Atlantic Universities Debate Championship is open. The tournament runs November 8–10 in Fredericton. Spots are limited to 4 from our team — see Alex to put your name in.",
      createdAt: "2024-09-18 11:00:00",
      isPinned: false,
    },
    {
      clubId: 2,
      userId: 11,
      content:
        "This week's motion: 'This house believes social media does more harm than good.' Come prepared with 3 minutes of arguments for either side. We'll draw positions on the night.",
      createdAt: "2024-10-07 15:00:00",
      isPinned: false,
    },

    // LoL E-Sports (clubId: 3, captain userId: 6)
    {
      clubId: 3,
      userId: 6,
      content:
        "Tryouts for the fall roster are this Friday at 7pm in the Student Union Gaming Lounge. Bring your laptop, account at Platinum or above preferred. Message the captain if you have questions.",
      createdAt: "2024-09-04 12:00:00",
      isPinned: true,
    },
    {
      clubId: 3,
      userId: 25,
      content:
        "Scrim schedule is set — we're running Tuesday/Thursday evenings starting at 8pm. Mandatory for all roster members. Ping in Discord if you have a conflict.",
      createdAt: "2024-09-16 10:00:00",
      isPinned: false,
    },
    {
      clubId: 3,
      userId: 6,
      content:
        "We placed 3rd in the CUEL fall qualifier! Big shoutout to the whole team for a great run. VOD review this Sunday at 2pm — attendance strongly encouraged.",
      createdAt: "2024-10-20 18:00:00",
      isPinned: false,
    },

    // Chess Club (clubId: 4, president userId: 3)
    {
      clubId: 4,
      userId: 3,
      content:
        "Welcome back everyone! Club meetings are every Wednesday at 5pm in the Loyola Building common room. Bring a board if you have one, though we have sets available.",
      createdAt: "2024-09-04 08:00:00",
      isPinned: true,
    },
    {
      clubId: 4,
      userId: 14,
      content:
        "The SMU Fall Championship is scheduled for November 2nd. It will be a 5-round Swiss format, G/30+5 time control. Registration opens October 1st — $5 entry fee for non-members.",
      createdAt: "2024-09-25 10:00:00",
      isPinned: false,
    },
    {
      clubId: 4,
      userId: 3,
      content:
        "Puzzle of the week is up on the whiteboard in the common room. First person to show me the full solution line wins a free coffee. Hint: it's a two-move combination.",
      createdAt: "2024-10-09 09:00:00",
      isPinned: false,
    },

    // CS Society (clubId: 5, president userId: 10)
    {
      clubId: 5,
      userId: 10,
      content:
        "Happy new semester! Our kickoff social is September 13th at 7pm in the Atrium. Free pizza, lightning talks, and a chance to meet the exec team. All CS students welcome.",
      createdAt: "2024-09-06 10:00:00",
      isPinned: true,
    },
    {
      clubId: 5,
      userId: 3,
      content:
        "HackSMU 2024 is happening October 18–20! Registration is now open at hackstmu.ca. Teams of 2–4, 36-hour hackathon, prizes across three categories. We need volunteers too — reach out to VP Events.",
      createdAt: "2024-09-20 14:00:00",
      isPinned: true,
    },
    {
      clubId: 5,
      userId: 7,
      content:
        "Workshop this Thursday: Introduction to Docker and containerization. No experience needed. Bring a laptop with Docker Desktop installed. Room MC 318, 6pm.",
      createdAt: "2024-10-08 11:00:00",
      isPinned: false,
    },

    // Photography Club (clubId: 6, president userId: 15)
    {
      clubId: 6,
      userId: 15,
      content:
        "First photo walk of the year is September 14th — we're heading down to the Halifax waterfront at 10am. Bring any camera you have, even your phone. We'll share tips as we go.",
      createdAt: "2024-09-07 09:00:00",
      isPinned: true,
    },
    {
      clubId: 6,
      userId: 4,
      content:
        "Annual gallery showcase submissions are open! Theme this year is 'Threshold.' Submit up to 3 edited images to photo@smu.ca by November 15th. Prints will be displayed in the Atrium in December.",
      createdAt: "2024-10-01 10:00:00",
      isPinned: false,
    },
    {
      clubId: 6,
      userId: 15,
      content:
        "Darkroom workshop next Saturday, October 19th — 1pm to 4pm. We have film and chemistry covered, just bring your curiosity. Space limited to 8 people, RSVP by Wednesday.",
      createdAt: "2024-10-12 12:00:00",
      isPinned: false,
    },

    // ISA (clubId: 7, president userId: 17)
    {
      clubId: 7,
      userId: 17,
      content:
        "Welcome to the International Students Association! Our welcome mixer is September 7th in the Student Union ballroom. Come share your culture, meet fellow international students, and enjoy food from around the world.",
      createdAt: "2024-09-03 10:00:00",
      isPinned: true,
    },
    {
      clubId: 7,
      userId: 24,
      content:
        "Cultural Fair planning meeting is this Tuesday at 5pm in SU Room 204. We need representatives from as many countries as possible. The fair is set for October 26th — it's our biggest event of the year!",
      createdAt: "2024-09-23 09:00:00",
      isPinned: false,
    },
    {
      clubId: 7,
      userId: 28,
      content:
        "Language exchange pairs have been assigned — check your email. Sessions run every other Friday starting October 4th. A great way to practice and make a friend across cultures.",
      createdAt: "2024-09-30 14:00:00",
      isPinned: false,
    },

    // Robotics Club (clubId: 8, lead engineer userId: 7)
    {
      clubId: 8,
      userId: 7,
      content:
        "Kickoff meeting this Wednesday at 5pm in the Engineering lab (EN 101). We'll be reviewing last year's competition bot and deciding on this year's design challenge. New members very welcome.",
      createdAt: "2024-09-05 09:00:00",
      isPinned: true,
    },
    {
      clubId: 8,
      userId: 13,
      content:
        "Parts order for the drive base components has been submitted. Expected delivery by September 27th. In the meantime, sub-teams should be finalizing their subsystem designs. See the shared drive for templates.",
      createdAt: "2024-09-18 11:00:00",
      isPinned: false,
    },
    {
      clubId: 8,
      userId: 7,
      content:
        "Competition registration is confirmed — we're entered in the Atlantic Engineering Challenge on November 16th in Moncton. T-shirts are being ordered; submit your size to the sign-up sheet by Friday.",
      createdAt: "2024-10-10 10:00:00",
      isPinned: false,
    },

    // Film Society (clubId: 9, president userId: 27)
    {
      clubId: 9,
      userId: 27,
      content:
        "First screening of the semester: Akira Kurosawa's 'Seven Samurai' (1954). Friday September 13th at 7pm in Loyola 175. Free entry, popcorn provided. Discussion follows the film.",
      createdAt: "2024-09-06 12:00:00",
      isPinned: true,
    },
    {
      clubId: 9,
      userId: 22,
      content:
        "Autumn programme is now finalized: we're doing a month of Italian neorealism through October, then a Kubrick retrospective in November. Full schedule posted on our Instagram.",
      createdAt: "2024-09-28 10:00:00",
      isPinned: false,
    },
    {
      clubId: 9,
      userId: 27,
      content:
        "We're launching a short film competition open to all SMU students! Max 10 minutes, any genre. Submissions due November 30th, screening night in December. Details at film@smu.ca.",
      createdAt: "2024-10-15 14:00:00",
      isPinned: false,
    },

    // Outdoor Adventure (clubId: 10, president userId: 18)
    {
      clubId: 10,
      userId: 18,
      content:
        "Welcome to the Outdoor Adventure Club! Our first trip is a day hike on the Bluff Wilderness Trail, September 21st. Difficulty: moderate. Meet at the SUB parking lot at 8am. Carpooling available.",
      createdAt: "2024-09-07 08:00:00",
      isPinned: true,
    },
    {
      clubId: 10,
      userId: 29,
      content:
        "Safety briefing attendance is mandatory before any overnight trip. Next session is September 28th at 4pm in SU Room 101. Covers first aid basics, trail navigation, and leave-no-trace principles.",
      createdAt: "2024-09-20 10:00:00",
      isPinned: false,
    },
    {
      clubId: 10,
      userId: 18,
      content:
        "Fall kayaking trip is confirmed for October 5th on the Shubenacadie River. $15/person covers equipment rental and shuttle. Spots filling fast — sign up in the Discord by September 30th.",
      createdAt: "2024-09-24 12:00:00",
      isPinned: false,
    },
  ]);

  // ─── Text Chats ───────────────────────────────────────────────────────────
  await knex("TextChat").insert([
    { chatType: "group" }, // 1  — Chess Club
    { chatType: "group" }, // 2  — CS Society
    { chatType: "group" }, // 3  — Robotics Club
    { chatType: "group" }, // 4  — LoL E-Sports
    { chatType: "group" }, // 5  — Outdoor Adventure
    { chatType: "dm" }, // 6  — John & Ronen DM
    { chatType: "dm" }, // 7  — Priya & Daniel DM
  ]);

  // ─── Chat Members ─────────────────────────────────────────────────────────
  await knex("ChatMember").insert([
    // Chess Club chat (1)
    { chatId: 1, userId: 3 },
    { chatId: 1, userId: 14 },
    { chatId: 1, userId: 1 },
    { chatId: 1, userId: 7 },
    { chatId: 1, userId: 11 },
    { chatId: 1, userId: 23 },
    { chatId: 1, userId: 5 },
    // CS Society chat (2)
    { chatId: 2, userId: 10 },
    { chatId: 2, userId: 3 },
    { chatId: 2, userId: 7 },
    { chatId: 2, userId: 12 },
    { chatId: 2, userId: 13 },
    { chatId: 2, userId: 14 },
    { chatId: 2, userId: 21 },
    { chatId: 2, userId: 25 },
    // Robotics chat (3)
    { chatId: 3, userId: 7 },
    { chatId: 3, userId: 13 },
    { chatId: 3, userId: 14 },
    { chatId: 3, userId: 12 },
    { chatId: 3, userId: 21 },
    { chatId: 3, userId: 10 },
    // LoL chat (4)
    { chatId: 4, userId: 6 },
    { chatId: 4, userId: 25 },
    { chatId: 4, userId: 8 },
    { chatId: 4, userId: 9 },
    { chatId: 4, userId: 22 },
    { chatId: 4, userId: 19 },
    // Outdoor Adventure chat (5)
    { chatId: 5, userId: 18 },
    { chatId: 5, userId: 29 },
    { chatId: 5, userId: 19 },
    { chatId: 5, userId: 20 },
    { chatId: 5, userId: 6 },
    { chatId: 5, userId: 16 },
    { chatId: 5, userId: 30 },
    // DM: John & Ronen (6)
    { chatId: 6, userId: 1 },
    { chatId: 6, userId: 3 },
    // DM: Priya & Daniel (7)
    { chatId: 7, userId: 10 },
    { chatId: 7, userId: 7 },
  ]);

  // ─── Chat Messages ────────────────────────────────────────────────────────
  await knex("ChatMessage").insert([
    // ── Chess Club (chatId: 1) ──
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
      chatId: 1,
      userId: 14,
      message: "Should we do a blitz warm-up before the rated games?",
      posted: "2025-05-01 10:20:00",
    },
    {
      chatId: 1,
      userId: 11,
      message: "Always down for blitz. 3+2 or 5+0?",
      posted: "2025-05-01 10:25:00",
    },
    { chatId: 1, userId: 7, message: "5+0, keeps it honest", posted: "2025-05-01 10:27:00" },
    { chatId: 1, userId: 23, message: "I'll bring the clock!", posted: "2025-05-01 10:30:00" },

    // ── CS Society (chatId: 2) ──
    {
      chatId: 2,
      userId: 10,
      message: "Docker workshop confirmed for Thursday, room MC 318",
      posted: "2025-05-02 09:00:00",
    },
    {
      chatId: 2,
      userId: 3,
      message: "Nice, I'll send a reminder to the mailing list",
      posted: "2025-05-02 09:05:00",
    },
    {
      chatId: 2,
      userId: 12,
      message: "Do attendees need anything installed beforehand?",
      posted: "2025-05-02 09:10:00",
    },
    {
      chatId: 2,
      userId: 7,
      message: "Just Docker Desktop. There's a link in the event post",
      posted: "2025-05-02 09:13:00",
    },
    {
      chatId: 2,
      userId: 21,
      message: "Will slides be posted after?",
      posted: "2025-05-02 09:20:00",
    },
    {
      chatId: 2,
      userId: 10,
      message: "Yes, everything goes on the GitHub org after the session",
      posted: "2025-05-02 09:22:00",
    },
    {
      chatId: 2,
      userId: 14,
      message: "Hackathon team formation — anyone still looking for a group?",
      posted: "2025-05-02 14:00:00",
    },
    {
      chatId: 2,
      userId: 25,
      message: "Still need one more person, we're doing an ML project",
      posted: "2025-05-02 14:05:00",
    },
    {
      chatId: 2,
      userId: 13,
      message: "I'm in if you need backend experience",
      posted: "2025-05-02 14:08:00",
    },
    {
      chatId: 2,
      userId: 25,
      message: "Perfect, I'll add you to our group chat",
      posted: "2025-05-02 14:10:00",
    },

    // ── Robotics (chatId: 3) ──
    {
      chatId: 3,
      userId: 7,
      message: "Parts arrived — drive base components are in the lab",
      posted: "2025-05-03 11:00:00",
    },
    {
      chatId: 3,
      userId: 13,
      message: "Great, I'll start on the chassis assembly this evening",
      posted: "2025-05-03 11:05:00",
    },
    {
      chatId: 3,
      userId: 14,
      message: "I finished the motor controller wiring diagram, uploading now",
      posted: "2025-05-03 11:10:00",
    },
    {
      chatId: 3,
      userId: 12,
      message: "Sensors are calibrated. Ready to test once chassis is done",
      posted: "2025-05-03 11:20:00",
    },
    {
      chatId: 3,
      userId: 21,
      message: "I can come in Saturday morning to help with assembly",
      posted: "2025-05-03 11:30:00",
    },
    {
      chatId: 3,
      userId: 7,
      message: "Saturday works. Let's say 10am in EN 101",
      posted: "2025-05-03 11:32:00",
    },
    {
      chatId: 3,
      userId: 10,
      message: "I'll bring the torque wrenches",
      posted: "2025-05-03 11:35:00",
    },

    // ── LoL E-Sports (chatId: 4) ──
    {
      chatId: 4,
      userId: 6,
      message: "Scrim tonight at 8pm, everyone be ready to queue",
      posted: "2025-05-04 17:00:00",
    },
    {
      chatId: 4,
      userId: 8,
      message: "I'll be on, just finishing dinner",
      posted: "2025-05-04 17:05:00",
    },
    {
      chatId: 4,
      userId: 25,
      message: "Reviewing last week's VOD — our dragon control was rough",
      posted: "2025-05-04 17:10:00",
    },
    {
      chatId: 4,
      userId: 9,
      message: "Yeah we kept conceding soul without a fight",
      posted: "2025-05-04 17:12:00",
    },
    {
      chatId: 4,
      userId: 6,
      message: "That's what we're fixing tonight. Focus on objective prio",
      posted: "2025-05-04 17:14:00",
    },
    {
      chatId: 4,
      userId: 22,
      message: "Can we also work on our mid-game rotations?",
      posted: "2025-05-04 17:20:00",
    },
    {
      chatId: 4,
      userId: 19,
      message: "Agreed, our split push calls have been inconsistent",
      posted: "2025-05-04 17:22:00",
    },
    {
      chatId: 4,
      userId: 6,
      message: "All on the list. See you all at 8",
      posted: "2025-05-04 17:23:00",
    },

    // ── Outdoor Adventure (chatId: 5) ──
    {
      chatId: 5,
      userId: 18,
      message: "Kayak trip is on for Saturday — weather looks great",
      posted: "2025-05-05 08:00:00",
    },
    {
      chatId: 5,
      userId: 29,
      message: "Everyone remember to wear layers, river can be cold",
      posted: "2025-05-05 08:05:00",
    },
    {
      chatId: 5,
      userId: 19,
      message: "Do we need to bring our own paddles?",
      posted: "2025-05-05 08:10:00",
    },
    {
      chatId: 5,
      userId: 18,
      message: "No, all equipment is included in the rental fee",
      posted: "2025-05-05 08:12:00",
    },
    {
      chatId: 5,
      userId: 20,
      message: "Is there parking at the launch site?",
      posted: "2025-05-05 08:15:00",
    },
    {
      chatId: 5,
      userId: 29,
      message: "Yes, free lot right at the river access point",
      posted: "2025-05-05 08:17:00",
    },
    {
      chatId: 5,
      userId: 16,
      message: "So excited for this, first time kayaking!",
      posted: "2025-05-05 08:20:00",
    },
    {
      chatId: 5,
      userId: 30,
      message: "You'll love it, the river section we're doing is perfect for beginners",
      posted: "2025-05-05 08:22:00",
    },
    {
      chatId: 5,
      userId: 6,
      message: "See everyone at 9am at the SUB for carpooling",
      posted: "2025-05-05 08:25:00",
    },

    // ── DM: John & Ronen (chatId: 6) ──
    {
      chatId: 6,
      userId: 1,
      message: "Hey Ronen, do you want to run through some endgame drills before Thursday?",
      posted: "2025-05-01 11:00:00",
    },
    {
      chatId: 6,
      userId: 3,
      message: "Sure! How about Wednesday evening?",
      posted: "2025-05-01 11:04:00",
    },
    { chatId: 6, userId: 1, message: "Works for me, around 7pm?", posted: "2025-05-01 11:06:00" },
    { chatId: 6, userId: 3, message: "Perfect, see you then", posted: "2025-05-01 11:07:00" },

    // ── DM: Priya & Daniel (chatId: 7) ──
    {
      chatId: 7,
      userId: 10,
      message: "Hey, are you going to the hackathon kickoff?",
      posted: "2025-05-02 13:00:00",
    },
    {
      chatId: 7,
      userId: 7,
      message: "Yeah for sure, already registered. You?",
      posted: "2025-05-02 13:05:00",
    },
    {
      chatId: 7,
      userId: 10,
      message: "Yes! Need to finalize my team though",
      posted: "2025-05-02 13:07:00",
    },
    {
      chatId: 7,
      userId: 7,
      message: "We have a spot if you want in, doing a systems project",
      posted: "2025-05-02 13:10:00",
    },
    { chatId: 7, userId: 10, message: "That sounds great, I'm in!", posted: "2025-05-02 13:12:00" },
  ]);
};
