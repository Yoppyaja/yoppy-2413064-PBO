// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

class Mmario {

    hp: number = 1;
    speed: number = 5;
    currentForm: "mario" | "superMario" |  "fireMario" = "mario"
    invincible: boolean = false;
    positionX: number = 0;
    positionY: number = 0;

    ///Method
    moveRight(): string {
        this.positionX += this.speed;
        return `Mario ke kanan sebanyak ${this.positionX} langkah`
    }

    moveLeft(): string {
        this.positionX -= this.speed;
        return `Mario ke kiri sebanyak ${this.positionX} langkah`;
    }

    superStar(): void {
        this.invincible = true
            console.log("Mario menjadi superstar")
    }

    diSerang(): void {
        if (this.invincible) {
            console.log("Mario Kebal")
        }else {
            this.hp -=1
            this.currentForm = "mario"
            console.log(`mario kena serang, hp mario berkurang menjadi ${this.hp} dan kembali menjadi ${this.currentForm}`)
        }
        
    }
}

class superMmario extends Mmario {
    superMushroom(): void {
        this.currentForm = "superMario"
        this.hp +=1
        console.log(`Mario menjadi Super Mario HP ${this.hp}`)
    }
    constructor() {
        super()
    }
}
class fireMmario extends Mmario {
    fireFlower(): void {
        this.currentForm = "fireMario"
        this.hp +=1
        console.log(`Mario menjadi Fire Mario HP ${this.hp}, dan dapat menembakkan bola api`)
    }
    constructor() {
        super()
    }
}

const Daniel = new Mmario ();
const Lili = new superMmario();
const Udin = new fireMmario();


///1
console.log(Daniel.moveLeft())
Daniel.superStar()
Lili.superMushroom()
Udin.fireFlower();
Lili.diSerang();
