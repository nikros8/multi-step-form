<script setup lang="ts">
import { baseFormStepData } from "@/store/store"

const planPrice = computed(() => {
  return baseFormStepData.switch.isYearly
    ? "$" + baseFormStepData.step4.summary.selectedPlan?.priceYearly + "/yr"
    : "$" + baseFormStepData.step4.summary.selectedPlan?.priceMonthly + "/mo"
})

const isYearly = computed(() => {
  return baseFormStepData.switch.isYearly ? " (Yearly)" : " (Monthly)"
})

const calculateFinalPrice = computed(() => {
  let finalPrice = 0
  if (baseFormStepData.step4.summary.selectedPlan) {
    if (baseFormStepData.switch.isYearly) {
      finalPrice += baseFormStepData.step4.summary.selectedPlan.priceYearly
      for (const addOnKey in baseFormStepData.step4.summary.selectedAddOns) {
        const addOnPrice = baseFormStepData.step4.summary.selectedAddOns[addOnKey]?.priceYearly
        if (addOnPrice) {
          finalPrice += addOnPrice
        }
      }
      return "+$" + finalPrice + "/yr"
    }
    if (!baseFormStepData.switch.isYearly) {
      finalPrice += baseFormStepData.step4.summary.selectedPlan.priceMonthly
      for (const addOnKey in baseFormStepData.step4.summary.selectedAddOns) {
        const addOnPrice = baseFormStepData.step4.summary.selectedAddOns[addOnKey]?.priceMonthly
        if (addOnPrice) {
          finalPrice += addOnPrice
        }
      }
      return "+$" + finalPrice + "/mo"
    }
  }
})
</script>

<template>
  <div class="base-form-step-container">
    <div class="title">Finishing up</div>
    <div class="hint">Double-check everything looks OK before confirming.</div>
    <div class="base-form-step-content-container">
      <div class="summary">
        <div class="plan">
          <div class="plan-name">
            {{ baseFormStepData.step4.summary.selectedPlan?.name + isYearly }}
            <div class="plan-change-button" @click="baseFormStepData.currentStep = 2">Change</div>
          </div>
          <div class="plan-price">
            {{ planPrice }}
          </div>
        </div>
        <div class="addOns">
          <div v-for="addOn in baseFormStepData.step4.summary.selectedAddOns" class="addOn">
            <div class="addOn-name">{{ addOn?.name }}</div>
            <div class="addOn-price">
              {{
                baseFormStepData.switch.isYearly
                  ? "+$" + addOn?.priceYearly + "/yr"
                  : "+$" + addOn?.priceMonthly + "/mo"
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="final-price-container">
        <div class="final-price-title">
          Total{{ baseFormStepData.switch.isYearly ? " (per year)" : " (per month)" }}
        </div>
        <div class="final-price-value">{{ calculateFinalPrice }}</div>
      </div>
    </div>
    <div class="step-navigation-wrapper">
      <button @click="baseFormStepData.functions.previousStep" class="button-previous-step">
        Go Back
      </button>
      <button @click="baseFormStepData.functions.nextStep()" class="button-confirm">Confirm</button>
    </div>
  </div>
</template>

<style scoped>
.summary {
  box-sizing: border-box;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  background-color: #f7f7fb;
  border-radius: 6px;
}
.summary .plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  border-bottom: 1px solid #e6e7ed;
}
.summary .plan .plan-name {
  display: flex;
  flex-direction: column;
  color: #2b4f7e;
  font-size: 15px;
  font-weight: 500;
}
.summary .plan .plan-name .plan-change-button {
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
  color: #939393;
  font-size: 14px;
}
.summary .plan .plan-name .plan-change-button:hover {
  color: #4f519e;
}
.summary .plan .plan-price {
  color: #2b4f7e;
  font-weight: 500;
}

.summary .addOns {
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-bottom: 23px;
}
.summary .addOns .addOn {
  display: flex;
  justify-content: space-between;
}
.summary .addOns .addOn:not(:first-child) {
  margin-top: 20px;
}
.summary .addOns .addOn .addOn-name {
  color: #a3a4ad;
}
.summary .addOns .addOn .addOn-price {
  color: #2b4f7e;
}
.final-price-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  box-sizing: border-box;
  padding-right: 25px;
  padding-left: 25px;
}
.final-price-container .final-price-title {
  font-size: 14px;
  color: #a3a4ad;
}
.final-price-container .final-price-value {
  font-size: 20px;
  font-weight: 700;
  color: #2b4f7e;
}
</style>
