<script setup lang="ts">
import { useCatalogueDataStore } from '../stores/catalogueData';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watchEffect } from 'vue';
import ErrorMessage from './ErrorMessage.vue';

const catalogueDataStore = useCatalogueDataStore();
const { coordinates, isValidCoords } = storeToRefs(catalogueDataStore);

const isValidCoordsOnChange = ref(true);

const checkCoordValidity = () => (isValidCoordsOnChange.value = isValidCoords.value);

onMounted(() => checkCoordValidity());
watchEffect(() => (coordinates.value.isValid = isValidCoords.value));
</script>

<template>
  <label
    class="required"
    for="coordInput"
    >Planetary Coordinates</label
  >
  <input
    :aria-invalid="!isValidCoordsOnChange || undefined"
    id="coordInput"
    placeholder="+0.00, -0.00"
    type="text"
    v-model="coordinates.value"
    @change="checkCoordValidity"
  />
  <ErrorMessage v-if="!isValidCoordsOnChange">Invalid coordinate format</ErrorMessage>
</template>
