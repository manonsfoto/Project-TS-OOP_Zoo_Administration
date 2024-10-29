import Continents from "../enums/Continents";
import EnclosureId from "../enums/EnclosureId";
import SpecialNeeds from "../enums/SpecialNeeds";

class Animal {
  _emoji: string;
  _name: string;
  _yearOfBirth: number;
  _continents: Continents;
  _specialNeeds: SpecialNeeds;
  _enclosureId: EnclosureId;

  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    this._emoji = emoji;
    this._name = name;
    this._yearOfBirth = yearOfBirth;
    this._continents = continents;
    this._specialNeeds = specialNeeds;
    this._enclosureId = enclosureId;
  }

  calcAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this._yearOfBirth;
  }
}

export default Animal;

// ===================================
export class Bird extends Animal {
  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Fish extends Animal {
  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Mammal extends Animal {
  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Reptile extends Animal {
  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}
