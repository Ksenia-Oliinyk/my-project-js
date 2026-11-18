'use strict';

/*
 * Електромобіль — це той самий транспорт: у нього є марка й максимальна
 * швидкість. Але є й своє, чого немає у звичайного транспорту, — запас
 * ходу на одному заряді.
 *
 * 1. Клас Vehicle уже готовий — не змінюй його.
 * 2. Оголоси клас ElectricCar, який успадковує Vehicle через extends.
 * 3. Додай йому конструктор: виклич super(params), а тоді запиши
 *    у властивість batteryRange значення з params.range.
 * 4. Додай метод getRange(), який повертає рядок у форматі
 *    "марка: N km on a charge" — наприклад "Tesla Model 3: 500 km on a charge".
 */

class Vehicle {
  constructor(params) {
    this.brand = params.brand;
    this.maxSpeed = params.speed;
  }

  getInfo() {
    return `${this.brand}, up to ${this.maxSpeed} km/h`;
  }
}

class ElectricCar extends Vehicle {
  constructor(params) {
    super(params);
    this.batteryRange = params.range;
  }

  getRange() {
    return `${this.brand}: ${this.batteryRange} km on a charge`;
  }
}

const tesla = new ElectricCar({
  brand: 'Tesla Model 3',
  speed: 225,
  range: 500,
});

console.log(tesla.getInfo()); // Tesla Model 3, up to 225 km/h
console.log(tesla.getRange()); // Tesla Model 3: 500 km on a charge
