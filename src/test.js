// import { getHits, sorter } from "../src/index.js";
import Character from "../src/index.js";

test("new Character", () => {
    const result = new Character("Тор","Daemon");
    const expected =
        {"Bowman": "25/25", "Daemon": "10/40", "Magician": "10/40", "Swordsman": "40/10", "Undead": "25/25", "Zombie": "40/10", "health": 100, "level": 1, "name": "Тор", "type": "Daemon"};
    expect(result).toEqual(expected);
})
test("error name Character", () => {
    const result = new Character("r","Daemon");
    const expected = "Имя должно быть от 2 до 10 символов";
    expect(result).toThrow(expected);
})
test("error type Character", () => {
    const result = new Character("Tor","Мечник");
    const expected = "Тип персонажа не найден";
    expect(result).toThrow(expected);
})
test("damage ", () => {
    const person = new Character("Тор","Daemon");
    person.damage(99);
    const result = person.health;
    const expected = 1;
    expect(result).toBe(expected);
})
