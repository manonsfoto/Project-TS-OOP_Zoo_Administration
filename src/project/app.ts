import Animal from "./classes/Animal";
import Continents from "./classes/Continents";
import Enclosure, { EnclosureId } from "./classes/Enclosure";
import SpecialNeeds from "./classes/SpecialNeeds";
import Lion from "./classes/Lion";
import Bear from "./classes/Bear";
import Blowfish from "./classes/Blowfish";
import Clownfish from "./classes/Clownfish";
import Crocodile from "./classes/Crocodile";
import Eagle from "./classes/Eagle";
import Lizard from "./classes/Lizard";
import Monkey from "./classes/Monkey";
import Parrot from "./classes/Parrot";
import Shark from "./classes/Shark";
import Swan from "./classes/Swan";
import Turtle from "./classes/Turtle";

// *!SECTION DOM Elements =====================================

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
const selectMealType = document.querySelector(
  "#selectMealType"
) as HTMLSelectElement;
const selectEnclosure = document.querySelector(
  "#selectEnclosure"
) as HTMLSelectElement;
const button = document.querySelector("button") as HTMLButtonElement;
const displayEnclosures = document.querySelector(
  "#displayEnclosures"
) as HTMLElement;

// *!SECTION Enclosure Select Options ========================

const enclosuresArr: Enclosure[] = [];
function createNewEnclosure(enclosureIdParam: EnclosureId) {
  const newEnclosure = new Enclosure(enclosureIdParam);
  enclosuresArr.push(newEnclosure);
}
createNewEnclosure(EnclosureId.AquaticHabitat);
createNewEnclosure(EnclosureId.JungleHabitat);
createNewEnclosure(EnclosureId.ReptileHouse);
createNewEnclosure(EnclosureId.SavannahHabitat);

enclosuresArr.forEach((singleEnclosure, index) => {
  const createOptionEnclosure = document.createElement("option");
  createOptionEnclosure.textContent = singleEnclosure._id;
  createOptionEnclosure.setAttribute("value", index.toString());
  selectEnclosure.appendChild(createOptionEnclosure);
});

enclosuresArr.forEach((singleEnclosure) => {
  const createDivEnclosure = document.createElement("div") as HTMLDivElement;
  displayEnclosures.appendChild(createDivEnclosure);

  const titleEnclosure = document.createElement("h3") as HTMLElement;
  titleEnclosure.textContent = singleEnclosure._id;
  createDivEnclosure.appendChild(titleEnclosure);

  const createParagraph = document.createElement("p") as HTMLParagraphElement;

  createParagraph.textContent = "";
  createDivEnclosure.appendChild(createParagraph);
});

// *!SECTION Continents Select Options ========================

function createOptionContinents() {
  for (const singleContinent in Continents) {
    const optionContinent = document.createElement("option");
    optionContinent.textContent = singleContinent;
    optionContinent.setAttribute("value", singleContinent);
    selectContinent.appendChild(optionContinent);
  }
}
createOptionContinents();

// *!SECTION Button for Creating animal ========================

const allAnimalArr: Animal[] = [];

button.addEventListener("click", () => {
  const animalType = selectAnimalType.value;
  const animalName: string = inputAnimalName.value.trim();
  const animalBirthYear: number = Number(inputAnimalBirthYear.value);
  const enclosureValueIndex: number = Number(selectEnclosure.value);
  let newAnimal: Animal;
  switch (true) {
    case animalType === "Bear":
      newAnimal = new Bear(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Blowfish":
      newAnimal = new Blowfish(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Clownfish":
      newAnimal = new Clownfish(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Crocodile":
      newAnimal = new Crocodile(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Eagle":
      newAnimal = new Eagle(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Lion":
      newAnimal = new Lion(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Lizard":
      newAnimal = new Lizard(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Monkey":
      newAnimal = new Monkey(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Parrot":
      newAnimal = new Parrot(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Shark":
      newAnimal = new Shark(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Swan":
      newAnimal = new Swan(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
    case animalType === "Turtle":
      newAnimal = new Turtle(
        animalName,
        animalBirthYear,
        Continents[selectContinent.value as keyof typeof Continents],
        SpecialNeeds[selectMealType.value as keyof typeof SpecialNeeds],
        Object.values(EnclosureId)[enclosureValueIndex]
      );
      allAnimalArr.push(newAnimal);
      break;
  }

  const emojiParagraph = document.querySelectorAll(
    "p"
  ) as NodeListOf<HTMLParagraphElement>;
  emojiParagraph[0].textContent = "";
  emojiParagraph[1].textContent = "";
  emojiParagraph[2].textContent = "";
  emojiParagraph[3].textContent = "";
  allAnimalArr.forEach((animal) => {
    switch (true) {
      case animal._enclosureId === EnclosureId.SavannahHabitat:
        emojiParagraph[0].textContent += animal._emoji;
        break;
      case animal._enclosureId === EnclosureId.JungleHabitat:
        emojiParagraph[1].textContent += animal._emoji;
        break;
      case animal._enclosureId === EnclosureId.AquaticHabitat:
        emojiParagraph[2].textContent += animal._emoji;
        break;
      case animal._enclosureId === EnclosureId.ReptileHouse:
        emojiParagraph[3].textContent += animal._emoji;
        break;
    }
  });
});
