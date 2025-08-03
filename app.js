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

      // Cerrar menú móvil al hacer clic en un enlace
      const checkbox = document.querySelector('.navbar-container input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = false;
      }
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

      if (elementTop < viewportBottom - 100 && elementBottom > viewportTop) {
        element.addClass("visible");
      }
    });
  }

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

  // ====== 4. Hamburguesa → X (JavaScript solo si necesitas clase 'active') ======
  // Opcional: si quieres usar clases para más control
  const hamburger = document.querySelector('.hamburger-menu');
  const checkbox = document.getElementById('menu-toggle');

  if (hamburger && checkbox) {
    hamburger.addEventListener('click', function () {
      // El checkbox ya cambia de estado al hacer clic en el label
      // Pero si quieres agregar una clase 'active' al hamburguesa, puedes hacerlo
      // Nota: en tu CSS actual no usas .active, así que esto es opcional
    });
  }

  // No necesitas más JS: la animación X está manejada 100% por CSS
});


// ====== 4. Back to Top Button ======
const backToTopButton = $('#backToTop');

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    backToTopButton.addClass('show');
  } else {
    backToTopButton.removeClass('show');
  }
});