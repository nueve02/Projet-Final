document.addEventListener("DOMContentLoaded", () => {
  // Gestion du panier
  let cartCount = 0;
  const cartCountElement = document.getElementById('cart-count');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCountElement.textContent = cartCount;
    });
  });

  // Gestion des étoiles de notation
  document.querySelectorAll('.star-rating').forEach(rating => {
    const stars = rating.querySelectorAll('span');

    stars.forEach((star, index) => {
      star.style.cursor = 'pointer';

      // Survol : colorer les étoiles jusqu'à la position survolée
      star.addEventListener('mouseover', () => {
        highlightStars(stars, index + 1);
      });

      // Sortie de la souris : revenir à la note enregistrée ou tout décocher
      star.addEventListener('mouseout', () => {
        const currentRating = parseInt(rating.getAttribute('data-rating')) || 0;
        highlightStars(stars, currentRating);
      });

      // Clic : enregistrer la note et afficher un message
      star.addEventListener('click', () => {
        rating.setAttribute('data-rating', index + 1);
        highlightStars(stars, index + 1);
        alert(`Merci pour votre note de ${index + 1} étoile(s) !`);
      });
    });

    // Initialiser l'affichage des étoiles (aucune note au départ)
    highlightStars(stars, 0);
  });

  // Fonction pour colorer les étoiles
  function highlightStars(stars, rating) {
    stars.forEach((star, i) => {
      star.style.color = i < rating ? '#f0ad4e' : '#ccc';
    });
  }
});


  document.addEventListener("DOMContentLoaded", function () {
    const selector = document.getElementById("themeSelector");
    selector.addEventListener("change", function () {
      const theme = this.value;
      const body = document.body;

      // Enlève les anciens thèmes
      body.classList.remove("theme-lightblue", "theme-dark", "theme-custom");

      // Applique le thème sélectionné
      if (theme === "lightblue") {
        body.classList.add("theme-lightblue");
      } else if (theme === "dark") {
        body.classList.add("theme-dark");
      } else if (theme === "custom") {
        body.classList.add("theme-custom");
      }
    });
  });

