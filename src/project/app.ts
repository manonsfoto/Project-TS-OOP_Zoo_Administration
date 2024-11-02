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

// ====================================================
const allAnimalArr: Animal[] = [];
const savannahAnimals: Animal[] = [];
const jungleAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];
const aquariumAnimals: Animal[] = [];
// ====================================================

button.addEventListener("click", () => {
  const animalType: string = selectAnimalType.value;
  const animalName: string = inputAnimalName.value.trim().toUpperCase();
  const animalBirthYear: number = Number(inputAnimalBirthYear.value);
  const animalContinent: number = Number(selectContinent.value);
  const animalSpecialNeeds: number = Number(selectSpecialNeeds.value);
  const enclosureIdIndex: number = Number(selectEnclosure.value);

  // ====================================================

  const newAnimal = createAnimal(
    animalType,
    animalName,
    animalBirthYear,
    animalContinent,
    animalSpecialNeeds,
    enclosureIdIndex
  );

  // ====================================================

  if (newAnimal) {
    allAnimalArr.push(newAnimal);

    switch (true) {
      case newAnimal._enclosureId === EnclosureId.AquaticHabitat:
        aquariumAnimals.push(newAnimal);
        break;
      case newAnimal._enclosureId === EnclosureId.JungleHabitat:
        jungleAnimals.push(newAnimal);
        break;
      case newAnimal._enclosureId === EnclosureId.ReptileHouse:
        reptileHouseAnimals.push(newAnimal);
        break;
      case newAnimal._enclosureId === EnclosureId.SavannahHabitat:
        savannahAnimals.push(newAnimal);
        break;
    }
  }
  displayAnimalEnclosure(savannahAnimals, savannah);
  displayAnimalEnclosure(jungleAnimals, jungle);
  displayAnimalEnclosure(reptileHouseAnimals, reptileHouse);
  displayAnimalEnclosure(aquariumAnimals, aquarium);

  selectAnimalType.value = "init";
  inputAnimalName.value = "";
  inputAnimalBirthYear.value = "";
  selectContinent.value = "init";
  selectSpecialNeeds.value = "init";
  selectEnclosure.value = "init";
});

// ====================================================

function displayAnimalEnclosure(
  whichAnimals: Animal[],
  divElement: HTMLDivElement
): void {
  if (whichAnimals) {
    divElement.innerHTML = "";

    whichAnimals.forEach((animal: Animal, index) => {
      const emojiDiv = document.createElement("div") as HTMLDivElement;
      emojiDiv.className = "Emoji tooltip";
      const emoji = document.createElement("div") as HTMLDivElement;
      emoji.textContent = animal._emoji;
      const age = animal.calcAge();

      const tooltip = document.createElement("div") as HTMLDivElement;
      tooltip.className = "tooltiptext";
      tooltip.innerHTML = `
          Name: ${animal._name}<br>
          Age: ${age}<br>
          Origin:${Continents[animal._continents]}<br>
          SpecialNeeds: ${SpecialNeeds[animal._specialNeeds]}
          `;

      emojiDiv.appendChild(emoji);
      emojiDiv.appendChild(tooltip);
      divElement.appendChild(emojiDiv);

      emojiDiv?.addEventListener("dblclick", () => {
        whichAnimals.splice(index, 1);
        displayAnimalEnclosure(whichAnimals, divElement);
        console.log("our Animal is removed", whichAnimals);
      });
    });
  }
}
