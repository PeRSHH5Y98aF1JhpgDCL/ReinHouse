let data = {
    rooms: [
        { name: "empty room", weight: 100, vreq: () => game.NL },
        { name: "monster room", weight: 50, vreq: () => false },
        { name: "money room", weight: 10, vreq: () => game.nightmareLayer.gt(1) },
        { name: "potion lab", weight: 5, vreq: () => game.nightmareLayer.gt(1) },
        { name: "stairwell", weight: 0.5, vreq: () => game.nightmareLayer.gt(2) },
        { name: "bedroom", weight: 0.1, vreq: () => game.nightmareLayer.gt(3) },
        { name: "kitchen", weight: 0.5, vreq: () => game.nightmareLayer.gt(4) },
        { name: "chocolate fountain room", weight: 0.1, vreq: () => game.nightmareLayer.gt(4) },
        { name: "lab", weight: 0.05, vreq: () => game.nightmareLayer.gt(5) },
        { name: "fusion chamber", weight: 0.1, vreq: () => game.nightmareLayer.gt(6) },
        { name: "control room", weight: 0.01, vreq: () => game.nightmareLayer.gt(9) }
    ],
    defaultWeights: [
        100, 50, 10, 5, 0.5, 0.1, 0.5, 0.1, 0.05, 0.1, 0.01
    ],
    moneyTreasures: [
        { name: "coin", weight: 20, gold: [1, 1] },
        { name: "pile of coins", weight: 40, gold: [5, 10] },
        { name: "piggy bank", weight: 15, gold: [5, 50] },
        { name: "safe", weight: 5, gold: [0, 100] },
        { name: "treasure chest", weight: 1, gold: [100, 500] },
        { name: "dragon's hoard", weight: 0.1, gold: [5000, 10000] }
    ],
    potions: [
        { name: "small health potion", weight: 100, type: "heal", potency: 10 },
        { name: "medium health potion", weight: 50, type: "heal", potency: 60 },
        { name: "large health potion", weight: 20, type: "heal", potency: 300 },
        { name: "super health potion", weight: 5, type: "heal", potency: 1000 }
    ],
    monsters: [
        { name: "blob", weight: 100 },
        { name: "skeleton", weight: 10 },
        { name: "slime", weight: 50 },
        { name: "SCP999", weight: 1 },
        { name: "oboe player", weight: 5 },
        { name: "blob of flesh", weight: 10 },
        { name: "knight", weight: 1 },
        { name: "spongebob", weight: 3 },
        { name: "stick figure", weight: 1 },
        { name: "Rick Astley", weight: 1 },
        { name: "magdonal poster", weight: 2 },
        { name: "Satan", weight: 0.1 }
    ],
    monsterStats: {
        blob: { hp: 10, dmg: 1, gold: [5, 15] },
        skeleton: { hp: 40, dmg: 5, gold: [60,80] },
        slime: { hp: 15, dmg: 2, gold: [15, 20] },
        SCP999: { hp: 100, dmg: 0, gold: [100, 500] },
        "oboe player": { hp: 5, dmg: 10, gold: [50, 100] },
        "blob of flesh": { hp: 1, dmg: 15, gold: [10, 60] },
        knight: { hp: 200, dmg: 10, gold: [1000, 2000] },
        spongebob: { hp: 100, dmg: 0, gold: [100, 500] },
        "stick figure": { hp: 10, dmg: 30, gold: [0, 1000] },
        "Rick Astley": { hp: 5, dmg: 0, gold: [1600, 2000] },
        "magdonal poster": { hp: 150, dmg: 10, gold: [50, 2000] },
        "Satan": { hp: 500, dmg: 100, gold: [10000, 25000] }
    }
}