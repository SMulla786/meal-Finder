const searchInput = document.getElementById("meal_search");
searchInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (searchInput.value == "Sadhana" || "sadhana") {
      document.getElementById("meals").innerHTML = `<img
    src="https://cdn-icons-png.flaticon.com/512/4289/4289414.png" alt="" height="200px;"width="300px">`;
    } 
     if (searchInput.value == "Manasi") {
      document.getElementById("meals").innerHTML = `<p>bapya hai be tuz nav</p>`;
    }
    if (searchInput.value == "Bapya") {
      document.getElementById("meals").innerHTML = `<img
    src="https://photos.app.goo.gl/TxYPJrw9qGa2cG186" alt="" height="200px;"width="300px">`;
    }
    else {
      getMeal();
    }
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
