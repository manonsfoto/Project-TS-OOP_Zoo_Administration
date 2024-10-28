export enum EnclosureId {
  SavannahHabitat = "Savannah Habitat",
  JungleHabitat = "Jungle Habitat",
  AquaticHabitat = "Aquatic Habitat",
  ReptileHouse = "Reptile House",
}

class Enclosure {
  _id: EnclosureId;
  _name: string = "";
  _builtInYear: number = 2015;

  constructor(id: EnclosureId) {
    this._id = id;
  }
}

export default Enclosure;
