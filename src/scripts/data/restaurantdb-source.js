/* eslint-disable no-useless-catch */
// eslint-disable-next-line import/extensions
import API_ENDPOINT from '../globals/api-endpoint.js';

class RestaurantDbSource {
  static async getRestaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Failed to fetch restaurant list:', error);
      throw error;
    }
  }

  static async getDetailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
      throw error;
    }
  }
}

export default RestaurantDbSource;
