$(document).ready(function () {

   function populateSearchHistory() {
      // Get a string from local storage
      let getHistory = localStorage.getItem("selectedWord");

      getHistory = JSON.parse(getHistory);
      if (Array.isArray(getHistory) && getHistory.length > 0) {
         for (let i = 0; i < 10; i++) {
            const li = $("<li>");
            const entry = getHistory[i];
            li.text(entry);
            $("#prevSearches").append(li)
         }
      }
   }

   function populateDefinition(data) {
      $("#selectedWord").text(data.entry);
      $("#noun").text(data.meaning.noun);
      $("#verb").text(data.meaning.verb);
      $("#adjective").text(data.meaning.adjective);
      $("#adverb").text(data.meaning.adverb);

      populateSearchHistory();
   };

   function getDefinition(selectedWord) {
      const url = "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=" + selectedWord + "";
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "edffdf1e95msha5ea98f7066bb52p15b514jsnb04cc7a266bf",
            "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com"
         }
      };
      fetch(url, options)
         .then(function (response) {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then(function (data) {
            console.log("API Response:", data);
            populateDefinition(data, selectedWord);
         })
         .catch(function (error) {
            console.error("Error fetching data:", error);
            $("#stephModal-2").modal("show");
         });
   };

   function getGreekTranslation(selectedWord) {
      const url = "https://nlp-translation.p.rapidapi.com/v1/translate?text=" + selectedWord + "&to=el&from=en";
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "edffdf1e95msha5ea98f7066bb52p15b514jsnb04cc7a266bf",
            "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com"
         }
      };
      fetch(url, options)
         .then(function (response) {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then(function (dataT) {
            console.log("API Response:", dataT);
            $("#translation-el").text(dataT.translated_text.el);
            getDefinition(selectedWord);
         })
         .catch(function (error) {
            console.error("Error fetching data:", error);
            $("#stephModal-2").modal("show");
         });
   };

   function getGermanTranslation(selectedWord) {
      const url = "https://nlp-translation.p.rapidapi.com/v1/translate?text=" + selectedWord + "&to=de&from=en";
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "edffdf1e95msha5ea98f7066bb52p15b514jsnb04cc7a266bf",
            "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com"
         }
      };
      fetch(url, options)
         .then(function (response) {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then(function (dataT) {
            console.log("API Response:", dataT);
            $("#translation-de").text(dataT.translated_text.de);
            getGreekTranslation(selectedWord);
         })
         .catch(function (error) {
            console.error("Error fetching data:", error);
            $("#stephModal-2").modal("show");
         });
   };



   function getSpanishTranslation(selectedWord) {
      const url = "https://nlp-translation.p.rapidapi.com/v1/translate?text=" + selectedWord + "&to=es&from=en";
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "edffdf1e95msha5ea98f7066bb52p15b514jsnb04cc7a266bf",
            "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com"
         }
      };
      fetch(url, options)
         .then(function (response) {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then(function (dataT) {
            console.log("API Response:", dataT);
            $("#translation-es").text(dataT.translated_text.es);
            getGermanTranslation(selectedWord);
         })
         .catch(function (error) {
            console.error("Error fetching data:", error);
            $("#stephModal-2").modal("show");
         });
   };

   function getFrenchTranslation(selectedWord) {
      const url = "https://nlp-translation.p.rapidapi.com/v1/translate?text=" + selectedWord + "&to=fr&from=en";
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "edffdf1e95msha5ea98f7066bb52p15b514jsnb04cc7a266bf",
            "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com"
         }
      };
      fetch(url, options)
         .then(function (response) {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then(function (dataT) {
            console.log("API Response:", dataT);
            $("#translation-fr").text(dataT.translated_text.fr);
            getSpanishTranslation(selectedWord);
         })
         .catch(function (error) {
            console.error("Error fetching data:", error);
            $("#stephModal-2").modal("show");
         });
   };

   // Add a click event handler to clear localstorage
   $("#clearAllButton").on("click", function (event) {
      event.preventDefault;
      localStorage.clear();
      location.reload(true);
   });

   $("#search").on("input keyup", function (event) {
      let selectedWord = $(this).val().trim();

      // Check if the key pressed is Enter (key code 13)
      if (event.keyCode === 13) {
         if (!selectedWord) {
            // Show the modal
            $("#stephModal").modal("show");
            return false;
         }
         // Retrieve existing history array from local storage
         let existingHistory = localStorage.getItem("selectedWord");
         existingHistory = existingHistory ? JSON.parse(existingHistory) : [];

         // Add the new selectedWord to the array
         existingHistory.push(selectedWord);

         // Store the updated array back in local storage
         localStorage.setItem("selectedWord", JSON.stringify(existingHistory));

         getFrenchTranslation(selectedWord);
      }

      // Handle input event for typing only (a) space(s) and Enter
      if (event.type === "input" && !selectedWord) {
         $("#stephModal").modal("show");
         return false;
      }
   });
});