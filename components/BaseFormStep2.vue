<script setup lang="ts">
import { baseFormStepData, type StepSubscription } from "@/store/store"

const handleSelectPlan = (target: StepSubscription) => {
  for (const planKey in baseFormStepData.step2.subscriptions) {
    const plan = baseFormStepData.step2.subscriptions[planKey]
    if (plan === target) {
      plan.isSelected = true
      baseFormStepData.step4.summary.selectedSubscription = plan
    } else {
      plan.isSelected = false
    }
  }
}

const isSubscriptionSelected = (): boolean => {
  return baseFormStepData.step4.summary.selectedSubscription ? true : false
}

const handleNextButton = () => {
  isSubscriptionSelected() ? baseFormStepData.functions.nextStep() : null
}
</script>

<template>
  <div class="base-form-step-container">
    <div class="title">Select your plan</div>
    <div class="hint">You have the option of monthly or yearly billing.</div>
    <div class="base-form-step-content-container">
      <div class="selector-subscriptions">
        <div
          v-for="plan in baseFormStepData.step2.subscriptions"
          @click="handleSelectPlan(plan)"
          :class="['plan', plan.isSelected ? 'active' : '']"
        >
          <img :src="plan.icon" :alt="plan.name" />
          <div class="plan-name">{{ plan.name }}</div>
          <div class="plan-price">
            ${{
              baseFormStepData.switch.isYearly
                ? plan.priceYearly + "/yr"
                : plan.priceMonthly + "/mo"
            }}
          </div>
        </div>
      </div>
      <div class="switch-payment-schedule-wrapper">
        <div class="switch-payment-schedule">
          <span class="monthly">Monthly</span>
          <label class="switch">
            <input v-model="baseFormStepData.switch.isYearly" type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span class="yearly">Yearly</span>
        </div>
      </div>
      <div class="navigation-buttons">
        <button @click="baseFormStepData.functions.previousStep" class="button-previous-step">
          Go Back
        </button>
        <button @click="handleNextButton" class="button-next-step">Next Step</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selector-subscriptions {
  display: flex;
  justify-content: space-between;
}
.selector-subscriptions .plan {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 138px;
  height: 160px;
  border: 1px solid #dbdbde;
  border-radius: 8px;
  box-sizing: border-box;
  padding-top: 19px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
}

.selector-subscriptions .plan:hover {
  border: 1px solid #4f4a99;
}
.selector-subscriptions .plan.active {
  background-color: #f7f7fb;
  border-color: #4f4a99;
}
.selector-subscriptions .plan img {
  width: 40px;
  height: 40px;
}
.selector-subscriptions .plan .plan-name {
  font-size: 16px;
  font-weight: 500;
  color: #1c2949;
  margin-top: auto;
}
.selector-subscriptions .plan .plan-price {
  font-size: 14px;
  color: #a7a8ab;
  margin-top: 6px;
}

.switch-payment-schedule-wrapper {
  width: 100%;
  height: 48px;
  margin-top: 32px;
  border-radius: 8px;
  background-color: #f7f7fb;
}
.switch-payment-schedule {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 12px;
}
.switch-payment-schedule .monthly,
.switch-payment-schedule .yearly {
  color: #95969f;
  font-size: 14px;
  font-weight: 500;
}
.switch-payment-schedule .switch {
  position: relative;
  display: inline-block;
  margin-right: 25px;
  margin-left: 25px;
  width: 36px;
  height: 20px;
}
.switch-payment-schedule .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-payment-schedule .switch input:checked + .slider:before {
  -webkit-transform: translate(16px, 50%);
  -ms-transform: translate(16px, 50%);
  transform: translate(16px, 50%);
}

.switch-payment-schedule .switch .slider.round {
  border-radius: 34px;
}

.switch-payment-schedule .switch .slider.round:before {
  border-radius: 50%;
}
.switch-payment-schedule .switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1e2d53;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.switch-payment-schedule .switch .slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 50%;
  transform: translateY(50%);
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
</style>
