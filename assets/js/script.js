$(document).ready(function () {

   function populateSearchHistory() {
      // Get a string from local storage
      let getPreviousSearches = localStorage.getItem("selectedWord");
      getPreviousSearches = JSON.parse(getPreviousSearches);
      // Check if getPreviousSearches is an array
      if (Array.isArray(getPreviousSearches) && getPreviousSearches.length > 0) {
         //const searchButtons = ["button1", "button2", "button3"];
         // Loop through the buttons and update their text content
         for (let i = 0; i < getPreviousSearches.length && i < searchButtons.length; i++) {
            const newValue = getPreviousSearches[i];
            $("div#search-history-items").add("div").addClass("rounded-pill search-history-item w-100 d-flex align-items-center justify-content-between py-1");
            $("div.").add("p").addClass("m-0");
            $("p.m-0").text = newValue;
         }
      }
   }

   function populateDefinition(data, selectedWord) {
      selectedWord = selectedWord || "Select a word";
      $("#selectedWord").text = selectedWord;// chg to HTML
      $("#description").text = data;
      populateSearchHistory();
   };

   function getShakespeare(selectedWord) {
      fetch(speechURL, speechOptions).then(function (response) {
         console.log(response)
      })
      populateDefinition(data, selectedWord)
   };

   function getDescription(selectedWord) { // was onsearch()
      fetch(speechURL, speechOptions).then(function (response) {
         console.log(response)
      })
      getPronunciation()
   };

   // Needs a butten in the HTML with id clearAllButton
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
         getDescription(selectedWord);
      }

      // Handle input event for typing only (a) space(s) and Enter
      if (event.type === "input" && !selectedWord) {
         $("#stephModal").modal("show");
         return false;
      }
   });
});