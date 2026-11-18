// Quests and characters for The Chasm. Add a quest by adding one line.
// type is one of: "archon", "world", "story", "hangout"   (how is optional)
window.WIKI_DATA = window.WIKI_DATA || {};
window.WIKI_DATA["the-chasm"] = {
  quests: [
    { type: "archon", name: "Chapter II, Act IV: Requiem of the Echoing Depths", how: "Story quest set in The Chasm: Underground Mines. Finish Surreptitious Seven-Star Seal Sundering to go underground." },
    { type: "world", name: "The Chasm Delvers", how: "Start with The Chasm Charters from Lan, beside the Liyue Adventurers' Guild. It is needed before you can enter the mines." },
    { type: "world", name: "Surreptitious Seven-Star Seal Sundering", how: "Finish it to get access to the Underground Mines." },
    { type: "world", name: "Chasm Spelunkers", how: "One of the quests to finish before the Archon quest continues." },
    { type: "world", name: "The Heavenly Stone's Debris", how: "One of the quests to finish before the Archon quest continues." },
    { type: "world", name: "Stolen by the Rightful Owner", how: "Added in version 2.6." },
    { type: "world", name: "Undetected Infiltration", how: "Added in version 2.6." },
    { type: "world", name: "A Cliff-Side Hero's Past", how: "Added in version 2.6." },
    { type: "world", name: "The Millennial Mountains", how: "Added in version 2.6." },
    { type: "world", name: "Says He Who Seeks Stone", how: "Added in version 2.6." },
    { type: "world", name: "Perils in the Dark", how: "Quest in The Chasm. Finish it to unlock Wherefore Did the Spiritstone Descend?" },
    { type: "world", name: "Wherefore Did the Spiritstone Descend?", how: "Finish Perils in the Dark first." }
  ],
  // Characters. The picture is images/characters/<name>.png. A missing picture shows a round placeholder.
  characters: [
    { name: "jinwu", displayName: "Jinwu" },
    { name: "yuehui", displayName: "Yuehui" },
    { name: "lan", displayName: "Lan" }
  ]
};
