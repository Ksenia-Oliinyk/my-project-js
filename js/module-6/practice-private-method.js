'use strict';

/*
 * У SmileCare діє знижка за лояльність: чим більше візитів,
 * тим більша знижка на лікування. Саме правило знижки —
 * внутрішня політика клініки, пацієнту його знати не треба:
 * він бачить лише кінцеву вартість.
 *
 * 1. Додай приватний метод #getLoyaltyDiscount(), який повертає знижку
 *    за кількістю візитів: 5 або більше — 0.2; 3 або більше — 0.1;
 *    інакше — 0.
 * 2. Додай публічний метод getFinalCost(), який повертає вартість
 *    лікування за відрахуванням знижки від #getLoyaltyDiscount().
 * 3. Виведи кінцеву вартість firstPatient (2 візити, знижки немає).
 * 4. Виведи кінцеву вартість secondPatient (5 візитів, знижка діє).
 */

class Patient {
  #treatmentCost;

  constructor(params) {
    this.name = params.patient;
    this.visitsCount = params.visits;
    this.#treatmentCost = params.cost;
  }

  #getLoyaltyDiscount() {
    if (this.visitsCount >= 5) {
      return 0.2;
    }

    if (this.visitsCount >= 3) {
      return 0.1;
    }

    return 0;
  }

  getFinalCost() {
    const discount = this.#getLoyaltyDiscount();
    return this.#treatmentCost - this.#treatmentCost * discount;
  }
}

const firstPatient = new Patient({
  patient: 'Alex',
  visits: 2,
  cost: 4000,
});

const secondPatient = new Patient({
  patient: 'Nora',
  visits: 5,
  cost: 4000,
});

console.log(firstPatient.getFinalCost());
console.log(secondPatient.getFinalCost());
