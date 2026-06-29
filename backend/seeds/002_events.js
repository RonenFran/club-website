// ─── Events (eventId 1–15) ────────────────────────────────────────────────
await knex("Event").insert([
  // ── BUSINESS (3) ──
  // 1
  {
    title: "SMU Career & Networking Fair",
    description:
      "Connect with recruiters from over 20 Halifax-area employers across finance, tech, and consulting. Bring printed résumés and dress professionally. Open to all SMU students.",
    startsAt: "2024-10-15 10:00:00",
    endsAt: "2024-10-15 15:00:00",
    location: "Homburg Centre, Main Gymnasium",
  },
  // 2
  {
    title: "Entrepreneur Pitch Night",
    description:
      "Five student teams pitch their startup ideas to a panel of local investors and faculty judges. Audience voting determines the People's Choice award. Networking reception follows.",
    startsAt: "2024-11-06 18:00:00",
    endsAt: "2024-11-06 21:00:00",
    location: "Atrium, Sobey Building",
  },
  // 3
  {
    title: "LinkedIn & Personal Branding Workshop",
    description:
      "A hands-on workshop covering LinkedIn profile optimization, personal branding strategy, and how to reach out to professionals. Run by the SMU Career Services office.",
    startsAt: "2024-10-23 14:00:00",
    endsAt: "2024-10-23 16:00:00",
    location: "McNally Main 215",
  },

  // ── SOCIAL (3) ──
  // 4
  {
    title: "International Cultural Fair",
    description:
      "The ISA's annual showcase of food, music, dance, and traditions from over 30 countries. Free entry, open to the whole campus and Halifax community.",
    startsAt: "2024-10-26 11:00:00",
    endsAt: "2024-10-26 17:00:00",
    location: "Student Union Ballroom & Courtyard",
  },
  // 5
  {
    title: "Fall Semester Kickoff Social",
    description:
      "Meet new and returning students at the biggest social event of the fall semester. DJ, lawn games, free food trucks, and club table fair all in one afternoon.",
    startsAt: "2024-09-13 15:00:00",
    endsAt: "2024-09-13 20:00:00",
    location: "SMU Campus Quad",
  },
  // 6
  {
    title: "Film Screening: Seven Samurai",
    description:
      "The Film Appreciation Society presents Akira Kurosawa's masterpiece in full. Free entry with popcorn. A post-film discussion on Kurosawa's influence on world cinema follows.",
    startsAt: "2024-09-13 19:00:00",
    endsAt: "2024-09-13 22:30:00",
    location: "Loyola Building, Room 175",
  },

  // ── SCIENCE (3) ──
  // 7
  {
    title: "Atlantic Engineering Challenge",
    description:
      "Regional robotics and engineering competition drawing teams from six Atlantic universities. SMU Robotics Club competes in the autonomous navigation and load-bearing categories.",
    startsAt: "2024-11-16 08:00:00",
    endsAt: "2024-11-16 18:00:00",
    location: "Moncton Convention Centre, Moncton NB",
  },
  // 8
  {
    title: "Introduction to Docker & Containerization",
    description:
      "A beginner-friendly hands-on workshop run by the CS Society. Learn to build and run containers, write Dockerfiles, and manage multi-service apps with Compose. Bring a laptop.",
    startsAt: "2024-10-10 18:00:00",
    endsAt: "2024-10-10 20:00:00",
    location: "McNally Centre, Room 318",
  },
  // 9
  {
    title: "Science & Society Public Lecture: AI Ethics",
    description:
      "Dr. Amara Nwosu (Dalhousie CS) presents on the societal implications of large language models, bias in algorithmic systems, and what students can do. Q&A to follow.",
    startsAt: "2024-11-01 17:00:00",
    endsAt: "2024-11-01 19:00:00",
    location: "Loyola Building, Room 160",
  },

  // ── SPORTS (3) ──
  // 10
  {
    title: "Bluff Wilderness Trail Day Hike",
    description:
      "The Outdoor Adventure Club's first trip of the semester — a moderate day hike through the Bluff Wilderness Trail system south of Halifax. Carpooling from SUB parking lot.",
    startsAt: "2024-09-21 08:00:00",
    endsAt: "2024-09-21 16:00:00",
    location: "Bluff Wilderness Trail, Hacketts Cove NS",
  },
  // 11
  {
    title: "Shubenacadie River Kayaking Trip",
    description:
      "A guided kayak trip on a scenic section of the Shubenacadie River. All equipment included. Suitable for beginners. $15/person covers rental and shuttle.",
    startsAt: "2024-10-05 09:00:00",
    endsAt: "2024-10-05 15:00:00",
    location: "Shubenacadie River Access, Enfield NS",
  },
  // 12
  {
    title: "SMU Fall Chess Championship",
    description:
      "Five-round Swiss tournament, G/30+5 time control. Open to all SMU students. $5 entry for non-members. Prizes for top three finishers. Organized by the Chess Club.",
    startsAt: "2024-11-02 12:00:00",
    endsAt: "2024-11-02 18:00:00",
    location: "Loyola Building, Common Room",
  },

  // ── TECHNOLOGY (3) ──
  // 13
  {
    title: "HackSMU 2024",
    description:
      "SMU's flagship 36-hour hackathon. Teams of 2–4 compete across three tracks: social impact, open innovation, and sustainability. Prizes, mentorship, and free meals throughout.",
    startsAt: "2024-10-18 18:00:00",
    endsAt: "2024-10-20 06:00:00",
    location: "Sobey Building, Floors 2 & 3",
  },
  // 14
  {
    title: "CUEL Fall Qualifier — League of Legends",
    description:
      "SMU's LoL E-Sports Team competes in the Canadian University E-Sports League fall qualifier. Spectators welcome in the Student Union Gaming Lounge.",
    startsAt: "2024-10-12 13:00:00",
    endsAt: "2024-10-12 20:00:00",
    location: "Student Union Gaming Lounge",
  },
  // 15
  {
    title: "Photography Darkroom Workshop",
    description:
      "A hands-on introduction to analog film development and darkroom printing. Film and chemistry provided. Space limited to 8 participants. Run by the Photography Club.",
    startsAt: "2024-10-19 13:00:00",
    endsAt: "2024-10-19 16:00:00",
    location: "SMU Arts Building, Darkroom B",
  },
]);

// ─── Event Tags ───────────────────────────────────────────────────────────
await knex("EventTag").insert([
  // Career Fair (1) — Business, Social, Leadership
  { eventId: 1, tagId: 21 }, // Business
  { eventId: 1, tagId: 15 }, // Social
  { eventId: 1, tagId: 8 }, // Leadership

  // Pitch Night (2) — Business, Leadership, Community
  { eventId: 2, tagId: 21 }, // Business
  { eventId: 2, tagId: 8 }, // Leadership
  { eventId: 2, tagId: 20 }, // Community

  // LinkedIn Workshop (3) — Business, Leadership
  { eventId: 3, tagId: 21 }, // Business
  { eventId: 3, tagId: 8 }, // Leadership

  // Cultural Fair (4) — Social, Culture, Community
  { eventId: 4, tagId: 15 }, // Social
  { eventId: 4, tagId: 12 }, // Culture
  { eventId: 4, tagId: 20 }, // Community

  // Kickoff Social (5) — Social, Community
  { eventId: 5, tagId: 15 }, // Social
  { eventId: 5, tagId: 20 }, // Community

  // Film Screening (6) — Social, Film, Arts, Culture
  { eventId: 6, tagId: 15 }, // Social
  { eventId: 6, tagId: 11 }, // Film
  { eventId: 6, tagId: 10 }, // Arts
  { eventId: 6, tagId: 12 }, // Culture

  // Engineering Challenge (7) — Science, Engineering, Technology, Competitive
  { eventId: 7, tagId: 14 }, // Science
  { eventId: 7, tagId: 13 }, // Engineering
  { eventId: 7, tagId: 3 }, // Technology
  { eventId: 7, tagId: 4 }, // Competitive

  // Docker Workshop (8) — Science, Technology, Programming
  { eventId: 8, tagId: 14 }, // Science
  { eventId: 8, tagId: 3 }, // Technology
  { eventId: 8, tagId: 18 }, // Programming

  // AI Ethics Lecture (9) — Science, Technology, Community
  { eventId: 9, tagId: 14 }, // Science
  { eventId: 9, tagId: 3 }, // Technology
  { eventId: 9, tagId: 20 }, // Community

  // Bluff Hike (10) — Sports, Outdoors, Nature
  { eventId: 10, tagId: 16 }, // Sports
  { eventId: 10, tagId: 6 }, // Outdoors
  { eventId: 10, tagId: 17 }, // Nature

  // Kayaking (11) — Sports, Outdoors, Nature, Social
  { eventId: 11, tagId: 16 }, // Sports
  { eventId: 11, tagId: 6 }, // Outdoors
  { eventId: 11, tagId: 17 }, // Nature
  { eventId: 11, tagId: 15 }, // Social

  // Chess Championship (12) — Sports, Strategy, Competitive
  { eventId: 12, tagId: 16 }, // Sports
  { eventId: 12, tagId: 1 }, // Strategy
  { eventId: 12, tagId: 4 }, // Competitive

  // HackSMU (13) — Technology, Programming, Engineering, Social
  { eventId: 13, tagId: 3 }, // Technology
  { eventId: 13, tagId: 18 }, // Programming
  { eventId: 13, tagId: 13 }, // Engineering
  { eventId: 13, tagId: 15 }, // Social

  // CUEL LoL (14) — Technology, Gaming, E-Sports, Competitive
  { eventId: 14, tagId: 3 }, // Technology
  { eventId: 14, tagId: 2 }, // Gaming
  { eventId: 14, tagId: 19 }, // E-Sports
  { eventId: 14, tagId: 4 }, // Competitive

  // Darkroom Workshop (15) — Technology, Photography, Arts
  { eventId: 15, tagId: 9 }, // Photography
  { eventId: 15, tagId: 10 }, // Arts
  { eventId: 15, tagId: 15 }, // Social
]);

// ─── Event Club Hosts ─────────────────────────────────────────────────────
await knex("EventClubHost").insert([
  { eventId: 1, clubId: 5 }, // Career Fair — CS Society co-hosts
  { eventId: 2, clubId: 5 }, // Pitch Night — CS Society
  { eventId: 4, clubId: 7 }, // Cultural Fair — ISA
  { eventId: 6, clubId: 9 }, // Film Screening — Film Society
  { eventId: 7, clubId: 8 }, // Engineering Challenge — Robotics Club
  { eventId: 8, clubId: 5 }, // Docker Workshop — CS Society
  { eventId: 10, clubId: 10 }, // Bluff Hike — Outdoor Adventure
  { eventId: 11, clubId: 10 }, // Kayaking — Outdoor Adventure
  { eventId: 12, clubId: 4 }, // Chess Championship — Chess Club
  { eventId: 13, clubId: 5 }, // HackSMU — CS Society
  { eventId: 14, clubId: 3 }, // CUEL LoL — LoL E-Sports Team
  { eventId: 15, clubId: 6 }, // Darkroom Workshop — Photography Club
]);

// ─── Event User Hosts ─────────────────────────────────────────────────────
// For events without a single club host, or where an individual leads
await knex("EventUserHost").insert([
  { eventId: 1, userId: 10, hostRole: "Lead Organizer" }, // Priya — Career Fair
  { eventId: 2, userId: 10, hostRole: "MC" }, // Priya — Pitch Night
  { eventId: 3, userId: 2, hostRole: "Workshop Facilitator" }, // Alex — LinkedIn Workshop
  { eventId: 5, userId: 17, hostRole: "Lead Organizer" }, // James — Kickoff Social
  { eventId: 6, userId: 27, hostRole: "Host & Moderator" }, // Andre — Film Screening
  { eventId: 7, userId: 7, hostRole: "Team Captain" }, // Daniel — Eng Challenge
  { eventId: 8, userId: 7, hostRole: "Workshop Lead" }, // Daniel — Docker Workshop
  { eventId: 9, userId: 10, hostRole: "Event Coordinator" }, // Priya — AI Lecture
  { eventId: 10, userId: 18, hostRole: "Trip Leader" }, // Hannah — Bluff Hike
  { eventId: 11, userId: 18, hostRole: "Trip Leader" }, // Hannah — Kayaking
  { eventId: 12, userId: 3, hostRole: "Tournament Director" }, // Ronen — Chess Champ
  { eventId: 13, userId: 10, hostRole: "Lead Organizer" }, // Priya — HackSMU
  { eventId: 14, userId: 6, hostRole: "Team Captain" }, // Sarah — CUEL LoL
  { eventId: 15, userId: 15, hostRole: "Workshop Lead" }, // Aiden — Darkroom
]);

// ─── Registered ───────────────────────────────────────────────────────────
await knex("Registered").insert([
  // ── Career & Networking Fair (1) ──
  { eventId: 1, userId: 1, status: "attending", registeredAt: "2024-10-01 09:00:00" },
  { eventId: 1, userId: 2, status: "attending", registeredAt: "2024-10-02 10:00:00" },
  { eventId: 1, userId: 3, status: "attending", registeredAt: "2024-10-02 11:00:00" },
  { eventId: 1, userId: 5, status: "attending", registeredAt: "2024-10-03 09:00:00" },
  { eventId: 1, userId: 12, status: "attending", registeredAt: "2024-10-04 14:00:00" },
  { eventId: 1, userId: 14, status: "attending", registeredAt: "2024-10-04 15:00:00" },
  { eventId: 1, userId: 21, status: "attending", registeredAt: "2024-10-05 10:00:00" },
  { eventId: 1, userId: 23, status: "registered", registeredAt: "2024-10-06 12:00:00" },
  { eventId: 1, userId: 24, status: "attending", registeredAt: "2024-10-07 09:00:00" },
  { eventId: 1, userId: 28, status: "registered", registeredAt: "2024-10-08 11:00:00" },

  // ── Entrepreneur Pitch Night (2) ──
  { eventId: 2, userId: 2, status: "attending", registeredAt: "2024-10-15 10:00:00" },
  { eventId: 2, userId: 10, status: "attending", registeredAt: "2024-10-15 10:05:00" },
  { eventId: 2, userId: 3, status: "attending", registeredAt: "2024-10-16 09:00:00" },
  { eventId: 2, userId: 7, status: "attending", registeredAt: "2024-10-16 10:00:00" },
  { eventId: 2, userId: 23, status: "attending", registeredAt: "2024-10-17 11:00:00" },
  { eventId: 2, userId: 5, status: "registered", registeredAt: "2024-10-18 09:00:00" },
  { eventId: 2, userId: 17, status: "attending", registeredAt: "2024-10-19 14:00:00" },

  // ── LinkedIn Workshop (3) ──
  { eventId: 3, userId: 1, status: "attending", registeredAt: "2024-10-10 09:00:00" },
  { eventId: 3, userId: 5, status: "attending", registeredAt: "2024-10-10 10:00:00" },
  { eventId: 3, userId: 11, status: "attending", registeredAt: "2024-10-11 09:00:00" },
  { eventId: 3, userId: 15, status: "attending", registeredAt: "2024-10-11 11:00:00" },
  { eventId: 3, userId: 20, status: "registered", registeredAt: "2024-10-12 09:00:00" },
  { eventId: 3, userId: 24, status: "attending", registeredAt: "2024-10-13 10:00:00" },

  // ── Cultural Fair (4) ──
  { eventId: 4, userId: 16, status: "attending", registeredAt: "2024-10-05 10:00:00" },
  { eventId: 4, userId: 17, status: "attending", registeredAt: "2024-10-05 10:00:00" },
  { eventId: 4, userId: 22, status: "attending", registeredAt: "2024-10-06 09:00:00" },
  { eventId: 4, userId: 24, status: "attending", registeredAt: "2024-10-06 11:00:00" },
  { eventId: 4, userId: 26, status: "attending", registeredAt: "2024-10-07 10:00:00" },
  { eventId: 4, userId: 28, status: "attending", registeredAt: "2024-10-08 09:00:00" },
  { eventId: 4, userId: 9, status: "attending", registeredAt: "2024-10-09 14:00:00" },
  { eventId: 4, userId: 4, status: "registered", registeredAt: "2024-10-10 10:00:00" },
  { eventId: 4, userId: 30, status: "attending", registeredAt: "2024-10-10 11:00:00" },

  // ── Fall Kickoff Social (5) ──
  { eventId: 5, userId: 1, status: "attending", registeredAt: "2024-09-07 10:00:00" },
  { eventId: 5, userId: 4, status: "attending", registeredAt: "2024-09-07 11:00:00" },
  { eventId: 5, userId: 6, status: "attending", registeredAt: "2024-09-08 09:00:00" },
  { eventId: 5, userId: 8, status: "attending", registeredAt: "2024-09-08 10:00:00" },
  { eventId: 5, userId: 11, status: "attending", registeredAt: "2024-09-09 09:00:00" },
  { eventId: 5, userId: 15, status: "attending", registeredAt: "2024-09-09 11:00:00" },
  { eventId: 5, userId: 17, status: "attending", registeredAt: "2024-09-10 10:00:00" },
  { eventId: 5, userId: 20, status: "attending", registeredAt: "2024-09-10 14:00:00" },
  { eventId: 5, userId: 22, status: "registered", registeredAt: "2024-09-11 09:00:00" },
  { eventId: 5, userId: 27, status: "attending", registeredAt: "2024-09-11 11:00:00" },

  // ── Film Screening: Seven Samurai (6) ──
  { eventId: 6, userId: 4, status: "attending", registeredAt: "2024-09-08 10:00:00" },
  { eventId: 6, userId: 11, status: "attending", registeredAt: "2024-09-09 09:00:00" },
  { eventId: 6, userId: 17, status: "attending", registeredAt: "2024-09-09 11:00:00" },
  { eventId: 6, userId: 20, status: "attending", registeredAt: "2024-09-10 09:00:00" },
  { eventId: 6, userId: 22, status: "attending", registeredAt: "2024-09-10 14:00:00" },
  { eventId: 6, userId: 27, status: "attending", registeredAt: "2024-09-11 10:00:00" },
  { eventId: 6, userId: 9, status: "registered", registeredAt: "2024-09-11 12:00:00" },

  // ── Atlantic Engineering Challenge (7) ──
  { eventId: 7, userId: 7, status: "attending", registeredAt: "2024-10-15 10:00:00" },
  { eventId: 7, userId: 12, status: "attending", registeredAt: "2024-10-15 10:00:00" },
  { eventId: 7, userId: 13, status: "attending", registeredAt: "2024-10-15 10:00:00" },
  { eventId: 7, userId: 14, status: "attending", registeredAt: "2024-10-15 10:00:00" },
  { eventId: 7, userId: 21, status: "attending", registeredAt: "2024-10-16 09:00:00" },
  { eventId: 7, userId: 10, status: "registered", registeredAt: "2024-10-16 11:00:00" },

  // ── Docker Workshop (8) ──
  { eventId: 8, userId: 3, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 8, userId: 7, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 8, userId: 10, status: "attending", registeredAt: "2024-10-02 09:00:00" },
  { eventId: 8, userId: 12, status: "attending", registeredAt: "2024-10-02 11:00:00" },
  { eventId: 8, userId: 13, status: "attending", registeredAt: "2024-10-03 10:00:00" },
  { eventId: 8, userId: 14, status: "attending", registeredAt: "2024-10-03 14:00:00" },
  { eventId: 8, userId: 25, status: "attending", registeredAt: "2024-10-04 09:00:00" },
  { eventId: 8, userId: 29, status: "registered", registeredAt: "2024-10-05 10:00:00" },

  // ── AI Ethics Lecture (9) ──
  { eventId: 9, userId: 2, status: "attending", registeredAt: "2024-10-18 10:00:00" },
  { eventId: 9, userId: 3, status: "attending", registeredAt: "2024-10-18 11:00:00" },
  { eventId: 9, userId: 5, status: "attending", registeredAt: "2024-10-19 09:00:00" },
  { eventId: 9, userId: 10, status: "attending", registeredAt: "2024-10-19 10:00:00" },
  { eventId: 9, userId: 12, status: "attending", registeredAt: "2024-10-20 09:00:00" },
  { eventId: 9, userId: 17, status: "attending", registeredAt: "2024-10-20 14:00:00" },
  { eventId: 9, userId: 23, status: "registered", registeredAt: "2024-10-21 10:00:00" },
  { eventId: 9, userId: 24, status: "attending", registeredAt: "2024-10-22 09:00:00" },

  // ── Bluff Wilderness Hike (10) ──
  { eventId: 10, userId: 18, status: "attending", registeredAt: "2024-09-10 09:00:00" },
  { eventId: 10, userId: 19, status: "attending", registeredAt: "2024-09-10 10:00:00" },
  { eventId: 10, userId: 20, status: "attending", registeredAt: "2024-09-11 09:00:00" },
  { eventId: 10, userId: 29, status: "attending", registeredAt: "2024-09-11 11:00:00" },
  { eventId: 10, userId: 6, status: "attending", registeredAt: "2024-09-12 10:00:00" },
  { eventId: 10, userId: 16, status: "attending", registeredAt: "2024-09-12 14:00:00" },
  { eventId: 10, userId: 30, status: "attending", registeredAt: "2024-09-13 09:00:00" },
  { eventId: 10, userId: 21, status: "registered", registeredAt: "2024-09-14 10:00:00" },

  // ── Kayaking Trip (11) ──
  { eventId: 11, userId: 18, status: "attending", registeredAt: "2024-09-20 10:00:00" },
  { eventId: 11, userId: 19, status: "attending", registeredAt: "2024-09-20 11:00:00" },
  { eventId: 11, userId: 20, status: "attending", registeredAt: "2024-09-21 09:00:00" },
  { eventId: 11, userId: 29, status: "attending", registeredAt: "2024-09-21 10:00:00" },
  { eventId: 11, userId: 6, status: "attending", registeredAt: "2024-09-22 09:00:00" },
  { eventId: 11, userId: 16, status: "attending", registeredAt: "2024-09-22 14:00:00" },
  { eventId: 11, userId: 30, status: "attending", registeredAt: "2024-09-23 10:00:00" },
  { eventId: 11, userId: 4, status: "registered", registeredAt: "2024-09-24 09:00:00" },

  // ── SMU Fall Chess Championship (12) ──
  { eventId: 12, userId: 1, status: "attending", registeredAt: "2024-10-05 10:00:00" },
  { eventId: 12, userId: 3, status: "attending", registeredAt: "2024-10-05 10:00:00" },
  { eventId: 12, userId: 5, status: "attending", registeredAt: "2024-10-06 09:00:00" },
  { eventId: 12, userId: 7, status: "attending", registeredAt: "2024-10-06 11:00:00" },
  { eventId: 12, userId: 11, status: "attending", registeredAt: "2024-10-07 10:00:00" },
  { eventId: 12, userId: 14, status: "attending", registeredAt: "2024-10-08 09:00:00" },
  { eventId: 12, userId: 23, status: "attending", registeredAt: "2024-10-08 14:00:00" },
  { eventId: 12, userId: 25, status: "registered", registeredAt: "2024-10-09 10:00:00" },

  // ── HackSMU 2024 (13) ──
  { eventId: 13, userId: 3, status: "attending", registeredAt: "2024-09-25 10:00:00" },
  { eventId: 13, userId: 7, status: "attending", registeredAt: "2024-09-25 11:00:00" },
  { eventId: 13, userId: 10, status: "attending", registeredAt: "2024-09-26 09:00:00" },
  { eventId: 13, userId: 12, status: "attending", registeredAt: "2024-09-26 10:00:00" },
  { eventId: 13, userId: 13, status: "attending", registeredAt: "2024-09-27 09:00:00" },
  { eventId: 13, userId: 14, status: "attending", registeredAt: "2024-09-27 11:00:00" },
  { eventId: 13, userId: 21, status: "attending", registeredAt: "2024-09-28 10:00:00" },
  { eventId: 13, userId: 25, status: "attending", registeredAt: "2024-09-28 14:00:00" },
  { eventId: 13, userId: 29, status: "registered", registeredAt: "2024-09-29 09:00:00" },
  { eventId: 13, userId: 4, status: "attending", registeredAt: "2024-09-30 10:00:00" },

  // ── CUEL LoL Qualifier (14) ──
  { eventId: 14, userId: 6, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 14, userId: 8, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 14, userId: 9, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 14, userId: 19, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 14, userId: 25, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 14, userId: 22, status: "attending", registeredAt: "2024-10-01 10:00:00" },
  { eventId: 14, userId: 1, status: "registered", registeredAt: "2024-10-02 09:00:00" },
  { eventId: 14, userId: 15, status: "registered", registeredAt: "2024-10-03 11:00:00" },

  // ── Darkroom Workshop (15) ──
  { eventId: 15, userId: 4, status: "attending", registeredAt: "2024-10-13 10:00:00" },
  { eventId: 15, userId: 15, status: "attending", registeredAt: "2024-10-13 10:00:00" },
  { eventId: 15, userId: 16, status: "attending", registeredAt: "2024-10-14 09:00:00" },
  { eventId: 15, userId: 22, status: "attending", registeredAt: "2024-10-14 11:00:00" },
  { eventId: 15, userId: 27, status: "attending", registeredAt: "2024-10-15 10:00:00" },
  { eventId: 15, userId: 8, status: "registered", registeredAt: "2024-10-15 14:00:00" },
  { eventId: 15, userId: 30, status: "attending", registeredAt: "2024-10-16 09:00:00" },
  { eventId: 15, userId: 11, status: "registered", registeredAt: "2024-10-16 12:00:00" },
]);
