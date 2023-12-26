
# English Words

Module 9 Project: This is a web page where a user can input a word and get a definition of that word (and possibly other information) and the user can find out what word is in another language.

---

### Webpage

word - mot - palabra - Wort - λέξη
https://stephdavid.github.io/english-words/

---

### Use Case

* As a non-native English speaker, I would like to visit a pleasant-looking modern website where I can input a word and get its definition. After that, I can store the word for later consideration. As a native English speaker, I would be interested in what the word is in a foreign language.

### Screenshots

---


### Acceptance Criteria

* With your team, you'll conceive and execute a design that solves a real-world problem by integrating data received from multiple server-side API requests. You'll also learn about agile development methodologies to help you work collaboratively. You'll implement feature and bug fixes using Git branch workflow and pull requests.

* You'll write your own user stories and acceptance criteria in GitHub Issues to help your team stay on track with the project. Using GitHub Project to track the status of your project tasks will help you understand the benefits of Kanban boards.

* You and your group will use everything you’ve learned over the past six modules to create a real-world front-end application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfill the following requirements:

   * Use Bootstrap.

    * Be deployed to GitHub Pages.

    * Be interactive (in other words, accept and respond to user input).

    * Use at least two server-side APIs 

    * Links to an external site..

    * Use modals instead of alerts, confirms, or prompts.

    * Use client-side storage to store persistent data.

    * Be responsive.

    * Have a polished UI.

    * Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, and so on).

    * Have a quality README (including a unique name, description, technologies used, screenshot, and link to the deployed application).
     
---

### Process

* Created a new repo. Rebranded the homepage. Added event listener and user input validation. Added bootstrap modal. 
* Connected to Word Dictionary API using fetch - https://rapidapi.com/twinword/api/word-dictionary and validation.
* Connected to NLP Translation API using fetch - https://rapidapi.com/gofitech/api/nlp-translation and validation.
* Changed two more alerts to modals (as they had the same message, one modal) - I tried to make the modal text a variable to no avail.
* A couple of issues - TODO later perhaps - unsure how to have a variable representing Modal text so that I don't have to build more than one modals though at this point there is only one other. Similarly, I found myself how to repeat a fetch(). How can I reuse a fetch for different APIs instead of creating multiple fetches.
* Populated the definition and translation sections
* Added local Storage (set and get and clear)
* word -- mot -- palabra -- Wort -- λέξη(lexi) - New title and branding
* change the name of the GitHub repo? Not really needed
* Added new photos (France, Spain, Germany and Greece) to the carousel
* Work to make the page responsive using Bootstrap breakpoints and an @media query
* Redesigned the hero background collage include France etc.
* Renamed the PopulateSearchHistory function to GetSearchHistory which is called once the page loads using an delegation event listener.
* Made the previous search list items interactive, by using an click event.
* Commenced adding ARIA attributes, especially for carousel. Added the role="button" attribute - $("li").attr('role', 'button'); to the dynamically created previous history items. Added ARIA attributes for the bootstrap modals. Removed "label for" from search button as it is not required. 
* Added titles to resolve the accssibility issue of no text with heading elements. As well, to resolve a similar issue, added a "visibly hidden title" to the modals. In the first case, the title is overwritten when the APIs output their results. In the latter case, font color is same as the backgroud i.e. no text-white class attribute is added.



---

### References

Require multiple reviewers for pull requests
https://github.blog/2018-03-23-require-multiple-reviewers/

About protected branches
https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches

Git Delete Remote Branch – How to Remove a Remote Branch in Git
https://www.freecodecamp.org/news/git-delete-remote-branch/ 

Git Switch Branch – How to Change the Branch in Git
https://www.freecodecamp.org/news/git-switch-branch/

Git Stash
https://www.atlassian.com/git/tutorials/saving-changes/git-stash

change event
https://api.jquery.com/change/

.add( elements )
https://api.jquery.com/add/#add-elements

Shakespeare Fonts
https://www.fontspace.com/category/shakespeare

keyup event
https://api.jquery.com/keyup/

event.type
https://api.jquery.com/event.type/

keycode 13 is for which key
https://stackoverflow.com/questions/6086686/keycode-13-is-for-which-key

Remove default list-style in Bootstrap
https://www.tutorialspoint.com/Remove-default-list-style-in-Bootstrap

Which are the side effects of renaming a Git repository
https://stackoverflow.com/questions/69839125/which-are-the-side-effects-of-renaming-a-git-repository

Hacking the Bootstrap 5 Carousel: Building Sidebar Carousels with CSS
https://raybo.org/posts/2021-03-28-making-sidebar-carousels-with-css-by-hacking-the-bootstrap-5-carousel/

jQuery ready() Method
https://www.w3schools.com/jquery/event_ready.asp

jQuery Event Methods
https://www.w3schools.com/jquery/jquery_events.asp

Understanding Event Delegation
https://learn.jquery.com/events/event-delegation/

https://getbootstrap.com/docs/5.3/components/carousel/#autoplaying-carousels
Autoplaying carousels

A Step-By-Step Guide To Building Accessible Carousels
https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/

Should buttons have labels from WCAG point of view?
https://stackoverflow.com/questions/71174375/should-buttons-have-labels-from-wcag-point-of-view

Making Bootstrap Modals More Accessible
https://jsfiddle.net/6gq9x/56/

