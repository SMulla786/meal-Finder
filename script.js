const searchInput = document.getElementById("meal_search");
searchInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    getMeal();
  }
});
async function getMeal() {
  const streamData = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`
  );
  const textData = await streamData.text();
  const JsonData = JSON.parse(textData);
  // console.log(JsonData)
  let html = "";
  for (let i = 0; i < JsonData.meals.length; i++) {
    html += `<img
    src="${JsonData.meals[i].strMealThumb}" alt="" height="200px;"width="300px">`;
  }
  document.getElementById("meals").innerHTML = html;
}
