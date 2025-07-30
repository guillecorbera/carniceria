$(document).ready(function () {
  // ====== 1. Smooth Scrolling con ajuste del navbar ======
  $("a[href^='#']").on("click", function (event) {
    const target = $(this.hash);
    if (target.length > 0) {
      event.preventDefault();
      const navbarHeight = 64;
      const targetOffset = target.offset().top - navbarHeight;

      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        800,
        "swing",
        function () {
          window.location.hash = target.attr("id");
        }
      );
    }
  });

  // ====== 2. Fade-in Animation on Scroll ======
  const fadeElements = $(".fade-in");

  function checkFade() {
    fadeElements.each(function () {
      const element = $(this);
      const elementTop = element.offset().top;
      const elementBottom = elementTop + element.outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      // Si el elemento entra en el 80% superior de la pantalla
      if (elementTop < viewportBottom - 100 && elementBottom > viewportTop) {
        element.addClass("visible");
      }
    });
  }

  // Ejecutar al cargar y al hacer scroll
  checkFade();
  $(window).on("scroll", checkFade);

  // ====== 3. Scroll inicial con hash (si aplica) ======
  if (window.location.hash) {
    const $target = $(window.location.hash);
    if ($target.length > 0 && $target.hasClass("fade-in")) {
      setTimeout(() => {
        const offsetTop = $target.offset().top - 64;
        $("html, body").animate(
          { scrollTop: offsetTop },
          1,
          function () {
            history.replaceState(null, null, " ");
            history.pushState(null, null, window.location.hash);
          }
        );
      }, 100);
    }
  }
});

  // Cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', () => {
      // Deseleccionar el checkbox (esto cierra el menú)
      const checkbox = document.querySelector('.navbar-container input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  });