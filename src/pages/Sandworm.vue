<script setup lang="ts">
import { useCatalogueDataStore } from '../stores/catalogueData';
import { storeToRefs } from 'pinia';
import ErrorMessage from '../components/ErrorMessage.vue';

const catalogueDataStore = useCatalogueDataStore();
const { depth, stomach, isValidDepth } = storeToRefs(catalogueDataStore);

function updateDepth(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) return;
  const inputValue = e.target.value;
  const num = parseFloat(inputValue);
  depth.value.value = num.toFixed(1);
  depth.value.isValid = isValidDepth.value;
}
</script>

<template>
  <div class="input-group">
    <div>
      <label
        class="required"
        for="depth"
        >Max. Depth</label
      >
      <input
        id="depth"
        type="text"
        placeholder="0.0"
        :aria-invalid="!isValidDepth || undefined"
        maxlength="5"
        @input="updateDepth"
      />
      <ErrorMessage v-if="!isValidDepth">Must only contain numbers</ErrorMessage>
    </div>

    <div>
      <label class="required">Stomach Contents</label>
      <select v-model="stomach.value">
        <option value="Consumed waypoints">Consumed waypoints</option>
        <option value="Entire trade outpost">Entire trade outpost</option>
        <option value="Freighter components">Freighter components</option>
        <option value="Horrific Eggs">Horrific Eggs</option>
        <option value="Layers of teeth">Layers of teeth</option>
        <option value="Lost starships">Lost starships</option>
        <option value="Magma">Magma</option>
        <option value="Many Sentinels">Many Sentinels</option>
        <option value="Minerals">Minerals</option>
        <option value="Mostly sand">Mostly sand</option>
        <option value="Other gargantuans">Other gargantuans</option>
        <option value="Planetary beacon">Planetary beacon</option>
        <option value="Rubble">Rubble</option>
        <option value="Sentinel Walkers">Sentinel Walkers</option>
        <option value="Several Gek">Several Gek</option>
        <option value="Unpleasant liquid">Unpleasant liquid</option>
      </select>
    </div>
  </div>
</template>
