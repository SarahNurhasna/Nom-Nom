import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <custom-hero></custom-hero>

      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantDbSource.getRestaurantList();
      const restaurantsContainer = document.querySelector('#restaurants');

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error rendering restaurants:', error);
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurantsContainer.innerHTML = '<p>Failed to load restaurant list. Please try again later.</p>';
    }
  },
};

export default Home;
