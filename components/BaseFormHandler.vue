<script setup lang="ts">
import { baseFormStepComponents, baseFormStepData } from "@/store/store"
</script>

<template>
  <main>
    <div class="container">
      <SidebarSteps />
      <component :is="baseFormStepComponents[baseFormStepData.currentStep]" />
      <!-- <button @click="baseFormStepData.functions.previousStep">Back</button>
      <button @click="baseFormStepData.functions.nextStep">Next</button> -->
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

main .container {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 600px;
  max-width: 940px;
  width: 100%;
  padding: 16px 100px 16px 16px;
  box-shadow: 3px 4px 45px -25px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  background-color: white;
}

main .container .current-step-info {
  max-width: 274px;
  width: 100%;
  border-radius: 12px;
  background: url(/assets/images/bg-sidebar-desktop.svg);
}
</style>
