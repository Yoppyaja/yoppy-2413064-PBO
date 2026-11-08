class Hero {

    ///atribut hero
    health: number = 100;
    speed: number = 100;
    magicdefense: number = 100;
    phyhicaldefense: number = 100;
    basicattack: number = 100;


    ///method jika hero mendapatkan healing
    getHealing(heal: number): number {
        this.health = this.health + heal;

        /// return sebagai pemberi hasil
        return this.health
    }

    getBooster(boost: number): number {
        this.speed = this.speed + boost;


        return this.speed
    }

    buyArmor(): number {
        this.magicdefense = this.magicdefense + 50;

        console.log("Hero membeli armor Magic Defense +50");

        return this.magicdefense
    }

}
///
const hero = new Hero() ;

console.log(hero.getBooster(100));

console.log("Magic Defense awal:", hero.magicdefense);

hero.buyArmor();

console.log("Magic Defense setelah membeli armor:", hero.magicdefense);