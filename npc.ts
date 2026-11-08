class Npc {
    ///properties
    name : string;
    speed : number;
    defense : number;
    attack : number;
    npcType : "walk" | "fly";

    /// parameter
    constructor(name: string, speed: number, defense: number, attack: number, npcType: "walk" | "fly") {
        this.name = name;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = npcType;    
    }
    walking() : number {
        this.speed = +2;
        return this.speed;
        }

    attacking() : number {
        this.attack = +2;
        return this.attack;
    }

    sprint() : number {
        this.speed = +4;
        return this.speed;
    }
    ultimateskill() : number {
        this.attack = +10;
        return this.attack;
    }
}

const harpy = new Npc ("itu", 10, 16, 30, "fly");
const goblin = new Npc ("alucard", 14, 10, 10, "walk");

console.log(goblin.attack)
console.log(harpy);
console.log(goblin);