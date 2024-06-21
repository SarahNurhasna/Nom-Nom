/* eslint-disable import/extensions */
/* eslint-disable max-len */
import CONFIG from '../../globals/config.js';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-detail__title">${restaurant.name}</h2>
  <div class="restaurant-detail__general">
    <img class="restaurant-detail__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Restoran ${restaurant.name}" />
    <div class="restaurant-detail__info">
      <h3 id="main-content">Information</h3>
      <h4>Rating</h4>
      <p>⭐️ ${restaurant.rating}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Categories</h4>
      <p>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</p>
      <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
    </div>
    
  </div>
  <div class="restaurant-detail__spesific">
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="review">
    <h3>Restaurant Review</h3>
    <div class="review__list">
        ${restaurant.customerReviews
    .map((review) => `
            <div class="review__item">
                <div class="review__user">
                  <p>${review.name}</p>
                  <p>${review.date}</p>
                </div>
                <div class="review__description">
                    <p>${review.review}</p>
                </div>
            </div>
          `)
    .join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div id="main-content" class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Restoran ${restaurant.name}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a class=" btn" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
