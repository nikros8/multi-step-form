<script setup lang="ts">
import { baseFormStepData } from "@/store/store"
const currentStep = computed(() => {
  return baseFormStepData.currentStep
})
</script>

<template>
  <div class="sidebar">
    <div class="steps-container">
      <div class="step">
        <div :class="['step-circle', currentStep === 1 ? 'active' : null]">
          <div class="step-number">1</div>
        </div>
        <div class="wrapper">
          <div class="step-title-number">STEP 1</div>
          <div class="step-title-info">YOUR INFO</div>
        </div>
      </div>
      <div class="step">
        <div :class="['step-circle', currentStep === 2 ? 'active' : null]">
          <div class="step-number">2</div>
        </div>
        <div class="wrapper">
          <div class="step-title-number">STEP 2</div>
          <div class="step-title-info">SELECT PLAN</div>
        </div>
      </div>
      <div class="step">
        <div :class="['step-circle', currentStep === 3 ? 'active' : null]">
          <div class="step-number">3</div>
        </div>
        <div class="wrapper">
          <div class="step-title-number">STEP 3</div>
          <div class="step-title-info">ADD-ONS</div>
        </div>
      </div>
      <div class="step">
        <div :class="['step-circle', currentStep === 4 ? 'active' : null]">
          <div class="step-number">4</div>
        </div>
        <div class="wrapper">
          <div class="step-title-number">STEP 4</div>
          <div class="step-title-info">SUMMARY</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  max-width: 274px;
  width: 100%;
  border-radius: 12px;
  background: url(/assets/images/bg-sidebar-desktop.svg);
}

.sidebar .steps-container {
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 32px;
}
.sidebar .steps-container .step {
  display: flex;
  align-items: center;
  margin-top: 32px;
}
.sidebar .steps-container .step .step-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
}
.sidebar .steps-container .step .step-circle.active {
  color: #254b70;
  background-color: #c3e4f4;
}
.sidebar .steps-container .step .step-circle .step-number {
  font-size: 14px;
  font-weight: 700;
}

.sidebar .steps-container .step .wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.sidebar .steps-container .step .wrapper .step-title-number {
  color: #9fa0d0;
  font-size: 12px;
}
.sidebar .steps-container .step .wrapper .step-title-info {
  color: white;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-top: 3px;
}

@media (max-width: 800px) {
  .sidebar {
    z-index: -1;
    position: absolute;
    justify-content: center;
    align-items: flex-start;
    max-width: unset;
    height: 172px;
    top: 0;
    left: 0;
    border-radius: 0;
    background: url(/assets/images/bg-sidebar-mobile.svg) center/cover;
  }
  .sidebar .steps-container {
    display: flex;
    gap: 16px;
    margin: 0;
  }
  .sidebar .steps-container .step .wrapper {
    display: none;
  }
}
</style>
