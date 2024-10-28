import Continents from "./Continents";
import Emoji from "./Emoji";
import { EnclosureId } from "./Enclosure";
import Reptile from "./Reptile";
import SpecialNeeds from "./SpecialNeeds";

class Crocodile extends Reptile {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(
      Emoji.Crocodile,
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

export default Crocodile;
