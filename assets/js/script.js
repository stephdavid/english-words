< !DOCTYPE html >
   <html lang="en">

      <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" />
         <link rel="stylesheet" href="./assets/css/style.css" />
         <style>
            #carouselSidebar {
               display: inline-block;
            float: right;
            width: 400px;
        }
         </style>
         <title>word -- mot -- palabra -- Wort -- lexi</title>
      </head>

      <body class="bg-dark">
         <h1><img class="img-fluid" src="assets/images/word -- mot -- palabra -- Wort -- lexi.png"
            alt="word mot palabra Wort lexi" /></h1>
         <header class="container-fluid d-flex" id="header"></header>

         <main class="d-flex flex-column">
            <section class="row align-items-center">
               <div class="col">
                  <label for="search" class="text-white display-6" style="margin: 2rem"><strong>Search for a word
                  </strong><input type="text" class="rounded-lg p-3 py-2 w-40" id="search" name="search" /></label>
               </div>
            </section>

            <div class="modal fade bg-transparent" id="stephModal" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-dark">
                     <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                     <div class="modal-body">
                        <p class="text-white display-6">Please provide a word.</p>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal fade bg-transparent" id="stephModal-2" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-dark">
                     <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                     <div class="modal-body">
                        <p class="text-white display-6">Something went wrong when getting the data. Please try again.
                        </p>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                  </div>
               </div>
            </div>

            <section id="this-section" class="d-flex flex-column">
               <div class="row">
                  <!-- Left Column -->
                  <div class="col">
                     <div id="result" class="my-1">
                        <h2 class="text-white display-6" style="margin: 2rem">Definition:</h2>
                        <div class="border border-warning-subtle" style="margin: 2rem">
                           <h3 class="text-white display-6" style="margin: 2rem" id="selectedWord"></h3>
                           <p class="text-white" style="margin: 2rem; font-size: 1.5rem" id="noun"></p>
                           <p class="text-white" style="margin: 2rem; font-size: 1.5rem" id="verb"></p>
                           <p class="text-white" style="margin: 2rem; font-size: 1.5rem" id="adjective"></p>
                           <p class="text-white" style="margin: 2rem; font-size: 1.5rem" id="adverb"></p>
                        </div>
                     </div>

                     <div class="my-1">
                        <h2 class="text-white display-6" style="margin: 2rem">What is your chosen word in French?</h2>
                        <div class="border border-warning-subtle" style="margin: 2rem">
                           <h3 class="text-white display-6" style="margin: 2rem" id="translation-fr"></h3>
                        </div>
                     </div>
                     <div class="my-1">
                        <h2 class="text-white display-6" style="margin: 2rem">In Spanish?</h2>
                        <div class="border border-warning-subtle" style="margin: 2rem">
                           <h3 class="text-white display-6" style="margin: 2rem" id="translation-es"></h3>
                        </div>
                     </div>
                     <div class="my-1">
                        <h2 class="text-white display-6" style="margin: 2rem">What about in German?</h2>
                        <div class="border border-warning-subtle" style="margin: 2rem">
                           <h3 class="text-white display-6" style="margin: 2rem" id="translation-de"></h3>
                        </div>
                     </div>
                     <div class="my-1">
                        <h2 class="text-white display-6" style="margin: 2rem">Finally, in Greek?</h2>
                        <div class="border border-warning-subtle" style="margin: 2rem">
                           <h3 class="text-white display-6" style="margin: 2rem" id="translation-el"></h3>
                        </div>
                        <img src="assets/images/shakespearesm.png" alt="William Shakespeare - 'it's all Greek to me'" style="margin-left: 12rem">
                     </div>
                  </div>

                  <!-- Right Column (Carousel) -->
                  <div class="col">
                     <!-- Carousel -->
                     <div id="demo" class="carousel slide position-relative" data-bs-ride="carousel">
                        <div id="carouselFade"
                           class="carousel slide carousel-fade position-absolute top-0 start-50 translate-middle-x"
                           style="width:90%">

                           <!-- The slideshow/carousel -->
                           <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <img src="assets/images/phone-booth.jpg" alt="Red phone booth"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/english-bulldog.jpg" alt="English bulldog"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/young-woman-reading-oxford-dictionary.jpg"
                                    alt="Young woman reading the Oxford Dictionary" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/angel-of-the-north.jpg" alt="Angel of the North"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/charlesIII.jpg" alt="CharlesIII" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/shakespeare.jpg" alt="William Shakespeare"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/english-breakfast.jpg" alt="English breakfast"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/british-museum.jpg" alt="British Museum"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/lavender.jpg" alt="lavender" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/cornwall.jpg" alt="Cornwall" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/hedgehog.jpg" alt="hedgehog" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/blackpool.jpg" alt="Blackpool" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/british-airways.jpg" alt="British Airways"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/durham.jpg" alt="Durham" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/liver-building-liverpool.jpg" alt="Liver Building Liverpool"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/chaucer-character.jpg" alt="Chaucer character"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/salford-quays.jpg" alt="Salford Quays"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/palace-of-westminster.jpg" alt="Palace of Westminster"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/cornwall2.jpg" alt="Cornwall" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/tea-cup.jpg" alt="cup of tea" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/isle-of-wight.jpg" alt="Isle of Wight"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/york-minster.jpg" alt="York Minster" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/william-morris-design.jpg" alt="William Morris design"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/village-walk.jpg" alt="village walk" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/tudor-rose.jpg" alt="Tudor rose" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/tower-bridge.jpg" alt="Tower Bridge" class="d-block w-100">
                              </div>

                              <div class="carousel-item">
                                 <img src="assets/images/the-beatles.jpg" alt="The Beatles" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/rose.jpg" alt="rose" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/william-morris-design2.jpg" alt="William Morris design"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/robin-hood.jpg" alt="Robin Hood" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/robin.jpg" alt="robin" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/football.jpg" alt="football" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/london-underground.jpg" alt="London underground"
                                    class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/stonehenge.jpg" alt="Stonehenge" class="d-block w-100">
                              </div>
                              <div class="carousel-item">
                                 <img src="assets/images/village.jpg" alt="English village" class="d-block w-100">
                              </div>
                           </div>

                           <!-- Left and right controls/icons -->
                           <button class="carousel-control-prev" type="button" data-bs-target="#demo"
                              data-bs-slide="prev">
                              <span class="carousel-control-prev-icon"></span>
                           </button>
                           <button class="carousel-control-next" type="button" data-bs-target="#demo"
                              data-bs-slide="next">
                              <span class="carousel-control-next-icon"></span>
                           </button>
                        </div>
                        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                           integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                           crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                           integrity="sha384-BBtl eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
                           crossorigin="anonymous"></script>
                     </div>
                  </div>
            </section>

         </main>
                  <aside>
            <div id="previousSearches" class="my-1" style="margin: 2rem">
               <h2 class="text-white display-6">Previous Searches</h2>
               <ul id="prevSearches" class="m-0 text-white list-unstyled" style="font-size: 1.5rem">
               </ul>
               <label><button type="button" id="clearAllButton"
                  class="btn btn-md text-black mt-2 bg-cau bg-warning-subtle fs-4">Clear Search
                  History</button></label>
            </div>
         </aside>
      </main>

      <script src="https://code.jquery.com/jquery.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
         crossorigin="anonymous"></script>
      <script src="assets/js/script.js"></script>
   </body>

</html >