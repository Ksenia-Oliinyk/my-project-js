'use strict';

/*
 * Вартість лікування можна переписати ззовні будь-яким значенням.
 * У SmileCare так не можна: вартість лише читають, а змінюють
 * тільки додаванням нової процедури. Сховаємо її від зовнішнього коду.
 *
 * 1. Зроби властивість treatmentCost приватною: #treatmentCost.
 * 2. Додай метод getCost(), який повертає вартість лікування.
 * 3. Додай метод addCharge(amount), який додає amount до вартості.
 * 4. Виведи вартість firstPatient.
 * 5. Додай firstPatient нову процедуру на 1500 і знову виведи вартість.
 * 6. Наприкінці виведи вартість secondPatient.
 */

class Patient {
  #treatmentCost;

  constructor(params) {
    this.name = params.patient;
    this.visitsCount = params.visits;
    this.#treatmentCost = params.cost;
  }

  getCost() {
    return this.#treatmentCost;
  }

  addCharge(amount) {
    this.#treatmentCost += amount;
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
  cost: 6000,
});

console.log(firstPatient);
console.log(firstPatient.getCost());
firstPatient.addCharge(1500);
console.log(firstPatient.getCost());

console.log(secondPatient);
console.log(secondPatient.getCost());
