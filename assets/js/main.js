  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
   selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true,
    openEffect: 'zoom',
    closeEffect: 'zoom'
  });


 document.querySelectorAll(".year-header").forEach(header => {
    header.addEventListener("click", () => {
      const block = header.parentElement;

      // close others (accordion behaviour)
      document.querySelectorAll(".year-block").forEach(item => {
        if (item !== block) item.classList.remove("open");
      });

      // toggle current
      block.classList.toggle("open");
    });
  });


   document.querySelectorAll(".svg-badge").forEach(badge => {
    const value = badge.dataset.value;
    const text = badge.querySelector(".badge-number");
    if (text) text.textContent = value;
  });
  
//  document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//       const navbar = document.querySelector('.navbar-collapse');
//       if (navbar.classList.contains('show')) {
//         new bootstrap.Collapse(navbar).hide();
//       }
//     });
//   });

 document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("#header .nav-link").forEach(link => {
      const linkPage = link.getAttribute("href");

      // Remove any hardcoded active
      link.classList.remove("active");

      if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("active");
      }
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);
