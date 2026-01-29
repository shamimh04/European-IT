
// const photoCards = document.querySelectorAll('.photo-card img');
// const modalImage = document.getElementById('modalImage');

// photoCards.forEach(img => {
//     img.addEventListener('click', () => {
//         modalImage.src = img.src;
//         const modal = new bootstrap.Modal(document.getElementById('imageModal'));
//         modal.show();
//     });
// });
// // Modal functionality
// const galleryImages = document.querySelectorAll('.photo-card img');
// const galleryModalImage = document.getElementById('galleryModalImage');
// const galleryDownloadBtn = document.getElementById('galleryDownloadBtn');

// galleryImages.forEach(img => {
//   img.addEventListener('click', () => {
//     galleryModalImage.src = img.src;
//     galleryDownloadBtn.href = img.dataset.download;
//     const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
//     modal.show();
//   });
// });

// // ===== Modal Image View =====
// const galleryImages = document.querySelectorAll(".photo-card img");
// const modalImage = document.getElementById("galleryModalImage");
// const downloadBtn = document.getElementById("galleryDownloadBtn");

// galleryImages.forEach(img => {
//   img.addEventListener("click", () => {
//     modalImage.src = img.src;
//     downloadBtn.href = img.dataset.download;

//     const modal = new bootstrap.Modal(
//       document.getElementById("galleryModal")
//     );
//     modal.show();
//   });
// });

// // ===== Category Filter =====
// {
// const filterButtons = document.querySelectorAll(".filter-btn");
// const galleryItems = document.querySelectorAll(".gallery-item");

// filterButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const filter = btn.dataset.filter;

//     galleryItems.forEach(item => {
//       if (filter === "all" || item.dataset.category === filter) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   });
// });
// }
