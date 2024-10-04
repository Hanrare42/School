const searchMealURL = 'https://themealdb.com/api/json/v1/1/search.php?s=';
const randomMealURL = 'https://themealdb.com/api/json/v1/1/random.php';


let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let noSearchText = document.querySelector('#no-search-text');

let recipeItem = document.querySelector('#recipe-item');
let recipeName = document.querySelector('#recipe-name');
let recipeImage = document.querySelector('#recipe-image');
let recipeCategory = document.querySelector('#recipe-category');

let recipeIntructions = document.querySelector('#recipe-instructions');
let randomRecipeButton = document.querySelector('#random-recipe-button');
let ingredientRecipeButton = document.querySelector('#shop-button');

let ingredientList = document.querySelector('#ingredient-list');
let currentRecipe = null;  // Change this from const to let

recipeItem.style.display = 'none';

// Add event listener for Enter key press
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if within a form
        searchButton.click(); // Simulate click on search button
    }
});

//search button functionality
searchButton.addEventListener('click', function () {
    if (searchInput.value.trim() !== '') {
        searchRecipe();
    }
});

// Extract search functionality into a separate function
function searchRecipe() {
    let searchUrl = searchMealURL + searchInput.value;
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals !== null) {
                // Store the current recipe data
                currentRecipe = data.meals[0];

                // Update UI with recipe details
                updateRecipeUI(currentRecipe);

                searchInput.value = '';
            } else {
                alert('No meal found. Please try another search.');
            }
        });
}

randomRecipeButton.addEventListener('click', function () {
    randomRecipe();
});

// random recipe functionality
function randomRecipe() {
    let randomUrl = randomMealURL;  // Remove .value here
    fetch(randomUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals !== null) {
                // Store the current recipe data
                currentRecipe = data.meals[0];

                // Update UI with recipe details
                updateRecipeUI(currentRecipe);

                searchInput.value = '';
            }
        });
}   

ingredientRecipeButton.addEventListener('click', function () {
    if (currentRecipe) {
        displayIngredients(currentRecipe);
    } else {
        alert('Please search for a recipe first!');
    }
});

// New function to update the UI with recipe details
function updateRecipeUI(recipe) {
    noSearchText.style.display = 'none';
    recipeItem.style.display = 'block';

    recipeName.innerHTML = recipe.strMeal;
    recipeImage.src = recipe.strMealThumb;
    recipeCategory.innerHTML = recipe.strCategory;
    recipeIntructions.innerHTML = recipe.strInstructions;
}

// Modified function to display ingredients in an overlay
function displayIngredients(recipe) {
    // Create overlay
    let overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center';
    
    // Create content container
    let content = document.createElement('div');
    content.className = 'bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto';
    
    // Add title
    let title = document.createElement('h2');
    title.textContent = 'Ingredients';
    title.className = 'text-2xl mb-4';
    content.appendChild(title);

    // Create ingredient list
    let ul = document.createElement('ul');
    ul.className = 'list-disc pl-5';

    // Loop through ingredients and measures
    for (let i = 1; i <= 20; i++) {
        let ingredient = recipe[`strIngredient${i}`];
        let measure = recipe[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {
            let li = document.createElement('li');
            li.textContent = `${measure} ${ingredient}`;
            ul.appendChild(li);
        }
    }

    content.appendChild(ul);

    // Add close button
    let closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'mt-4 px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600';
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };
    content.appendChild(closeButton);

    overlay.appendChild(content);
    document.body.appendChild(overlay);
}
