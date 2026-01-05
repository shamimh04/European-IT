
const photoCards = document.querySelectorAll('.photo-card img');
const modalImage = document.getElementById('modalImage');

photoCards.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
});
// Modal functionality
const galleryImages = document.querySelectorAll('.photo-card img');
const galleryModalImage = document.getElementById('galleryModalImage');
const galleryDownloadBtn = document.getElementById('galleryDownloadBtn');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    galleryModalImage.src = img.src;
    galleryDownloadBtn.href = img.dataset.download;
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
  });
});
