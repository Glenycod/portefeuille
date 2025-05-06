// Fonction pour charger le panier depuis le localStorage
function chargerPanier() {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    return panier;
  }
  
  // Fonction pour afficher les produits dans le panier
  function afficherPanier() {
    const listePanier = document.getElementById('liste-panier');
    const totalElement = document.getElementById('total-panier');
    let panier = chargerPanier();
  
    listePanier.innerHTML = '';
    let total = 0;
  
    panier.forEach((produit, index) => {
      const item = document.createElement('li');
      item.className = 'list-group-item d-flex justify-content-between align-items-center';
  
      item.innerHTML = `
        <div>
          <strong>${produit.nom}</strong><br>
          Prix: ${produit.prix}€ x ${produit.quantite}
        </div>
        <div>
          <span class="me-3">${produit.prix * produit.quantite}€</span>
          <button class="btn btn-danger btn-sm" onclick="supprimerDuPanier(${index})">Supprimer</button>
        </div>
      `;
  
      total += produit.prix * produit.quantite;
      listePanier.appendChild(item);
    });
  
    totalElement.textContent =` ${total}€`;
  }
  
  // Fonction pour supprimer un produit du panier
  function supprimerDuPanier(index) {
    let panier = chargerPanier();
    panier.splice(index, 1); // Supprime l'élément à l'index donné
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier(); // Rafraîchir l'affichage
  }
  
  // Appel initial pour afficher le panier dès le chargement de la page
  afficherPanier();




  // Exemple d’ajout dans une autre page
// let panier = JSON.parse(localStorage.getItem('panier')) || [];
// panier.push({ nom: 'Chaise', prix: 50, quantite: 1 });
// localStorage.setItem('panier', JSON.stringify(panier));