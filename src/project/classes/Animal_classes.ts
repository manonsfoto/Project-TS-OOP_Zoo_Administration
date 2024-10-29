import Continents from "../enums/Continents";
import EnclosureId from "../enums/EnclosureId";
import SpecialNeeds from "../enums/SpecialNeeds";
import { Bird, Fish, Mammal, Reptile } from "./Animal";

// ?=========== Mammal =================================

export class Bear extends Mammal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🐻", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}
export class Lion extends Mammal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🦁", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Monkey extends Mammal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🐒", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

// ?=========== Bird ============================

export class Eagle extends Bird {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🦅", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Parrot extends Bird {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🐦", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Swan extends Bird {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🦢", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

// ?=========== Fish ============================

export class Pufferfish extends Fish {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🐡", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Clownfish extends Fish {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🤡", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Shark extends Fish {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🦈", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

// ?=========== Reptile ============================

export class Turtle extends Reptile {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🐢", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Lizard extends Reptile {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🦎", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export class Crocodile extends Reptile {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: SpecialNeeds,
    enclosureId: EnclosureId
  ) {
    super("🐊", name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}
