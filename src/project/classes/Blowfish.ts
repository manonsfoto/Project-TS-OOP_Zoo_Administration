import Continents from "./Continents";
import Emoji from "./Emoji";
import { EnclosureId } from "./Enclosure";
import Fish from "./Fish";
import SpecialNeeds from "./SpecialNeeds";

class Blowfish extends Fish {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super(
      Emoji.Blowfish,
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

export default Blowfish;
