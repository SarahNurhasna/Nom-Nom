/* eslint-disable import/extensions */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = `
      <div class="restaurant-item__not__found">Kamu belum menambahkan restaurant favorite</div>
    `;
    }
  },
};

export default Favorite;
