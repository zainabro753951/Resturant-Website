// JavaScript to toggle dropdown visibility
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
      var content = this.querySelector(".dropdown-content");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

    // Close dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        var content = dropdown.querySelector(".dropdown-content");
        content.style.display = "none";
      }
    });
  });
});

// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".zoom");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("show");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("show");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});

// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".ani-left");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});

// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".ani-right");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani2");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani2");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});

// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".ani-top");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani3");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani3");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});

// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".top1");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani4");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani4");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});









// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".top2");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani5");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani5");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});









// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".top3");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani6");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani6");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});


// scroll top and bottom every animation work
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var elements = document.querySelectorAll(".top4");

    if (currentScroll > lastScrollTop) {
      // Downscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll > elementPosition - windowHeight + 200) {
          element.classList.add("ani7");
        }
      });
    } else {
      // Upscroll code
      elements.forEach(function (element) {
        var elementPosition = element.offsetTop;
        var windowHeight = window.innerHeight;

        if (currentScroll < elementPosition - windowHeight + 200) {
          element.classList.remove("ani7");
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});













