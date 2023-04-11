// The function that retrieves the value from a radio button
// and displays the options in the dropdown menu according to that value
$(function () {
  $("input[type=radio]").on("change", function () {
    let radioChoice = $("input[type=radio]:checked").val();
    let foodArray = getValue(radioChoice);
    console.log(foodArray);

    let optionList = "";

    for (i = 0; i < foodArray.length; i++) {
      optionList += `<option value=" ${foodArray[i]} ">${foodArray[i]} </option>`;
    }
    console.log(optionList);

    $("#foodOption").empty().append(optionList);
  });
});

// The function to check the letter
function getValue(letter) {
  // Data array
  let ItalianFoods = ["Pizza", "Pasta", "Lasagna", "Gelato", "Carbonara"];

  let FrenchFoods = [
    "Macarons",
    "Croissants",
    "Ratatouille",
    "Roast beef",
    "Moules frites",
  ];
  let SpanishFoods = ["Paella", "Sangria", "Tapas", "Calamares", "Churros"];
  let JapaneseFoods = [
    "Sushi",
    "Ramen",
    "Udon",
    "Soba",
    "Takoyaki",
    "Yakitori",
  ];
  let IndianFoods = [
    "Curry",
    "Naan",
    "Masala chai",
    "Tandoori chicken",
    "Roti",
  ];
  let AmericanFoods = [
    "Hamburger",
    "Hot dog",
    "Fried chicken",
    "Ribs",
    "Steak",
    "Apple pie",
    "Mashed potatoes",
  ];

  // if function to check the letter
  if (letter === "Italy") {
    return ItalianFoods;
  } else if (letter === "France") {
    return FrenchFoods;
  } else if (letter === "Spain") {
    return SpanishFoods;
  } else if (letter === "Japan") {
    return JapaneseFoods;
  } else if (letter === "India") {
    return IndianFoods;
  } else if (letter === "United States") {
    return AmericanFoods;
  } else {
    return ["please select a country"];
  }
}
