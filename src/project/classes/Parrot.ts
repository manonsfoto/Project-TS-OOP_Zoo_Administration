import Continents from "./Continents";
import { EnclosureId } from "./Enclosure";
import Bird from "./Bird";
import SpecialNeeds from "./SpecialNeeds";
import Emoji from "./Emoji";

class Parrot extends Bird {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(
      Emoji.Parrot,
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

export default Parrot;
