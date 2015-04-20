export default {

  "default": {
    "steel": { "label": "Steel" },
    "iron": { "label": "Iron" },
    "leather": { "label": "Leather" },
    "copper": { "label": "Copper" },
    "cotton": { "label": "Cotton" },
    "stone": { "label": "Stone" },
    "mud": { "label": "Mud" },

    "cat": { "label": "Cat" },
    "boots": { "label": "Boots" },
    "straw": { "label": "Straw" },
    "candles": { "label": "Candles" },
    "ragdoll": { "label": "Ragdoll" },
    "pepper": { "label": "Pepper" },
    "lemon": { "label": "Lemon" },

    "carrots": { "label": "Carrots" },
    "vodka": { "label": "Vodka" },
    "chocolate": { "label": "Chocolate" },
    "powder": { "label": "Powder" },
    "potion": { "label": "Potion" },
    "perfume": { "label": "Perfume" },
    "cigarrete": { "label": "Cigarrete" },
    "salt": { "label": "Salt" },
    "gnome": { "label": "Gnome" },
    "spoon": { "label": "Spoon" },
    "spear": { "label": "Spear" },
    "cape": { "label": "Cape" }
  },

  "combinations": {

    "long-sword" : {
      "label": "Long Sword",
      "requirements": ["short-sword", "iron"]
    },
    "short-sword" : {
      "label": "Short Sword",
      "requirements": ["iron","iron"]
    },
    "leather-toy" : {
      "label": "Leather toy",
      "requirements": ["leather", "leather"]
    },

    "king's-sword" : {
      "label": "King's Sword",
      "requirements": ["leathered-sword", "iron"]
    },
    "leathered-sword" : {
      "label": "Leathered sword",
      "requirements": ["leather", "iron"]
    },
    "copper-sword" : {
      "label": "Copper Sword",
      "requirements": ["copper", "copper"]
    },
    "fiber-sword" : {
      "label": "Fiber Sword",
      "requirements": ["soft-sword", "leather"]
    },
    "soft-sword " : {
      "label": "Soft Sword",
      "requirements": ["cotton", "leather"]
    },
    "stone-sword" : {
      "label": "Stone Sword",
      "requirements": ["rustic-sword", "stone"]
    },
    "rustic-sword" : {
      "label": "Rustic Sword",
      "requirements": ["stone", "cotton"]
    },
    "sack" : {
      "label": "Sack",
      "requirements": ["mud", "cotton"]
    },
    "battle-cat" : {
      "label": "Battle Cat",
      "requirements": ["pussy-cat", "straw"]
    },
    "puss-in-boots" : {
      "label": "Puss in Boots",
      "requirements": ["cat", "boots"]
    },
    "pussy-cat" : {
      "label": "Pussy Cat",
      "requirements": ["cat", "straw"]
    },
    "fire-sword" : {
      "label": "Fire Sword",
      "requirements": ["light-sword", "candles"]
    },
    "light-sword" : {
      "label": "Light Sword",
      "requirements": ["cotton", "copper"]
    },
    "ashes" : {
      "label": "Ashes",
      "requirements": ["candles", "cotton"]
    },
    "super-hot-doll" : {
      "label": "Super hot doll",
      "requirements": ["hot-doll", "pepper"]
    },
    "hot-doll" : {
      "label": "Hot doll",
      "requirements": ["ragdoll", "pepper"]
    },
    "seasoning" : {
      "label": "Seasoning",
      "requirements": ["lemon", "pepper"]
    },
    "explosive-vodka-carrots" : {
      "label": "Explosive Vodka Carrots",
      "requirements": ["vodka-carrots", "powder"]
    },
    "vodka-carrots" : {
      "label": "Vodka Carrots",
      "requirements": ["vodka", "carrots"]
    },
    "chocolate-carrots" : {
      "label": "Chocolate Carrots",
      "requirements": ["carrots", "chocolate"]
    },
    "ogre-potion" : {
      "label": "Ogre potion",
      "requirements": ["smelly-potion", "salt"]
    },
    "smelly-potion" : {
      "label": "Smelly Potion",
      "requirements": ["potion", "cigarrete"]
    },
    "beauty-potion" : {
      "label": "Beauty Potion",
      "requirements": ["potion", "perfume"]
    },
    "super-battle-gnome" : {
      "label": "Super Battle Gnome",
      "requirements": ["battle-gnome", "cape"]
    },
    "battle-gnome" : {
      "label": "Battle Gnome",
      "requirements": ["gnome", "spoon"]
    },
    "clumsy-gnome" : {
      "label": "Clumsy Gnome",
      "requirements": ["gnome", "spear"]
    },
  }

}
