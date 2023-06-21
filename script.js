const searchInput = document.getElementById("meal_search");
searchInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (searchInput.value == "Sadhana") {
      document.getElementById("meals").innerHTML = `<img
    src="https://cdn-icons-png.flaticon.com/512/4289/4289414.png" alt="" height="200px;"width="300px">`;
    } 
     if (searchInput.value == "Manasi") {
      document.getElementById("meals").innerHTML = `<p>bapya hai be tuz nav</p>`;
    }
    if (searchInput.value == "Bapya") {
      document.getElementById("meals").innerHTML = `<img
    src="https://lh3.googleusercontent.com/GJy8nenghZXVPAgVz3_D5TCojue4gZuaxrJT9mM5xP5USd1P1uhbOcPjX8rGkAVHnAiW6BwNbPqEfiL4Nyn_r28IUWoiZHaUPiGmxQH5pJHTcRILkI5TYRWKi9GNOEYxFIC8SHGpThskZD0VISVdWxvskTFVf9HQgPBNcbTfCvOoAk0IIyu8GRhHkRNzTOZEXlJuQVtm5mhxVPmRtHMsEdxeNq9Ehd09R8tB8BVeEBG2N0rgX9iP0TjaMpMHeXSw5Dq735j8JQ97_yl5-ffW0JZbXfiehYB2vya3sVnCcVTmD1u-8_KhNm-YMRDfdwHq-ChXqKaJe2VPiKNIh0RrmAOk0Jx9HzKzV1HXLXdx5q4R1wSoPomnhFTfl9noVXlXECo382H5_AEAXDDDc-mYl35cZRIrQDajLF687v1MyXzQfSc04_psM7pxvPY9yHLHHXe98R5JpV23U8fXSIWwHGdif9b-EmEgamOTuAKC2wlot5ZNxMaFgEIdhusEhzXh7PRz2wlkfD0fbzMKhYr3jaar8thhb7wmIwnX1q6DmTGdEczyZkG8SIidjKuBYuKBPfCkRXHON1DnJuDCDTFhKnGofZrSqwceYCt91D8T_RVBn0Rl_uhzsrtV2w9zVFtrvIJPUNzCACdmEt5sEbeTa_tBzBTPE5pIVr9f0i8oipWBfzK4AQTwhiWGGxgTw8F5yjJdSuogxTsJTLKRBhXT1Y4_thx-FKDM9ze5XHKiLrvZ-RxelRIWynyJlLc5Dy-76L12usyBZgumztUt-6kbyxnPO2ZZBM7YI6cyg-b_8W3nSrg5PsrG99ui8zv-8DQ9G71Zxey8i7wCtMlfw7EigA3v38McS4s6R6HdU3-u2kqsZhbpVLaVPjXR6wazmU82rj8tYHdw47Zg8yU44mWZg04PuhF6KADhh7DlfNon6bEmzuYZXA=w890-h930-no?authuser=0" alt="" height="200px;"width="300px">`;
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
  
  let html = "";
  for (let i = 0; i < JsonData.meals.length; i++) {
    console.log(JsonData.meals)
    html += `<img
    src="${JsonData.meals[i].strMealThumb}" alt="" height="200px;"width="300px">`;
  }
  document.getElementById("meals").innerHTML = html;
}
