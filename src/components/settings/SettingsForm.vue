<template>
  <div>
    <div class="grid grid-cols-2 gap-6 mt-6">
      <div>
        <div>
          <label for="startLatitude" class="block text-sm font-medium leading-6 text-gray-900"
            >Starting Point Latitude
          </label>
          <div class="mt-2">
            <input
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="startLatitude"
              name="startLatitude"
              v-model.number="startingPoint.lat"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <label for="startLongitude" class="block text-sm font-medium leading-6 text-gray-900"
            >Starting Point Longitude
          </label>
          <div class="mt-2">
            <input
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="startLongitude"
              name="startLongitude"
              v-model.number="startingPoint.lng"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <label for="destinationLatitude" class="block text-sm font-medium leading-6 text-gray-900"
            >Destination Latitude
          </label>
          <div class="mt-2">
            <input
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="destinationLatitude"
              name="destinationLatitude"
              v-model.number="destination.lat"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <label
            for="destinationLongitude"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Destination Longitude
          </label>
          <div class="mt-2">
            <input
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="destinationLongitude"
              name="destinationLongitude"
              v-model.number="destination.lng"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouteStore } from '../../stores/routes';

const routeStore = useRouteStore();
const { destination, startingPoint } = storeToRefs(routeStore);
</script>
