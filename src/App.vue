<template>
  <div class="min-h-full">
    <div as="nav" class="border-b border-gray-200 bg-white">
      <div class="mx-auto px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="-my-px ml-6 flex space-x-8">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-10">
      <main>
        <div class="mx-auto px-16">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { Disclosure } from '@headlessui/vue';

const navigation = [
  { name: 'Settings', href: '/' },
  { name: 'Route', href: '/route' },
  { name: 'Additional Information', href: '/info' }
];
</script>
