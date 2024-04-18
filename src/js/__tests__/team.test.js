import Team from '../team';
import Character from '../character';

test('add user success', () => {
  const team = new Team();
  const mayor = new Character('Майор', 'Zombie');
  team.add(mayor); // Майор добавлен в список
  expect(team).toEqual({"members": Set {{"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "Майор", "type": "Zombie"}}});
});

// test('add user fail', () => {
//   const team = new Team();
//   const mayor = new Character('Майор', 'Zombie');
//   team.add(mayor); // Майор добавлен в список
//   team.add(mayor); // Майор уже есть в списке
//   let result = team.length;// Майор добавлен в список
//   expect(result).toEqual(1);
// });
