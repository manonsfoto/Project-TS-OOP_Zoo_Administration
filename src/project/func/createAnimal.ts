import {
  Bear,
  Clownfish,
  Crocodile,
  Eagle,
  Lion,
  Lizard,
  Monkey,
  Parrot,
  Pufferfish,
  Shark,
  Swan,
  Turtle,
} from "../classes/Animal_classes";
import Continents from "../enums/Continents";
import EnclosureId from "../enums/EnclosureId";
import SpecialNeeds from "../enums/SpecialNeeds";

function createAnimal(
  type: string,
  name: string,
  yearOfBirth: number,
  continents: Continents,
  specialNeeds: SpecialNeeds,
  enclosureId: EnclosureId
) {
  if (
    type &&
    name &&
    yearOfBirth &&
    !isNaN(continents) &&
    !isNaN(specialNeeds) &&
    !isNaN(enclosureId)
  ) {
    switch (type) {
      case "Bear":
        return new Bear(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Pufferfish":
        return new Pufferfish(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Clownfish":
        return new Clownfish(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Crocodile":
        return new Crocodile(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Eagle":
        return new Eagle(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Lion":
        return new Lion(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Lizard":
        return new Lizard(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
      case "Monkey":
        return new Monkey(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );

      case "Parrot":
        return new Parrot(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );

      case "Shark":
        return new Shark(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );

      case "Swan":
        return new Swan(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );

      case "Turtle":
        return new Turtle(
          name,
          yearOfBirth,
          continents,
          specialNeeds,
          enclosureId
        );
    }
  } else {
    console.error("All Fields are required");
  }
}

export default createAnimal;
