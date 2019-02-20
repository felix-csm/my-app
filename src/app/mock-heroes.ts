import { Hero } from './hero';

const powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
// exporting a named value
export const HEROES: Hero[] = [
  { id: 12, name: 'Narco', power: powers[2]},
  { id: 12, name: 'Narco', power: powers[0]},
  { id: 13, name: 'Bombasto' , power: powers[1]},
  { id: 14, name: 'Celeritas', power: powers[3] },
  { id: 15, name: 'Magneta', power: powers[3] },
  { id: 16, name: 'RubberMan', power: powers[1] },
  { id: 17, name: 'Dynama', power: powers[0] },
  { id: 18, name: 'Dr IQ', power: powers[2] },
  { id: 19, name: 'Magma', power: powers[1] },
  { id: 20, name: 'Tornado', power: powers[1] }
];
