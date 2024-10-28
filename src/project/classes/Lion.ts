import Continents from "./Continents";
import Emoji from "./Emoji";
import { EnclosureId } from "./Enclosure";
import Mammal from "./Mammal";
import SpecialNeeds from "./SpecialNeeds";

class Lion extends Mammal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(Emoji.Lion, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export default Lion;
