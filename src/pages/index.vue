<script setup>
import { ref } from "vue";
import { useDefinition } from "../composables/useDefinition";
const { definitions, search } = useDefinition();
const searchItem = ref("");
</script>

<template>
  <div>
    <input
      v-model="searchItem"
      @change="search(searchItem)"
      type="text"
      placeholder="Search a definition..."
      class="w-full py-4 mt-16 text-xl text-center rounded-full"
    />
    <div class="grid grid-cols-2 gap-16 pt-16">
      <div v-for="(definition, index) in definitions" :key="index">
        <p>
          {{ definition.definition }}
        </p>
      </div>
    </div>
  </div>
</template>
