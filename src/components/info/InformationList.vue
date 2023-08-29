<template>
  <ul class="pt-6 list-disc list-inside leading-8">
    <li><span class="font-semibold">Developed by:</span> Maksym Osovitnii</li>
    <li><span class="font-semibold">Routes Number:</span> 3 (home, info + dynamic route page)</li>
    <li>
      <span class="font-semibold">ENV:</span> API KEY and BASE URL are env variables specified in
      .env file (VITE_BASE_URL & VITE_API_KEY)
    </li>
    <li>
      <span class="font-semibold">Unit test:</span>is written in PageHeading.spec.ts for
      PageHeading.vue component
    </li>
    <li>
      <span class="font-semibold">Validation:</span> simple implementation without vee-validate or
      yup done on routes page (if settings data is incorrect or is missing)
    </li>
    <li>
      <span class="font-semibold">API error simple handling:</span> simple implementation showing
      error if there was problems with fetching data from API
    </li>
    <li>
      <span class="font-semibold">Interval:</span> is created onMount and deleted OnBeforeUnmount
    </li>
    <li>
      <span class="font-semibold">Loading state:</span> while data loads from API, loading state is
      shown
    </li>
  </ul>
</template>
