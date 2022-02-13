/* ================================== */
/*         MODULE 3 ASSIGNMENT        */
/* ================================== */

/* ----------- QUESTION 2 ----------- */
const url =
   "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=0b9843ee0912431399dada69aca5399b";
const resultsContainer = document.querySelector(".results");

setTimeout(() => {
   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         resultsContainer.innerHTML = "";
         let array = data.results;
         for (let i = 0; i < array.length; i++) {
            if (i === 8) {
               break;
            }

            resultsContainer.innerHTML += `<p class='result'>Name: ${array[i].name}, Rating: ${array[i].rating}, Number of tags: ${array[i].tags.length}</p>`;
         }
      })
      .catch(
         (error) =>
            (resultsContainer.innerHTML += `<p class='result'>Error occurred retrieving object: ${error}</p>`)
      );
}, 2000);
