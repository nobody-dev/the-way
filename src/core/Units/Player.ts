import { Unit } from './Unit';

export interface Player extends Unit {
  levelUp(): void;
}

export class Player extends Unit {
  constructor(
    name: string,
    level: number = 1,
    maxHp: number,
    curHp: number = maxHp,
    maxEnergy: number,
    curEnergy: number = maxEnergy,
    maxActionPoints: number,
    curActionPoints: number = maxActionPoints,
  ) {
    super(name, level, maxHp, curHp, maxEnergy, curEnergy, maxActionPoints, curActionPoints);
  }

  levelUp(): void {
    this.level += 1;
  }
}
