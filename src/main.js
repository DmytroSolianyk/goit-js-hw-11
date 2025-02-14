import { searchImages } from './js/pixabay-api';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('search-button')
    .addEventListener('click', async () => {
      const query = document.getElementById('search-input').value;
      const gallery = document.getElementById('gallery');

      gallery.innerHTML = 'Loading...';

      try {
        const images = await searchImages(query);

        gallery.innerHTML = '';

        if (images.length > 0) {
          const galleryMarkup = images
            .map(
              ({
                webformatURL,
                user,
                largeImageURL,
                views,
                downloads,
                likes,
                comments,
              }) => {
                return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${user}" />
          </a>
          <div class="gallery-item-description">
            <label>
              Likes
              <span>${likes}</span>
            </label>

            <label>
              Views
              <span>${views}</span>
            </label>

            <label>
              Comments
              <span>${comments}</span>
            </label>

            <label>
              Downloads
              <span>${downloads}</span>
            </label>
          </div>
        </li>
            `;
              }
            )
            .join('');

          gallery.innerHTML = galleryMarkup;
        } else {
          iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
          });
        }
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    });
});
