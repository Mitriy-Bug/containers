import Team from '../team';
import Character from '../character';

test('add user success', () => {
  function success() {
    const team = new Team();
    const mayor = new Character('Майор', 'Zombie');
    team.add(mayor); // Майор добавлен в список
    return team.members.size; // 1
    //return 'true';
  }
  expect(success()).toEqual(1);
});
test('add user fail', () => {
  function fail() {
    const team = new Team();
    const mayor = new Character('Майор', 'Zombie');
    team.add(mayor); // Майор добавлен в список
    team.add(mayor); // Майор уже есть в списке
  }
  expect(fail).toThrow(Error);
});

test('add all user success', () => {
  function success() {
    const team = new Team();
    const mayor = new Character('Майор', 'Zombie');
    const bowman = new Character("Человек", 'Bowman');
    team.addAll(mayor,bowman); // Майор добавлен в список
    return team.members.size; // 1
    //return 'true';
  }
  expect(success()).toEqual(2);
});

test('return array', () => {
  function array() {
    const team = new Team();
    const mayor = new Character('Майор', 'Zombie');
    team.add(mayor); // Майор добавлен в список
    return team.toArray(); // 1
    //return 'true';
  }
  expect(array()).toEqual([{"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "Майор", "type": "Zombie"}]);
});
