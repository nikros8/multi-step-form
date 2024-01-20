<script setup lang="ts">
import { baseFormStepComponents, baseFormStepData } from "~/store/store"
</script>

<template>
  <main>
    <div class="form-container">
      <component :is="baseFormStepComponents[baseFormStepData.currentStep]" />
      <button @click="baseFormStepData.functions.previousStep">Back</button>
      <button @click="baseFormStepData.functions.nextStep">Next</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

main .form-container {
  height: 600px;
  max-width: 940px;
  width: 100%;
  border-radius: 18px;
  background-color: white;
}
</style>
