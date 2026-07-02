 
  // Feature 1: Hover on First Product
  const firstProduct = document.querySelectorAll(".flex.flex-col")[0];
  const originalHeading = firstProduct.querySelector("h3").textContent;
  
  firstProduct.addEventListener("mouseenter", () => {
    firstProduct.querySelector("h3").textContent = "⭐ Featured";
  });
  firstProduct.addEventListener("mouseleave", () => {
    firstProduct.querySelector("h3").textContent = originalHeading;
  });
  
  // Feature 3: Toggle background on double-click
  document.body.addEventListener("dblclick", () => {
    document.body.classList.toggle("bg-gray-100");
  });