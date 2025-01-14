//swiper
const swiper = new Swiper(".swiper", {
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    992: { slidesPerView: 4, spaceBetween: 20 },
  },

});
//navbar toggler
const navbutton = document.getElementById('nav-toggler');
navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('toggled');
});

//newsletter animation
const NewsletterForm = document.getElementById('newsletter-form');
const NewsletterInput = document.getElementById('newsletter-input');
NewsletterInput.addEventListener('focus', () => {
  NewsletterForm.classList.add('focused');

});
NewsletterInput.addEventListener('blur', () => {
  NewsletterForm.classList.remove('focused');
});

//floating cart window
const cartIcon = document.getElementById('cart-icon');
    const cartWindow = document.getElementById('cart-window');
    const overlay = document.getElementById('overlay');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = []; // Array to store cart items

    // Add product to cart
    function addToCart(product) {
      cart.push(product);
      updateCartUI();
    }

    // Remove product from cart
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartUI();
    }

    // Update cart UI
    function updateCartUI() {
      cartItems.innerHTML = "";

      if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-message">There is no item in the cart</p>`;
        cartTotal.textContent = ""; // Clear total if cart is empty
        return;
      }

      let total = 0;
      cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="cart-item-info">
            <p class="cart-item-title">${item.title}</p>
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
          </div>
          <span class="cart-item-remove" onclick="removeFromCart(${index})">Remove</span>
        `;

        cartItems.appendChild(cartItem);
        total += item.price;
      });

      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Toggle cart visibility
    cartIcon.addEventListener("click", () => {
      const isVisible = cartWindow.style.display === 'block';
      cartWindow.style.display = isVisible ? 'none' : 'block';
      overlay.style.display = isVisible ? 'none' : 'block';
    });

    // Hide cart when clicking on overlay
    overlay.addEventListener("click", () => {
      cartWindow.style.display = 'none';
      overlay.style.display = 'none';
    });