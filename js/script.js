$(document).ready(function() {
  // GET JSON INFORMATION
  var INFORMATION = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../information.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
  })(); 

  // MENU
  $("#burger").click(function() {
    document.getElementById("menu").classList.toggle("menu-open");
    document.getElementById("burger").classList.toggle("is-active");
    document.getElementById("menu-bg").classList.toggle("visible");
  })

  $("#menu-bg").click(function() {
    $("#menu").removeClass("menu-open");
    $("#burger").removeClass("is-active");
    $("#menu-bg").removeClass("visible");
  })
  
  // LOGIN GRID
  for (let i = 0; i < 84; i++) {
    $("#grid-bg>div").append("<div class='item'></div>");
  }

  // COVERS LOGIN
  let coversArray = ["anime", "basedBook", "documentary", "infantil", "newRelease", "newThisWeek", "seriePrize", "spanish", "trendNow"];
  let loginGridItems = $("#grid-bg>.grid>.item");
  for (let i = 0; i < loginGridItems.length; i++) {
    let themeIndex = Math.floor(Math.random() * 9);
    let theme = coversArray[themeIndex];
    let filmIndex = Math.floor(Math.random() * 20) + 1;
    loginGridItems.eq(i).css("background", "url(../img/films/" + theme + filmIndex + ".jpg) no-repeat center / cover");
  }

  // ROWS
  for (let i = 0; i < 20; i++) {
    $(".films .grid-row").append("<div class='item film'></div>");
    $(".books .grid-row").append("<div class='item book'></div>");
  }

  // TOP ROW
  let svgTop;
  let svgTop1 = "<svg id='rank-1' viewBox='-20 0 70 154' class='svg-icon svg-icon-rank-1 top-10-rank'><path d='M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z'></path></svg>";
  let svgTop2 = "<svg id='rank-2' viewBox='0 0 80 154' class='svg-icon svg-icon-rank-2 top-10-rank'><path d='M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z'></path></svg>";
  let svgTop3 = "<svg id='rank-3' viewBox='0 0 80 154' class='svg-icon svg-icon-rank-3 top-10-rank'><path d='M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z'></path></svg>";
  let svgTop4 = "<svg id='rank-4' viewBox='0 0 81 154' class='svg-icon svg-icon-rank-4 top-10-rank'><path d='M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z'></path></svg>";
  let svgTop5 = "<svg id='rank-5' viewBox='0 0 81 154' class='svg-icon svg-icon-rank-5 top-10-rank'><path d='M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z'></path></svg>";
  let svgTop6 = "<svg id='rank-6' viewBox='0 0 81 154' class='svg-icon svg-icon-rank-6 top-10-rank'><path d='M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z'></path></svg>";
  let svgTop7 = "<svg id='rank-7' viewBox='0 0 78 154' class='svg-icon svg-icon-rank-7 top-10-rank'><path d='M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z' ></path></svg>";
  let svgTop8 = "<svg id='rank-8' viewBox='0 0 77 154' class='svg-icon svg-icon-rank-8 top-10-rank'><path d='M59.5 152c11.335 0 21.358-1.72 30.077-5.15 8.637-3.397 15.361-8.258 20.213-14.586 4.805-6.267 7.21-13.876 7.21-22.899 0-7.326-2.261-14.07-6.813-20.29-4.548-6.214-10.837-10.658-18.922-13.35l-5.4-1.799 5.338-1.975c7.238-2.678 12.572-6.683 16.066-12.018 3.53-5.388 5.284-11.178 5.284-17.414 0-7.912-2.133-14.839-6.405-20.84-4.3-6.042-10.403-10.825-18.345-14.351C79.816 3.78 70.386 2 59.5 2S39.184 3.781 31.197 7.328c-7.942 3.526-14.044 8.309-18.345 14.351-4.272 6.001-6.405 12.928-6.405 20.84 0 6.236 1.755 12.026 5.284 17.414 3.494 5.335 8.828 9.34 16.066 12.018l5.338 1.975-5.4 1.798c-8.085 2.693-14.374 7.137-18.922 13.351C4.261 95.295 2 102.04 2 109.365c0 9.023 2.405 16.632 7.21 22.899 4.852 6.328 11.576 11.19 20.213 14.586 8.72 3.43 18.742 5.15 30.077 5.15zm.5-89c-5.6 0-10.334-1.515-14.125-4.56C41.985 55.313 40 51.183 40 46.21c0-5.244 1.976-9.518 5.875-12.65C49.666 30.515 54.4 29 60 29s10.334 1.515 14.125 4.56C78.025 36.694 80 40.968 80 46.212c0 4.973-1.985 9.103-5.875 12.228C70.334 61.485 65.6 63 60 63zm-.5 62c-6.255 0-11.556-1.613-15.836-4.856-4.41-3.343-6.664-7.816-6.664-13.25 0-5.298 2.258-9.698 6.664-13.038C47.944 90.613 53.245 89 59.5 89c6.255 0 11.556 1.613 15.836 4.856 4.406 3.34 6.664 7.74 6.664 13.038 0 5.434-2.254 9.907-6.664 13.25C71.056 123.387 65.755 125 59.5 125z'></path></svg>";
  let svgTop9 = "<svg id='rank-9' viewBox='0 0 71 154' class='svg-icon svg-icon-rank-9 top-10-rank'><path d='M40.0597376,115.807692 L4.47328474,115.807692 C7.45109332,126.586242 13.4362856,135.15497 22.4670906,141.582071 C32.2129251,148.518048 44.5640134,152 59.5759717,152 C78.2141671,152 92.5105725,145.697944 102.6454,133.074799 C112.853557,120.360322 118,101.543854 118,76.5769231 C118,62.1603327 115.678843,49.3016297 111.046669,37.9886125 C106.453069,26.7698049 99.6241767,17.9802976 90.5435117,11.5767831 C81.5017862,5.20072813 70.1375399,2 56.3957597,2 C49.4158116,2 42.68229,3.15952329 36.1849549,5.47966815 C29.7045526,7.79376647 23.8782903,11.1932931 18.6948526,15.6846002 C13.5316746,20.1583529 9.45923583,25.508367 6.46782377,31.7491046 C3.4928156,37.95562 2,45.0644366 2,53.0961538 C2,61.9117395 4.02797967,69.7019439 8.0788911,76.5056791 C12.1434539,83.3323424 17.5832537,88.6925139 24.4218542,92.6108203 C31.2518358,96.5241882 38.8590885,98.4807692 47.2791519,98.4807692 C55.0853554,98.4807692 61.6095996,97.3619306 66.8547126,95.1478231 C72.0569983,92.9517941 76.4513169,89.5970183 80.0605818,85.0622151 L84.0584687,80.039134 L83.6207883,86.4440446 C82.74746,99.2241219 80.0984349,108.438199 75.5533003,114.10687 C70.9310132,119.871766 64.7726909,122.788462 57.2438163,122.788462 C52.8691399,122.788462 49.1904302,122.100251 46.212535,120.692834 C43.5930338,119.454801 41.5307848,117.825945 40.0597376,115.807692 Z M57.5,31 C63.3657106,31 68.4419893,32.9364861 72.6299874,36.7826253 C76.8609583,40.6682294 79,45.6186068 79,51.5 C79,57.3813932 76.8609583,62.3317706 72.6299874,66.2173747 C68.4419893,70.0635139 63.3657106,72 57.5,72 C51.6342894,72 46.5580107,70.0635139 42.3700126,66.2173747 C38.1390417,62.3317706 36,57.3813932 36,51.5 C36,45.6186068 38.1390417,40.6682294 42.3700126,36.7826253 C46.5580107,32.9364861 51.6342894,31 57.5,31 Z' ></path></svg>";
  let svgTop10 = "<svg id='rank-10' width='100%' height='100%' viewBox='0 0 140 154' class='svg-icon svg-icon-rank-10 top-10-rank'><path d='M34.757 151.55h35.869V2.976L2 19.687v30.14l32.757-8.41v110.132zm105.53 3.45c12.394 0 23.097-3.12 32.163-9.353 9.093-6.25 16.11-15.047 21.066-26.43C198.5 107.766 201 94.196 201 78.5c0-15.698-2.5-29.266-7.484-40.716-4.955-11.384-11.973-20.18-21.066-26.431C163.384 5.119 152.681 2 140.287 2c-12.393 0-23.096 3.12-32.162 9.353-9.093 6.25-16.11 15.047-21.066 26.43-4.984 11.45-7.484 25.02-7.484 40.717 0 15.698 2.5 29.266 7.484 40.716 4.955 11.384 11.973 20.18 21.066 26.431 9.066 6.234 19.769 9.353 32.162 9.353zm0-31.368c-7.827 0-13.942-4.147-18.15-12.178-4.053-7.736-6.047-18.713-6.047-32.954s1.994-25.218 6.047-32.954c4.208-8.03 10.323-12.178 18.15-12.178 7.827 0 13.943 4.147 18.15 12.178 4.053 7.736 6.048 18.713 6.048 32.954s-1.995 25.218-6.047 32.954c-4.208 8.03-10.324 12.178-18.15 12.178z'></path></svg>";

  for (let i = 0; i < 10; i++) {
    if (i == 0) {
      svgTop = svgTop1;
    } else if (i == 1) {
      svgTop = svgTop2;
    } else if (i == 2) {
      svgTop = svgTop3;
    } else if (i == 3) {
      svgTop = svgTop4;
    } else if (i == 4) {
      svgTop = svgTop5;
    } else if (i == 5) {
      svgTop = svgTop6;
    } else if (i == 6) {
      svgTop = svgTop7;
    } else if (i == 7) {
      svgTop = svgTop8;
    } else if (i == 8) {
      svgTop = svgTop9;
    } else if (i == 9) {
      svgTop = svgTop10;
    }

    $(".films-top .main-container .row-container .row-top10").append("<div class='top10'><div class='top-number'>" + svgTop + "</div><div class='top-item film'></div>");
    $(".books-top .main-container .row-container .row-top10").append("<div class='top10'><div class='top-number'>" + svgTop + "</div><div class='top-item book'></div>");
  }

  // ROW COVERS
  let rows = $(".films .grid-row, .books .grid-row");
  for (let i = 0; i < rows.length; i++) {
    let rowId = rows.parent().parent().parent().eq(i).attr("id");
    let items = rows.eq(i).children();

    for (let i = 0; i < items.length; i++) {
      if (items.eq(i).hasClass("film")) {
        items.eq(i).css("background", "url(../img/films/" + rowId + (i + 1) + ".jpg) no-repeat center / cover");
      } else if (items.eq(i).hasClass("book")) {
        items.eq(i).css("background", "url(../img/books/" + rowId + (i + 1) + ".jpg) no-repeat center / cover");
      }
    }
  }

  // TOP ROW COVERS
  let topRow = $(".row-top10");
  let topRowId = topRow.parent().parent().parent().attr("id");
  let topRowFilms = topRow.children("");

  for (let i = 0; i < topRowFilms.length; i++) {
    let item = topRowFilms.eq(i).children(".top-item");
    if (item.hasClass("film")) {
      topRowFilms.eq(i).children(".top-item").css("background", "url(../img/films/" + topRowId + (i + 1) + ".jpg) no-repeat center / cover");
    } else if (item.hasClass("book")) {
      topRowFilms.eq(i).children(".top-item").css("background", "url(../img/books/" + topRowId + (i + 1) + ".jpg) no-repeat center / cover");
    }
  }

  // SLIDER 
  let rigthArrow = $(".slider-right");
  let leftArrow = $(".slider-left");
  
  rigthArrow.click(function() {
    let mainContainer = this.parentNode;
    let row = mainContainer.querySelector(".row-container");

    row.scrollLeft += row.offsetWidth;

    let activeIndicator = $(this).parent().siblings(".title-container").children(".page-indicators").children(".active");
    if (activeIndicator.next()) {
      activeIndicator.next().addClass("active");
      activeIndicator.removeClass("active");
      // NO SE PARAN EN EL FINAL
    }
    console.log($(".active"));
  })

  leftArrow.click(function(e) {
    let mainContainer = this.parentNode;
    let row = mainContainer.querySelector(".row-container");

    row.scrollLeft -= row.offsetWidth;

    let activeIndicator = $(this).parent().siblings(".title-container").children(".page-indicators").children(".active");
    if (activeIndicator.prev()) {
      activeIndicator.prev().addClass("active");
      activeIndicator.removeClass("active");

      // NO SE PARAN EN EL PRINCIPIO
    }
  })

  // PAGE INDICATORS
  let filmsOnScreen;
  let booksOnScreen;
  let windowWidth = $(window).width();

  if (windowWidth < 500) {
    filmsOnScreen = 2;
    booksOnScreen = 3;
  } else if (windowWidth < 800) {
    filmsOnScreen = 3;
    booksOnScreen = 4;
  } else if (windowWidth < 1100) {
    filmsOnScreen = 4;
    booksOnScreen = 5;
  } else if (windowWidth < 1400) {
    filmsOnScreen = 5;
    booksOnScreen = 7;
  } else {
    filmsOnScreen = 6;
    booksOnScreen = 9;
  }

  $(".row").each(function() {
    if($(this).parent().hasClass("film-file")) {
      let films = $(this).children(".main-container").children(".row-container").children(".grid-row").children();
      let pageNumber = Math.ceil(films.length / filmsOnScreen);

      for (let i = 0; i < pageNumber; i++) {
        $(this).children(".title-container").children(".page-indicators").append("<button class='page-indicator'></button>");
      }

      $(this).children(".title-container").children(".page-indicators").children(".page-indicator").eq(0).addClass("active");
    } else if($(this).parent().hasClass("book-file")) {
      let books = $(this).children(".main-container").children(".row-container").children(".grid-row").children();
      let pageNumber = Math.ceil(books.length / booksOnScreen);

      for (let i = 0; i < pageNumber; i++) {
        $(this).children(".title-container").children(".page-indicators").append("<button class='page-indicator'></button>");
      }

      $(this).children(".title-container").children(".page-indicators").children(".page-indicator").eq(0).addClass("active");
    }
  })


  $(".page-indicator").click(function() {
    let pageIndicatorsList = $(this).parent().children();
    let selectedPageIndicator = $(this);
    let selectedPageIndicatorIndex = pageIndicatorsList.index(selectedPageIndicator);

    let section = this.parentNode.parentNode.parentNode;
    let mainContainer = section.querySelector(".main-container");
    let row = mainContainer.querySelector(".row-container")

    row.scrollLeft = selectedPageIndicatorIndex * row.offsetWidth;

    $(".page-indicator.active").removeClass("active");
    $(this).addClass("active");
  })

  // SHOW INDICATORS
  $(".row").mouseenter(function() {
    let titleContainerChildren = this.querySelector(".title-container");
    let pageIndicators = titleContainerChildren.querySelector(".page-indicators");

    let arrowLeft = this.querySelector(".slider-left");
    let arrowRigth = this.querySelector(".slider-right");

    pageIndicators.classList.add("show-indicators");
    arrowLeft.classList.add("show-indicators");
    arrowRigth.classList.add("show-indicators"); 
  })

  // HIDE INDICATORS
  $(".row").mouseleave(function() {
    let titleContainerChildren = this.querySelector(".title-container");
    let pageIndicators = titleContainerChildren.querySelector(".page-indicators");

    let arrowLeft = this.querySelector(".slider-left");
    let arrowRigth = this.querySelector(".slider-right");

    pageIndicators.classList.remove("show-indicators");
    arrowLeft.classList.remove("show-indicators");
    arrowRigth.classList.remove("show-indicators"); 
  })

  // MAIN COVER CARD
  $(".mas_info").click(function(event) {
    if ($(event.target).parent().parent().hasClass("film-cover")) {
      getItemInfo("COVER", 0, "FILMS");
    }
    if($(event.target).parent().parent().hasClass("book-cover")) {
      let selectedBook = $(event.target).parent();
      let bookList = $(".book-cover").children();
      let selectedBookIndex = bookList.index(selectedBook);
      getItemInfo("COVER", selectedBookIndex, "BOOKS");
    }
  })

  // CARD
  $(".item, .top-item").click(function(event) {
    getItem(event);
  })

  // INFO
  function getItem(event) {
    let row;
    if ($(event.target).hasClass("top-item")) {
      row = $(event.target).parent().parent().parent().parent().parent();
    } else if ($(event.target).hasClass("item")) {
      row = $(event.target).parent().parent().parent().parent();
    }

    let rowId = row.attr("id");
    let rowIdUpperCase = rowId.toUpperCase();
    
    let filmList;
    if ($(event.target).hasClass("top-item")) {
      filmList = row.children(".main-container").children(".row-container").children(".grid-row").children(".top10").children(".top-item");
    } else if ($(event.target).hasClass("item")) {
      filmList = row.children(".main-container").children(".row-container").children(".grid-row").children();
    }
    
    let selectedFilm = $(event.target);
    let selectedFilmIndex = filmList.index(selectedFilm);
    
    let type;
    if (selectedFilm.hasClass("film")) {
      type = "FILMS";
    } 
    if (selectedFilm.hasClass("book")) {
      type = "BOOKS";
    }
    getItemInfo(rowIdUpperCase, selectedFilmIndex, type);
  }

  function getItemInfo(rowIdUpperCase, selectedFilmIndex, type) {
    let cover = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].COVER;
    let title = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].TITLE;
    let year = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].YEAR;
    let age = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].AGE;
    let coincidence = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].COINCIDENCE;
    let cast = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].CAST;
    let genre = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].GENRE;
    let belongs = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].BELONGS;
    let seasons = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].SEASONS;
    let synopsis = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].SYNOPSIS;
    let like = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].LIKE;
    let author = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].AUTHOR;
    let editorial = INFORMATION[type][rowIdUpperCase][selectedFilmIndex].EDITORIAL;

    createCard(rowIdUpperCase, selectedFilmIndex, type, cover, title, year, age, coincidence, cast, genre, belongs, seasons, synopsis, like, author, editorial);
  }

  // CREATE INFO CARD
  function createCard(rowIdUpperCase, selectedFilmIndex, type, cover, title, year, age, coincidence, cast, genre, belongs, seasons, synopsis, like, author, editorial) {
    let filmCard = "<section class='card-lightbox film-card'><div class='card-bg'></div><div class='cont-card'><div class='card front part'><button id='close' type='button'></button><div class='card-cover'></div><div class='card-info'><div class='data'><p class='perc'>" + coincidence + "% de coincidencia</p><p class='year'>" + year + "</p><div class='edad'>" + age + " +</div><p class='seasons'>" + seasons + "</p></div><h3>" + title + "</h3><button id='card-like' class='like' title='Añadir a Mi Lista' aria-label='Like'><svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z' stroke='currentColor' stroke-linejoin='round'/></svg></button><button class='mas_info'>+ info</button></div></div><div class='card back part rotate'><button id='back-btn' class='arrow-left' type='button' title='Atrás'></button><div class='informacion'><p class='resumen'>" + synopsis + "</p></div></div></div></section>";
    let bookCard = "<section class='card-lightbox book-card'><div class='card-bg'></div><div class='cont-card'><div class='card front part'><button id='close' type='button'></button><div class='card-cover'></div><div class='card-info'><div class='data'><p class='perc'>" + coincidence + "% de coincidencia</p><p class='year'>" + year + "</p></div><h3>" + title + "</h3><button id='card-like' class='like' title='Añadir a Mi Lista' aria-label='Like'><svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z' stroke='currentColor' stroke-linejoin='round'/></svg></button><button class='mas_info'>+ info</button></div></div><div class='card back part rotate'><button id='back-btn' class='arrow-left' type='button' title='Atrás'></button><div class='informacion'><p class='resumen'>" + synopsis + "</p><p><span>Autor:</span> " + author + "</p><p><span>Géneros:</span> " + genre + "</p><p><span>Editorial:</span> " + editorial + "</p></div></div></div></section>";

    let card;
    if (type == "FILMS") {
      card = filmCard;
    }
    if (type == "BOOKS") {
      card = bookCard;
    }

    $("main").append(card);
    $(".card-lightbox").addClass("show-card");

    if (type == "FILMS") {
      if (belongs != "") {
        $(".resumen").after("<p><span>Pertenece a:</span> " + belongs + "</p>");
      }
      if (genre != "") {
        $(".resumen").after("<p><span>Géneros:</span> " + genre + "</p>");
      }
      if (cast != "") {
        $(".resumen").after("<p><span>Reparto:</span> " + cast + "</p>");
      }
    } 

    $(".card-cover").css("background", cover + " no-repeat center / cover");

    if (age == "0") {
      $(".edad").css("background", "#01A221");
    }
    if (age == "7") {
      $(".edad").css("background", "#00A7EA");
    }
    if (age == "12") {
      $(".edad").css("background", "#FFFF37");
      $(".edad").css("color", "#000");
    }
    if (age == "16") {
      $(".edad").css("background", "#FF5B20");
    }
    if (age == "18") {
      $(".edad").css("background", "#FF091B");
    }
    
    $("#close").click(function() {
      $(".card-lightbox").removeClass("show-card");
      $(".card-lightbox").remove();
    })

    $(".card-bg").click(function() {
      $(".card-lightbox").removeClass("show-card");
      $(".card-lightbox").remove();
    })
  
    if(like == "YES") {
      $("#card-like").addClass("active");
    }

    $("#card-like").click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");

        INFORMATION[type][rowIdUpperCase][selectedFilmIndex].LIKE = "NO";
        removeList(cover, type);
      } else {
        $(this).addClass("active");

        INFORMATION[type][rowIdUpperCase][selectedFilmIndex].LIKE = "YES";
        addList(rowIdUpperCase, selectedFilmIndex, cover, type);
      }
    })

    $(".mas_info, #back-btn").click(function() {
      $(".front, .back").toggleClass("rotate");
    })
  }

  // MY LIST ROW
  let filmList = [];
  let bookList = [];
  let filmsWidth;
  let booksWidth;

  if (windowWidth < 500) {
    filmsWidth = 47.7;
    booksWidth = 27;
  } else if (windowWidth < 800) {
    filmsWidth = 31.8;
    booksWidth = 20;
  } else if (windowWidth < 1100) {
    filmsWidth = 23.8;
    booksWidth = 17;
  } else if (windowWidth < 1400) {
    filmsWidth = 19;
    booksWidth = 13;
  } else {
    filmsWidth = 15.7;
    booksWidth = 10;
  }
  
  function addList(rowIdUpperCase, selectedFilmIndex, cover, type) {
    if(type == "FILMS") {
      let filmArray = [rowIdUpperCase, selectedFilmIndex, cover, type];
      filmList.push(filmArray);
    }
    if(type == "BOOKS") {
      let bookArray = [rowIdUpperCase, selectedFilmIndex, cover, type];
      bookList.push(bookArray);
    }

    createMyListRow(type);
  }

  function removeList(cover, type) {
    if (type == "FILMS") {
      for (let i = 0; i < filmList.length; i++) {
        if (filmList[i][2] == cover) {
          filmList.splice(i, 1);
        }
      }
    }

    if (type == "BOOKS") {
      for (let i = 0; i < bookList.length; i++) {
        if (bookList[i][2] == cover) {
          bookList.splice(i, 1);
        }
      }
    }

    createMyListRow(type);
  }

  function createMyListRow(type) {
    if (type == "FILMS") {
      $(".myFilmListRow").empty();
      
      $(".myFilmListRow").css("grid-template-columns", "repeat(" + filmList.length + ", " + filmsWidth + "%)");
  
      for (let i = 0; i < filmList.length; i++) {
        $(".myFilmListRow").append("<div class='myFilmList-item'></div>");
      }
  
      let myListRow = $(".myFilmListRow").children();
      for (let i = 0; i < myListRow.length; i++) {
        myListRow.eq(i).css("background", filmList[i][2] + " no-repeat center / cover");
      }
  
      $(".myFilmList-item").click(function(event){
        let selectedFilm = $(event.target);
        let myList = $(".myFilmListRow").children();
        let selectedFilmIndex = myList.index(selectedFilm);
  
        getItemInfo(filmList[selectedFilmIndex][0], filmList[selectedFilmIndex][1], type);
      })
    }

    if (type == "BOOKS") {
      $(".myBookListRow").empty();

      $(".myBookListRow").css("grid-template-columns", "repeat(" + bookList.length + ", " + booksWidth + "%)");

      for (let i = 0; i < bookList.length; i++) {
        $(".myBookListRow").append("<div class='myBookList-item'></div>");
      }
  
      let myListRow = $(".myBookListRow").children();
      for (let i = 0; i < myListRow.length; i++) {
        myListRow.eq(i).css("background", bookList[i][2] + " no-repeat center / cover");
      }
  
      $(".myBookList-item").click(function(event){
        let selectedBook = $(event.target);
        let myList = $(".myBookListRow").children();
        let selectedBookIndex = myList.index(selectedBook);
  
        getItemInfo(bookList[selectedBookIndex][0], bookList[selectedBookIndex][1], type);
      })
    }

  }

  // MESSAGE
  $("#send-message").click(function() {
    $("#message-lightbox").addClass("show-message");
  })

  $(".dark-bg").click(function() {
    $("#message-lightbox").removeClass("show-message");
  })

  // PLAN
  $(".container-checkbox-2>input").click(function(){
    let planList = $("th");
    let selectedPlan = $("input[name='plan']:checked").parent().parent();
    let selectedPlanIndex = planList.index(selectedPlan);

    $("table tr").each(function() {
      let specsPlan = $(this).children("td");
      if (specsPlan.length == 3) {
        for (let i = 0; i < specsPlan.length; i++) {
          if (i == selectedPlanIndex) {
            specsPlan.eq(i).css("color", "var(--main-blue)");
          } else if (i != selectedPlanIndex){
            specsPlan.eq(i).css("color", "var(--white)");
          }
        }
      }
    })
  })

  // PAYMENT CARD
  $("#cardName").keyup(function () {
    var text = $(this).val();
    $("#showCardName").text(text);
  })
  $("#cardNumber").keyup(function () {
    var text = $(this).val();
    console.log(text);
    $("#showCardNumber").text(text);
  })
  $("#cardDate").keyup(function () {
    var text = $(this).val();
    $("#showCardDate").text(text);
  })
  $("#cardCVV").keyup(function () {
    var text = $(this).val();
    $("#showCardCVV").text(text);
  })

  $("#cardNumber").inputmask("9999 9999 9999 9999");
  $("#cardDate").inputmask("99/99");
  $("#cardCVV").inputmask("999");


  // MAP
  $("#close-map, .ver_mapa").click(function() {
    document.querySelector(".map-lightbox").classList.toggle("show-map");
  })

});