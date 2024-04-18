// TODO: write your code here
//import sum from './basic';
import Team from './team';
import Character from './character';

const team = new Team();
const mayor = new Character("Майор", 'Zombie');
team.add(mayor);
const bowman = new Character("Человек", 'Bowman');
team.add(bowman);
const bowman2 = new Character("Человек", 'Bowman');
//team.add(bowman);
console.log(team.members.size);

//team.add(bowman2);
//console.log(team);

//team.addAll(bowman,bowman2);
//console.log(team);

//console.log(team.toArray());