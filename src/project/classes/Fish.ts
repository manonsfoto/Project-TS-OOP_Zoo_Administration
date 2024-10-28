import Animal from "./Animal";
import Continents from "./Continents";
import Emoji from "./Emoji";
import { EnclosureId } from "./Enclosure";
import SpecialNeeds from "./SpecialNeeds";

class Fish extends Animal {
  constructor(
    emoji: Emoji,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export default Fish;
