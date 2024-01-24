<script setup lang="ts">
import { baseFormStepData } from "@/store/store"
const selectAddOn = (addOn: { isChecked: boolean }) => {
  addOn.isChecked = !addOn.isChecked
}
</script>

<template>
  <div class="base-form-step-container">
    <div class="title">Pick add-ons</div>
    <div class="hint">Add-ons help enhance your gaming experience.</div>
    <div class="base-form-step-content-container add-ons-container">
      <div
        v-for="addOn in baseFormStepData.step3.addOns"
        @click="selectAddOn(addOn)"
        :class="['add-on-item', addOn.isChecked ? 'active' : '']"
      >
        <input v-model="addOn.isChecked" type="checkbox" />
        <div class="add-on-info">
          <div class="add-on-title">{{ addOn.name }}</div>
          <div class="add-on-description">{{ addOn.description }}</div>
        </div>
        <div class="add-on-price">
          +${{
            baseFormStepData.switch.isYearly
              ? addOn.priceYearly + "/yr"
              : addOn.priceMonthly + "/mo"
          }}
        </div>
      </div>
    </div>
    <div class="navigation-buttons">
      <button @click="baseFormStepData.functions.previousStep" class="button-previous-step">
        Go Back
      </button>
      <button @click="baseFormStepData.functions.nextStep" class="button-next-step">
        Next Step
      </button>
    </div>
  </div>
</template>

<style scoped>
.add-ons-container .add-on-item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 23px;
  height: 81px;
  border: 1px solid #dcd9e0;
  border-radius: 10px;
}
.add-ons-container .add-on-item.active {
  background-color: #f7f7fb;
  border-color: #4e4e9b;
}
.add-ons-container .add-on-item:not(:first-child) {
  margin-top: 16px;
}
.add-ons-container .add-on-item:hover {
  cursor: pointer;
  border-color: #4e4e9b;
}

.add-ons-container .add-on-item input {
  pointer-events: none;
}
.add-ons-container .add-on-item .add-on-info {
  display: flex;
  flex-direction: column;
  margin-left: 24px;
}
.add-ons-container .add-on-item .add-on-info .add-on-title {
  font-size: 16px;
  font-weight: 500;
  color: #1f3049;
}
.add-ons-container .add-on-item .add-on-info .add-on-description {
  font-size: 15px;
  font-weight: 400;
  color: #8a8b94;
}
.add-ons-container .add-on-item .add-on-price {
  margin-left: auto;
  font-size: 15px;
  color: #4e4e9b;
}
</style>
