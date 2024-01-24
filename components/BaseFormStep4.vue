<script setup lang="ts">
import { baseFormStepData } from "@/store/store"

const selectedSubscriptionPrice = computed(() => {
  return baseFormStepData.switch.isYearly
    ? baseFormStepData.step4.summary.selectedSubscription?.priceYearly
    : baseFormStepData.step4.summary.selectedSubscription?.priceMonthly
})
</script>

<template>
  <div class="base-form-step-container">
    <div class="title">Finishing up</div>
    <div class="hint">Double-check everything looks OK before confirming.</div>
    <div class="base-form-step-content-container">
      {{ baseFormStepData.step4.summary.selectedSubscription?.name }}
      {{ selectedSubscriptionPrice }}
    </div>
    <div class="navigation-buttons">
      <button @click="baseFormStepData.functions.previousStep" class="button-previous-step">
        Go Back
      </button>
      <button class="button-next-step">Confirm</button>
    </div>
  </div>
</template>

<style scoped></style>
