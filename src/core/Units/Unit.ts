export interface Unit {
  name: string;
  level: number;
  curHp: number;
  maxEnergy: number;
  curEnergy: number;
  maxActionPoints: number;
  curActionPoints: number;
}

export class Unit {
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
    this.name = name;
    this.level = level;
    this.curHp = curHp;
    this.maxEnergy = maxEnergy;
    this.curEnergy = curEnergy;
    this.maxActionPoints = maxActionPoints;
    this.curActionPoints = curActionPoints;
  }

  get isAlive(): boolean {
    return this.curHp > 0;
  }

  get maxHp(): number {
    return this.curHp * this.level;
  }

  get attackDamage(): number {
    return 10 * this.level;
  }
}
