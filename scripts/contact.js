// The function that retrieves the value from a radio button
// and displays the options in the dropdown menu according to that value
$(function () {
  $("input[type=radio]").on("change", function () {
    // Call function
    let radioChoice = $("input[type=radio]:checked").val();
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  // to check that the submit button works
  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    console.log(dataStuff);
  });
});

// The function to check the letter
function getWords(letter) {
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
