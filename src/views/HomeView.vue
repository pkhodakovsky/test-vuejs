<template>
  <div>
    <Heading title="Waypoints Settings" />
    <SettingsFrom class="max-w-lg" />
    <Heading title="Update Interval (ms)" class="mt-10" />
    <IntervalSettings class="max-w-lg" />
  </div>
</template>

<script setup lang="ts">
import Heading from '../components/general/PageHeading.vue';
import SettingsFrom from '../components/settings/SettingsForm.vue';
import IntervalSettings from '../components/settings/IntervalSettings.vue';
</script>
