const areaNames = [
  "american",
  "argentine",
  "australian",
  "belgian",
  "brazilian",
  "british",
  "canadian",
  "chinese",
  "croatian",
  "czech",
  "dutch",
  "egyptian",
  "french",
  "filipino",
  "greek",
  "haitian",
  "hungarian",
  "indonesian",
  "iran",
  "indian",
  "italian",
  "japanese",
  "mexican",
  "malaysian",
  "mexican",
  "moroccan",
  "portuguese",
  "russian",
  "spanish",
  "swedish",
  "thai",
  "turkish",
  "tunisian",
  "vietnamese",
];
let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
  let searchInput = document
    .getElementById("user-input")
    .value.trim()
    .toLowerCase();
  console.log(searchInput.length);
  if (searchInput.length <= 0) {
    result.innerHTML = `<h5>Please enter a dish name</h5>`;
  } else if (!isNaN(searchInput) && searchInput.trim() !== "") {
    // searching by ID
    const mealId = parseInt(searchInput);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        displayFoodItem(data, searchInput, 1);
      });
  } else if (areaNames.includes(searchInput)) {
    // Searching by area name
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        displayFoodItem(data, searchInput, 0);
      });
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        displayFoodItem(data, searchInput, 1);
      });
  }
});

const displayFoodItem = (items, searchInput, check) => {
  console.log(items);
  const itemContainer = document.getElementById("result");
  itemContainer.innerHTML = "";
  if (!items.meals) {
    itemContainer.innerHTML = `<h5>No item found for ${searchInput}</h5>`;
    return;
  }
  items.meals.forEach((item) => {
    console.log(item.strArea);
    const div = document.createElement("div");
    div.classList.add("card");

    if (check == 1) {
      div.innerHTML = `
        
        <img src="${item.strMealThumb}" alt="Meal Image" class="meal-image gradient">
        <h6 class="card-meal-title">${item.strMeal}</h6>
        <h6 class="card-meal-category">${item.strCategory}</h6>
        <h6 class="card-meal-area">${item.strArea}</h6>
        <div id="button-container">
            <button class="card-btn" onClick="handleCart('${item.strMeal}', this)">Add To List</button>
            <button class="card-btn" onClick="detailsOfSingleItemUsingModal('${item.idMeal}')">Details</button>
        </div>
        

        `;
      div.style.backgroundImage = `url('${item.strMealThumb}')`;
      div.style.backgroundSize = "cover"; // Ensure the background image covers the whole card
      div.style.backgroundPosition = "center"; // Center the background image
    } else {
      // To show the properties by the area name
      div.innerHTML = `
        <img src="${item.strMealThumb}" alt="Meal Image" class="meal-image">
        <h6 class="card-meal-title">${item.strMeal}</h6>
        <h6 class="card-meal-area">${
          searchInput.charAt(0).toUpperCase() + searchInput.slice(1)
        }</h6>
        <div id="button-container">
            <button class="card-btn" onClick="handleCart('${
              item.strMeal
            }', this)">Add To List</button>
            <button class="card-btn" onClick="detailsOfSingleItemUsingModal('${
              item.idMeal
            }')">Details</button>
        </div>
      `;
    }

    itemContainer.appendChild(div);
  });
};

const detailsOfSingleItemUsingModal = (mealId) => {
  console.log(mealId);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals[0].strMeal);
      const meal = data.meals[0];
      //   displaySingleItem(meal);

      // Title for the Modal
      document.getElementById("recipeModalLabel").textContent = meal.strMeal;
      // Image Section
      document.querySelector(".image-section img").src = meal.strMealThumb;
      // Ingredient Section
      const ingredientsList = document.querySelector(".ingredients-section ul");
      ingredientsList.innerHTML = ""; // Clear the existing of previous ingredients
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
          // removes leading  whitespace
          const listItem = document.createElement("li");
          listItem.textContent = `${measure} ${ingredient}`; // Combine measure and ingredient
          ingredientsList.appendChild(listItem);
        }
      }
      // Instructions Section
      document.querySelector(".process-section-body").textContent =
        meal.strInstructions;

      document.querySelector(
        // Adding Source Link
        ".source-link"
      ).textContent = `Click Here To Read More About "${meal.strMeal}"`;
      document.querySelector(".source-link").href = meal.strSource;
      document.querySelector(".source-link").target = "_blank";

      document.querySelector(".video-link").textContent = "Watch Here"; // Adding Youtube video link in a button
      document.querySelector(".video-link").href = meal.strYoutube;
      document.querySelector(".video-link").target = "_blank";

      const modal = new bootstrap.Modal(document.getElementById("recipeModal"));
      modal.show();
    });
};

const handleCart = (meal, button) => {
  const cartCount = document.getElementById("count").innerText;
  let integerCount = parseInt(cartCount);
  integerCount++;

  if (integerCount >= 12) {
    // It will show an alert message when the count reach its limit
    alert("Your list is full ! ! !");
    return;
  }
  document.getElementById("count").innerText = integerCount;
  button.innerText = "Already Added";
  button.style.backgroundColor = "white";
  button.style.color = "black";
  button.disabled = true;

  const container = document.getElementById("cart-main-container");
  const div = document.createElement("div");
  div.classList.add("card-info");
  div.innerHTML = `
  <h6>${integerCount}.  ${meal}</h6>
  `;
  container.appendChild(div);
};
