// Quests and characters for Sea of Bygone Eras. Add a quest by adding one line.
// type is one of: "archon", "world", "story", "hangout"   (how is optional)
window.WIKI_DATA = window.WIKI_DATA || {};
window.WIKI_DATA["sea-of-bygone-eras"] = {
  quests: [
    { type: "world", name: "Canticles of Harmony", how: "Quest chain that opens the Sea of Bygone Eras. Head to Petrichor Island in the Nostoi region." },
    { type: "world", name: "Petrichorror Dream", how: "Part of Canticles of Harmony. It unlocks the underwater area." },
    { type: "world", name: "The Last Day of Remuria", how: "Third part of Canticles of Harmony. You explore the Sea of Bygone Eras during it." }
  ],
  // Characters. The picture is images/characters/<name>.png. A missing picture shows a round placeholder.
  characters: [
    { name: "scylla", displayName: "Scylla" }
  ]
};
