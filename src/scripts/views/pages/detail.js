/* eslint-disable import/extensions */
import UrlParser from '../../routes/url-parser.js';
import RestaurantDbSource from '../../data/restaurantdb-source.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.getDetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
