import Animal from "./classes/Animal";
import Continents from "./enums/Continents";
import EnclosureId from "./enums/EnclosureId";
import SpecialNeeds from "./enums/SpecialNeeds";
import createAnimal from "./func/createAnimal";

const selectAnimalType = document.querySelector(
  "#selectAnimalType"
) as HTMLSelectElement;
const inputAnimalName = document.querySelector(
  "#inputAnimalName"
) as HTMLInputElement;
const inputAnimalBirthYear = document.querySelector(
  "#inputAnimalBirthYear"
) as HTMLInputElement;
const selectContinent = document.querySelector(
  "#selectContinent"
) as HTMLSelectElement;
const selectSpecialNeeds = document.querySelector(
  "#selectSpecialNeeds"
) as HTMLSelectElement;
const selectEnclosure = document.querySelector(
  "#selectEnclosure"
) as HTMLSelectElement;
const button = document.querySelector("button") as HTMLButtonElement;

const savannah = document.querySelector("#savannah") as HTMLDivElement;
const jungle = document.querySelector("#jungle") as HTMLDivElement;
const reptileHouse = document.querySelector("#reptileHouse") as HTMLDivElement;
const aquarium = document.querySelector("#aquarium") as HTMLDivElement;

const allAnimalArr: Animal[] = [];
const savannahAnimals: Animal[] = [];
const jungleAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];
const aquariumAnimals: Animal[] = [];

button.addEventListener("click", () => {
  const animalType: string = selectAnimalType.value;
  const animalName: string = inputAnimalName.value.trim();
  const animalBirthYear: number = Number(inputAnimalBirthYear.value);
  const animalContinent: number = Number(selectContinent.value);
  const animalSpecialNeeds: number = Number(selectSpecialNeeds.value);
  const enclosureIdIndex: number = Number(selectEnclosure.value);

  const newAnimal = createAnimal(
    animalType,
    animalName,
    animalBirthYear,
    animalContinent,
    animalSpecialNeeds,
    enclosureIdIndex
  );

  if (newAnimal) {
    allAnimalArr.push(newAnimal);

    switch (true) {
      case newAnimal._enclosureId === EnclosureId.AquaticHabitat:
        aquariumAnimals.push(newAnimal);
        aquarium.textContent += newAnimal._emoji;

        break;
      case newAnimal._enclosureId === EnclosureId.JungleHabitat:
        jungleAnimals.push(newAnimal);
        jungle.textContent += newAnimal._emoji;
        break;
      case newAnimal._enclosureId === EnclosureId.ReptileHouse:
        reptileHouseAnimals.push(newAnimal);
        reptileHouse.textContent += newAnimal._emoji;
        break;
      case newAnimal._enclosureId === EnclosureId.SavannahHabitat:
        savannahAnimals.push(newAnimal);
        savannah.textContent += newAnimal._emoji;
        break;
    }
  } else {
    console.error("All Fields are required");
  }
});
