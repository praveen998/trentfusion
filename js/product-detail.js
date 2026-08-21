document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("productDetail");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const product = products.find(item => item.id === id) || products[0];

  const phone = "919846124945";
  const message = `Hello Trend Fusion, I am interested in the "${product.name}" (${product.price}). Please share availability and more details.`;
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  target.innerHTML = `
    <a class="back-link" href="products.html">← Back to Products</a>
    <div class="product-detail">
      <div class="detail-image-wrap"><img src="${product.image}" alt="${product.name}"></div>
      <div class="detail-info">
        <span class="tag">${product.category}</span>
        <h1>${product.name}</h1>
        <div class="detail-price">${product.price}</div>
        <p class="lead">${product.description}</p>
        <h3>Product Details</h3>
        <ul class="detail-list">${product.details.map(item => `<li>${item}</li>`).join("")}</ul>
        <a class="btn whatsapp-btn" href="${whatsapp}" target="_blank" rel="noopener">Buy / Enquire on WhatsApp</a>
        <p class="small-note">Price and specifications can be edited in <code>js/products.js</code>.</p>
      </div>
    </div>`;
});
