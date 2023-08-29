import { defineStore } from 'pinia';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
type coordinates = { lat: number; lng: number };
type response = { distance: number; trafficDelay: number; travelTime: number; violated: boolean };

export const useRouteStore = defineStore('route', {
  state: () => ({
    route: undefined as response | undefined,
    startingPoint: { lat: 0, lng: 0 } as coordinates,
    destination: { lat: 0, lng: 0 } as coordinates,
    updateInterval: 0,
    isLoading: true,
    error: false
  }),
  getters: {
    routeDataProvided(): boolean {
      return (
        this.destination.lat > 0 &&
        this.destination.lng > 0 &&
        this.startingPoint.lat > 0 &&
        this.startingPoint.lng > 0 &&
        this.updateInterval > 0
      );
    }
  },
  actions: {
    async updateRouteData() {
      try {
        const response = await axios.get(
          `https://api.myptv.com/routing/v1/routes?waypoints=${this.startingPoint.lat.toFixed(
            6
          )},${this.startingPoint.lng.toFixed(6)}&waypoints=${this.destination.lat.toFixed(
            6
          )},${this.destination.lng.toFixed(6)}&apiKey=${apiKey}`
        );

        this.route = response.data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error = true;
      }
    }
  },
  persist: true
});
