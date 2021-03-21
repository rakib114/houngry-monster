const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");

//Adding Event Lisenter
searchBtn.addEventListener("click", getMealList);
//Get meal list that match with the ingredeients
function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
            <div class="meal-iteam" data-id = "${meal.idMeal}" >
                 <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="#">
                    <h3 class="title">${meal.strMeal}</h3>
                </div>
             </div>
            `;
        });
      }
      mealList.innerHTML = html;
    });
}
mealList.addEventListener("click", function () {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
