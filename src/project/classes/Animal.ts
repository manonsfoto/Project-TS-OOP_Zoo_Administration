import Continents from "./Continents";
import Emoji from "./Emoji";
import { EnclosureId } from "./Enclosure";
import SpecialNeeds from "./SpecialNeeds";

class Animal {
  _emoji: Emoji;
  _name: string;
  _yearOfBirth: number;
  _continents: Continents;
  _specialNeeds: SpecialNeeds;
  _enclosureId: EnclosureId;

  constructor(
    emoji: Emoji,
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
