// ==========================
// Load Navbar and Set Active Menu
// ==========================
fetch("common/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const navLinks = document.querySelectorAll("#navbar a"); // all navbar links
    const currentPage = window.location.pathname.split("/").pop(); // get current page

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active"); // add bootstrap active class
      } else {
        link.classList.remove("active");
      }
    });
  });

// ==========================
// Load Footer
// ==========================
fetch("common/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);

// ==========================
// Smooth Scroll Animation
// ==========================
const animatedItems = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  animatedItems.forEach(item => {
    const position = item.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      item.classList.add("show");
    }
  });
});

// ==========================
// Smooth Scroll for Anchor Links
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


      // Date and Time Update
      function updateDateTime() {
        const now = new Date();

        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        };

        document.getElementById("dateTime").innerText = now.toLocaleString(
          "en-US",
          options
        );
      }

      // first load
      updateDateTime();

      //  update
      setInterval(updateDateTime, 1000);