<script setup lang="ts">
import { baseFormStepComponents, baseFormStepData } from "@/store/store"
</script>

<template>
  <main>
    <div class="container">
      <SidebarSteps />
      <component :is="baseFormStepComponents[baseFormStepData.currentStep]" />
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
@media (max-width: 900px) {
  main .container {
    padding-right: 30px;
  }
}

@media (max-width: 800px) {
  main {
    align-items: unset;
    min-height: unset;
    padding: 0 16px 90px;
  }
  main .container {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0 24px;
    margin-top: 98px;
  }
}
</style>
