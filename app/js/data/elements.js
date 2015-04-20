export default {

  "default": {
    "steel": { "label": "Steel" },
    "silver": { "label": "Silver" },
    "cloth": { "label": "Cloth" },

    "iron": { "label": "Iron" },
    "copper": { "label": "Copper" },
    "leather": { "label": "Leather" },

    "cotton": { "label": "Cotton" },
    "bronze": { "label": "Bronze" },
    "fabric": { "label": "Fabric" },

    "stone": { "label": "Stone" },
    "silk": { "label": "Silk" },
    "mud": { "label": "Mud" },

    "wood": { "label": "Wood" },
    "sand": { "label": "Sand" },

    "dust": { "label": "Dust" },

    "cat": { "label": "Cat" },
    "boots": { "label": "Boots" },
    "straw": { "label": "Straw" },

    "tissue": { "label": "Tissue" },
    "candles": { "label": "Candles" },
    "brass": { "label": "Brass" },

    "ragdoll": { "label": "Ragdoll" },
    "pepper": { "label": "Pepper" },
    "lemon": { "label": "Lemon" },

    "banana": { "label": "Banana" },
    "log": { "label": "Log" },
    "apple": { "label": "Apple" },

    "pillow": { "label": "Pillow" },
    "beer-jug": { "label": "Beer Jug" },
    "pumpkin": { "label": "Pumpkin" },

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
    "gear": { "label": "Gear" },

    "boombox": { "label": "Boombox" },
    "bass": { "label": "Bass" },
    "crystal-gloves": { "label": "Crystal Gloves" },
    "rune": { "label": "Rune" },

    "stick": { "label": "Stick" },
    "tavern-sign": { "label": "Tavern Sign" },
    "magic": { "label": "Magic" },
    "courage": { "label": "Courage" }
  },

  "combinations": {

    "long-sword" : {
      "label": "Long Sword",
      "requirements": ["short-sword", "silver"]
    },
    "short-sword" : {
      "label": "Short Sword",
      "requirements": ["silver","silver"]
    },
    "leather-toy" : {
      "label": "Leather toy",
      "requirements": ["cloth", "cloth"]
    },

    "kings-sword" : {
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
      "requirements": ["soft-sword", "fabric"]
    },
    "light-sword" : {
      "label": "Light Sword",
      "requirements": ["cotton", "bronze"]
    },

    "soft-sword" : {
      "label": "Soft Sword",
      "requirements": ["cotton", "fabric"]
    },

    "stone-sword" : {
      "label": "Stone Sword",
      "requirements": ["rustic-sword", "stone"]
    },
    "rustic-sword" : {
      "label": "Rustic Sword",
      "requirements": ["stone", "silk"]
    },
    "sack" : {
      "label": "Sack",
      "requirements": ["mud", "silk"]
    },

    "wood-spear" : {
      "label": "Wood Spear",
      "requirements": ["wooden-sword", "wood"]
    },

    "wooden-sword" : {
      "label": "Wooden Sword",
      "requirements": ["stone", "wood"]
    },

    "sandstorm" : {
      "label": "Sandstorm",
      "requirements": ["sand", "sand"]
    },

    "double-wooden-sword" : {
      "label": "Double Wooden Sword",
      "requirements": ["earthen-sword", "wood"]
    },

    "earthen-sword" : {
      "label": "Earthen Sword",
      "requirements": ["mud", "wood"]
    },

    "dirt" : {
      "label": "Dirt",
      "requirements": ["mud", "dust"]
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
      "requirements": ["brass-sword", "candles"]
    },
    "brass-sword" : {
      "label": "Brass Sword",
      "requirements": ["tissue", "brass"]
    },
    "ashes" : {
      "label": "Ashes",
      "requirements": ["candles", "tissue"]
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

    "torch" : {
      "label": "Torch",
      "requirements": ["log", "fire"]
    },

    "fruit-salad" : {
      "label": "Fruit Salad",
      "requirements": ["banana", "apple"]
    },

    "fire" : {
      "label": "Fire",
      "requirements": ["log", "log"]
    },

    "beer-hammer" : {
      "label": "Beer Hammer",
      "requirements": ["wet-pillow", "pumpkin"]
    },

    "wet-pillow" : {
      "label": "Wet Pillow",
      "requirements": ["pillow", "beer-jug"]
    },

    "drowned-pumpkin" : {
      "label": "Drowned Pumpkin",
      "requirements": ["pumpkin", "beer-jug"]
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
      "requirements": ["battle-gnome", "gear"]
    },
    "battle-gnome" : {
      "label": "Battle Gnome",
      "requirements": ["gnome", "spoon"]
    },
    "clumsy-gnome" : {
      "label": "Clumsy Gnome",
      "requirements": ["gnome", "spear"]
    },

    "thriller" : {
      "label": "Thriller",
      "requirements": ["rhythm", "bass"]
    },

    "rhythm" : {
      "label": "Rhythm",
      "requirements": ["boombox", "crystal-gloves"]
    },

    "enchanted-gloves" : {
      "label": "Enchanted Gloves",
      "requirements": ["crystal-gloves", "rune"]
    },

    "shovel-knight" : {
      "label": "Shovel Knight",
      "requirements": ["shovel", "courage"]
    },

    "shovel" : {
      "label": "Shovel",
      "requirements": ["stick", "tavern-sign"]
    },

    "powerful-wizard" : {
      "label": "Powerful Wizard",
      "requirements": ["magic", "stick"]
    },
  }

}
