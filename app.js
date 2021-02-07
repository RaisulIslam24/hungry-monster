// Meals data load from API
const getMealData = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data))
        .catch(function() {
            alert("Sorry! It's not available now");
        });
}

// Get input data
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const mealDetailsDiv = document.getElementById('MealDetails');
    mealDetailsDiv.style.display = 'none';
    const inputMeal = document.getElementById('meal').value;
    if(inputMeal == ''){
        alert("please give a meal name");
    }
    else{
    getMealData(inputMeal)
    }
})

// Display meals data
const displayMeals = meals => {
    const mealContainer = document.getElementById('meals');
    mealContainer.innerHTML = "";
    meals.meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = 'mealsDetails';
        const mealInfo = `
        <img src="${meal.strMealThumb}">
        <h5 class="text-center">${meal.strMeal}</h5>
        <button onclick="displayMealDetail('${meal.strMeal}')" class="btn btn-outline-danger">Recipe</button>
        `;
        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);
    });
}

// Meal recipe details data load from API
const displayMealDetail = meals => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]));
}

// Display meal recipe details
const renderMealInfo = meal => {
    const mealDetailsDiv = document.getElementById('MealDetails');
    mealDetailsDiv.style.display = 'block';
    mealDetailsDiv.innerHTML = `
    <img class="rounded mx-auto d-block w-100" src="${meal.strMealThumb}">
    <h2>${meal.strMeal}</h2>
    <h4>Ingredients:<h4>
    <ul>
        <li>${meal.strIngredient1}</li>
        <li>${meal.strIngredient2}</li>
        <li>${meal.strIngredient3}</li>
        <li>${meal.strIngredient4}</li>
        <li>${meal.strIngredient5}</li>
        <li>${meal.strIngredient6}</li>
        <li>${meal.strIngredient7}</li>
        <li>${meal.strIngredient8}</li>
        <li>${meal.strIngredient9}</li>
        <li>${meal.strIngredient10}</li>
    </ul>
    `;
}