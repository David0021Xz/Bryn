function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
}

function searchProduct() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const products = [
    { name: "Camiseta 1", price: "R$ 59,99", img: "camiseta1.png" },
    { name: "Camiseta 2", price: "R$ 79,99", img: "camiseta2.png" },
    { name: "Camiseta 3", price: "R$ 69,99", img: "camiseta3.png" },
    { name: "Camiseta 4", price: "R$ 89,99", img: "camiseta4.png" },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(input)
  );

  console.log(filteredProducts);
}

// Função para alternar o estado do favorito
function toggleFavorite(productId) {
  const heartIcon = document.querySelector(`#${productId} .heart-icon`);
  const isFavorited = heartIcon.classList.contains('favorited');

  if (isFavorited) {
    heartIcon.classList.remove('favorited');
    localStorage.removeItem(productId); // Remove do localStorage
  } else {
    heartIcon.classList.add('favorited');
    localStorage.setItem(productId, 'true'); // Salva no localStorage
  }
}

// Função para verificar o estado dos favoritos quando a página carrega
function checkFavorites() {
  const productIds = ['product-1', 'product-2', 'product-3', 'product-4'];

  productIds.forEach(productId => {
    const heartIcon = document.querySelector(`#${productId} .heart-icon`);
    const isFavorited = localStorage.getItem(productId);

    if (isFavorited) {
      heartIcon.classList.add('favorited');
    }
  });
}

// Chama a função quando a página carrega
document.addEventListener('DOMContentLoaded', checkFavorites);

// Função para alternar o estado de favorito
function toggleFavorite(heartId) {
  const heart = document.getElementById(heartId);
  heart.classList.toggle('favorited');
  
  // Salva o estado no localStorage
  const isFavorited = heart.classList.contains('favorited');
  localStorage.setItem(heartId, isFavorited);
}

// Função para carregar o estado dos corações ao recarregar a página
function loadFavorites() {
  const hearts = document.querySelectorAll('.heart-icon');
  hearts.forEach(heart => {
    const heartId = heart.id;
    const isFavorited = localStorage.getItem(heartId) === 'true';
    
    if (isFavorited) {
      heart.classList.add('favorited');
    }
  });
}

// Adiciona o evento de clique aos corações
document.querySelectorAll('.heart-icon').forEach(heart => {
  heart.addEventListener('click', () => toggleFavorite(heart.id));
});

// Carrega o estado dos corações ao carregar a página
window.onload = loadFavorites;

function toggleFavorite(productId) {
  const heartIcon = document.querySelector(`.heart-icon[onclick="toggleFavorite('${productId}')"]`);
  const isFavorited = heartIcon.classList.toggle('favorited');

  // Salva a preferência no localStorage
  if (isFavorited) {
    localStorage.setItem(`favorite-${productId}`, true);
  } else {
    localStorage.removeItem(`favorite-${productId}`);
  }
}

// Restaura o estado dos favoritos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const products = ["camiseta1", "camiseta2", "camiseta3", "camiseta4", "camiseta5"];
  products.forEach(productId => {
    const heartIcon = document.querySelector(`.heart-icon[onclick="toggleFavorite('${productId}')"]`);
    if (localStorage.getItem(`favorite-${productId}`)) {
      heartIcon.classList.add('favorited');
    }
  });
});
