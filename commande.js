// Récupération des éléments HTML
const panierListe = document.getElementById('commande-panier');
const totalElement = document.getElementById('commande-total');
const formulaire = document.getElementById('form-commande');
const confirmation = document.getElementById('confirmation');

// Récupérer les produits du localStorage
const panier = JSON.parse(localStorage.getItem('panier')) || [];

let total = 0;

// Affichage des produits dans la commande
panier.forEach(produit => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
  li.innerHTML = `
    <span>${produit.nom} (x${produit.quantite})</span>
    <strong>${produit.prix * produit.quantite}€</strong>
  `;
  panierListe.appendChild(li);

  total += produit.prix * produit.quantite;
});

totalElement.textContent = `${total}€`;

// Gestion de l'envoi du formulaire
formulaire.addEventListener('submit', function (e) {
  e.preventDefault();

  // Tu peux récupérer les données ici
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const adresse = document.getElementById('adresse').value;
  const tel = document.getElementById('tel').value;

  // Tu pourrais les envoyer à un serveur ici (avec fetch ou axios)

  // Message de confirmation
  confirmation.classList.remove('d-none');

  // Réinitialiser le panier après commande
  localStorage.removeItem('panier');
  formulaire.reset();
});