<template>
  <div>
    <div class="grid mt-6">
      <div>
        <div>
          <div>
            <input
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="updateInterval"
              name="updateInterval"
              v-model.number="updateInterval"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteStore } from '../../stores/routes';

const routeStore = useRouteStore();
const { updateInterval } = storeToRefs(routeStore);
</script>
