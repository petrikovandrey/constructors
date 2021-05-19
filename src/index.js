//task 1
export default function Character(name, type) {
    let typeCharacter = [
        "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
    ];
    if (name.length < 2 || name.length > 10) {
        throw new Error("Имя должно быть от 2 до 10 символов");
    }
    if (!typeCharacter.includes(type)) {
        throw new Error("Тип персонажа не найден");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.Bowman = "25/25";
    this.Swordsman = "40/10";
    this.Magician = "10/40";
    this.Undead = "25/25";
    this.Zombie = "40/10";
    this.Daemon = "10/40";
}
// task2
export default function Character(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
}

Character.prototype = {
    damage: function(points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      }
    }
  }
  
