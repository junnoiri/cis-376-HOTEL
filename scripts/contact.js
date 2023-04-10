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

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    console.log(dataStuff);
  });
});

function getWords(letter) {
  console.log("in f/n getWords, here the paramter: ", letter);

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
