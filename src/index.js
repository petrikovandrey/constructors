//task 1

export default function Character(name, type) {
    let typeCharacter = [
        "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
    ];
    if (name.lenght < 1 || name.lenght > 11) {
        throw new Error("Имя должно быть от 2 до 10 символов");
    }
    if (!typeCharacter.includes(type)) {
        throw new Error("Тип персонажа не найден");
    }
    this.name = name;
    this.type = type;
    this.health= 100;
    this.level= 1;
    this.Bowman= "25/25";
    this.Swordsman= "40/10";
    this.Magician= "10/40";
    this.Undead= "25/25";
    this.Zombie= "40/10";
    this.Daemon= "10/40";
}



export function sorter(list) {

}
