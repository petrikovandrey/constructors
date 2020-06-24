// import { getHits, sorter } from "../src/index.js";
import Character from "../src/index.js";

test("new Character", () => {
    const result = new Character("Тор","Daemon");
    const expected = [
        { key: "name", value: "Тор" }, // порядок взят из массива с ключами
        { key: "type", value: "Daemon" }, // порядок взят из массива с ключами
    ]
    expect(result).toEqual(expected);
})
test("error name Character", () => {
    const result = new Character("re","Daemon");
    const expected = "Имя должно быть от 2 до 10 символов;
    expect(result).toBe(expected);
})
test("error type Character", () => {
    const result = new Character("Tor","Мечник");
    const expected = "Тип персонажа не найден";
    expect(result).toBe(expected);
})
// test("sorter", () => {
//     const result = sorter([
//         { key: "name", value: "мечник" }, // порядок взят из массива с ключами
//         { key: "level", value: 2 }, // порядок взят из массива с ключами
//         { key: "attack", value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//         { key: "defence", value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//         { key: "health", value: 10 } // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
//     ]);
//     const expected = [
//         { key: "attack", value: 80 }, 
//         { key: "defence", value: 40 }, 
//         { key: "health", value: 10 },
//         { key: "level", value: 2 }, 
//         { key: "name", value: "мечник" }
//     ];
//     expect(result).toEqual(expected);
// })

// test("getHits", () => {
//     let hits = {
//         name: 'Лучник',
//         type: 'Bowman',
//         health: 50,
//         level: 3,
//         attack: 40,
//         defence: 10,
//         special: [
//             {
//                 id: 8,
//                 name: 'Двойной выстрел',
//                 icon: 'http://...',
//                 description: 'Двойной выстрел наносит двойной урон'
//             },
//             {
//                 id: 9,
//                 name: 'Нокаутирующий удар',
//                 icon: 'http://...'
//                 // <- обратите внимание, описание "засекречено"
//             }
//         ]
//     };
//     const result = getHits(hits);
//     const expected = [[
//         8,
//         'Двойной выстрел',
//         'http://...',
//         'Двойной выстрел наносит двойной урон'],
//     [
//         9,
//         'Нокаутирующий удар',
//         'http://...',
//         'Описание недоступно'
//     ]]
//     expect(result).toEqual(expected);
// })