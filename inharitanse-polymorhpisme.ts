class PublicEnemy {
    hp: number;
    attack: number;
    defense: number;
    speed: number;

    constructor(hp: number, attack: number, defense: number, speed: number) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    basicAttack(): number {
        return this.attack;
    }

}

class Lord extends PublicEnemy {
    constructor () {
        super(100,60,60,60)
    }

    areaEffect(): void {
        this.attack

        console.log("hero terkena area effect dari lord")
    }
}
class Turtle extends PublicEnemy{
    constructor() {
        super(50,10,10,30)
    }
    walking(): number{
        this.speed = this.speed +1

        console.log("turtle mengejar")
        return this.speed
    }
}
class BlueWolf {}
class RedDragon {}

const lord = new Lord()
const turtle = new Turtle()
console.log(lord)

console.log(turtle)

turtle.walking()
lord.areaEffect()