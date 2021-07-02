import Team from '../app';

const player1 = {
  name: 1,
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};
const player2 = {
  name: 2,
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};
const player3 = {
  name: 3,
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};

const newTeam = new Team();

test('should add two players (player1 and player2)', () => {
  newTeam.add(player1);
  newTeam.add(player2);
  const equalData = [
    {
      name: 1, health: 50, level: 3, attack: 40, defence: 10,
    },
    {
      name: 2, health: 50, level: 3, attack: 40, defence: 10,
    },
  ];
  expect(newTeam.toArray()).toEqual(equalData);
});

test('should refuse to add doubled player1', () => {
  expect(() => newTeam.add(player1)).toThrow();
});

test('should attempt to add players from list', () => {
  newTeam.addAll(player1, player2, player3, player1);
  const equalData = [
    {
      name: 1, health: 50, level: 3, attack: 40, defence: 10,
    },
    {
      name: 2, health: 50, level: 3, attack: 40, defence: 10,
    },
    {
      name: 3, health: 50, level: 3, attack: 40, defence: 10,
    },
  ];
  expect(newTeam.toArray()).toEqual(equalData);
});
