// Quests and characters for Ancient Sacred Mountain. Add a quest by adding one line.
// type is one of: "archon", "world", "story", "hangout"   (how is optional)
window.WIKI_DATA = window.WIKI_DATA || {};
window.WIKI_DATA["ancient-sacred-mountain"] = {
  quests: [
    { type: "world", name: "Investigator of Ancient Ruins", how: "Finish it to unlock the Skyfire Circlet, which leads into the Ancient Sacred Mountain." },
    { type: "world", name: "The Way Into the Mountain", how: "The first quest for unlocking the Ancient Sacred Mountain." },
    { type: "world", name: "Nahuatzin's Leap", how: "Dive into the Spiritway to start it. You need it to enter the mountain." },
    { type: "world", name: "Path to the Flaming Peaks", how: "Quest chain. Finish it, together with The Way Into the Mountain, to reach the Sacred City of Tollan." },
    { type: "world", name: "Chronicler of the Crumbling City", how: "Quest chain that continues once you are inside the mountain." },
    { type: "world", name: "The Frozen, Rekindling Land", how: "First quest of Chronicler of the Crumbling City. Needs Nahuatzin's Leap and the Path to the Flaming Peaks chain." },
    { type: "world", name: "The Forsaken Sea of Wisdom", how: "Finish it, with The Sealed Site of Sacrifice, before you can activate the Celestial Axis." },
    { type: "world", name: "The Sealed Site of Sacrifice", how: "Finish it, with The Forsaken Sea of Wisdom, before you can activate the Celestial Axis." },
    { type: "world", name: "In Search of a Hidden Heart", how: "Quest with sub-quests." },
    { type: "world", name: "Where Once There Were Arms Aplenty", how: "Sub-quest of In Search of a Hidden Heart." },
    { type: "world", name: "The End of the Road", how: "Sub-quest of In Search of a Hidden Heart." },
    { type: "world", name: "As the Burning Sun Sears Shadows", how: "Quest set in the Sacred City of Tollan." },
    { type: "world", name: "Once, the Sacred Seat of Judgement", how: "Added in version 5.5." },
    { type: "world", name: "Is \"Intensity\" Really the Key?", how: "Defeat the Tenebrous Mimiflora to complete it." }
  ],
  // Characters. The picture is images/characters/<name>.png. A missing picture shows a round placeholder.
  characters: [
    { name: "secret-source-servant", displayName: "Secret Source Servant" }
  ]
};
