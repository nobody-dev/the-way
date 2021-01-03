export default {
  characters: {
    warrior: {
      x: 0,
      y: 406,
    },
    rogue: {
      x: 486,
      y: 163,
    },
    mage: {
      x: 810,
      y: 1,
    },
  },
} as SpritesXY;

interface SpritesXY {
  [key: string]: Characters;
  characters: Characters;
}

interface Characters {
  [key: string]: DataObject;
}

interface DataObject {
  x: number;
  y: number;
}
