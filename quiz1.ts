class Mario {

    hp: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentform: string;

    constructor(hp: number, speed: number, positionX: number, positionY: number,invincible: boolean, currentform: string) {
        this.hp = hp
        this.speed = speed
        this.positionX = positionX
        this.positionY = positionY
        this.invincible = invincible
        this.currentform = currentform
    }

    moveRight(move: number): string {
        this.positionX = this.positionX + move
        return `mario bergerak ke kanan sebanyak ${this.positionX} langkah`
    }

    moveLeft(move: number): string {
        this.positionX = this.positionX + move
        return `mario bergerak ke kiri sebanyak ${this.positionX} langkah`
    }

    superMushroom(): string {
        this.hp = this.hp
        this.currentform = "superMario"
        return `hp mario nambah ${this.hp}, mario menjadi ${this.currentform}`;
    }

    fireFlower(): string {
        this.hp = this.hp
        this.currentform = "fireMario"
        return `hp mario nambah ${this.hp}, dan mario menjadi ${this.currentform} dan dapat menembakkan bola api`
    }

    superStar(): string {
        this.invincible = true
        return `${this.currentform} mario menjadi kebal terehadap serangan`
    }
}

class superMario extends Mario {
    constructor(hp: number, speed: number, positionX: number, positionY: number, invincible: boolean, currentform: "superMario") {
        super(hp, speed, positionX, positionY, invincible, currentform)
    }

    terkenaSerang(): string {
        if (this.invincible) {
            return `Super Mario kebal`
        }else {
            this.hp -=1
            this.currentform = "mario"
            return`super mario kena serang, dan kembali menjadi mario`
        }
    }
}

class fireMario extends Mario {
    
    constructor(hp: number, speed: number, positionX: number, positionY: number, invincible: boolean, currentform: "fireMario") {
        super(hp, speed, positionX, positionY, invincible, currentform)
    }

    terkenaSerang(): string {
        if (this.invincible) {
            return `Fire Mario kebal`
        }else {
            this.hp -=1
            this.currentform = "mario"
            return `Fire Mario kena serang, dan kembali menjadi mario`
        }
    }
}

const mario = new Mario (1, 5, 0, 0, false, "mario")
const SuperMario = new superMario (2, 5, 0 ,0, false, "superMario")
const FireMario = new fireMario (2, 5, 0, 0, false, "fireMario")


console.log(mario)