<template>
  <div>
    <div v-if="routeDataProvided && !error">
      <Heading title="Routes" />
      <p v-if="isLoading">Data is loading now...</p>
      <div v-if="route">
        <RoutesList />
      </div>
    </div>
    <div v-if="!routeDataProvided">
      <Heading title="Settings are incorrect" />
      <p class="max-w-lg mt-6">
        Please, provide accurate settings data (numbers with digits for waypoints, numbers without
        digits for time interval)
      </p>
    </div>
    <div v-if="error" class="mt-6">
      <Heading title="Error happened" />
      <p class="max-w-lg mt-6">
        It looks like API is not working correctly. Please, try again later.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouteStore } from '../stores/routes';
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted } from 'vue';
import Heading from '../components/general/PageHeading.vue';
import RoutesList from '../components/routes/RoutesList.vue';

const routeStore = useRouteStore();
const { route, routeDataProvided, updateInterval, error, isLoading } = storeToRefs(routeStore);

let interval: any;

onMounted(() => {
  error.value = false;
  interval = setInterval(async () => {
    await routeStore.updateRouteData();
  }, updateInterval.value);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
