import { Unit } from '../Units/Unit';

export default function doAttack(mover: Unit, target: Unit) {
  target.curHp -= mover.attackDamage;
}
