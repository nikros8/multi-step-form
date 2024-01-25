<script setup lang="ts">
import { baseFormStepData } from "@/store/store"

const subscriptionPrice = computed(() => {
  return baseFormStepData.switch.isYearly
    ? "$" + baseFormStepData.step4.summary.selectedSubscription?.priceYearly + "/yr"
    : "$" + baseFormStepData.step4.summary.selectedSubscription?.priceMonthly + "/mo"
})

const isYearly = computed(() => {
  return baseFormStepData.switch.isYearly ? " (Yearly)" : " (Monthly)"
})

const calculateFinalPrice = computed(() => {
  let finalPrice = 0
  if (baseFormStepData.step4.summary.selectedSubscription) {
    if (baseFormStepData.switch.isYearly) {
      finalPrice += baseFormStepData.step4.summary.selectedSubscription.priceYearly
      for (const addOnKey in baseFormStepData.step4.summary.selectedAddOns) {
        const addOnPrice = baseFormStepData.step4.summary.selectedAddOns[addOnKey]?.priceYearly
        if (addOnPrice) {
          finalPrice += addOnPrice
        }
      }
      return finalPrice
    }
    if (!baseFormStepData.switch.isYearly) {
      finalPrice += baseFormStepData.step4.summary.selectedSubscription.priceMonthly
      for (const addOnKey in baseFormStepData.step4.summary.selectedAddOns) {
        const addOnPrice = baseFormStepData.step4.summary.selectedAddOns[addOnKey]?.priceMonthly
        if (addOnPrice) {
          finalPrice += addOnPrice
        }
      }
      return finalPrice
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
        <div class="subscription">
          <div class="subscription-name">
            {{ baseFormStepData.step4.summary.selectedSubscription?.name + isYearly }}
            <div class="subscription-change-button" @click="baseFormStepData.currentStep = 2">
              Change
            </div>
          </div>
          <div class="subscription-price">
            {{ subscriptionPrice }}
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
      <div>{{ calculateFinalPrice }}</div>
      <!-- <div ">
        <h1>{{ addOn?.name }}</h1>
        <p>{{ baseFormStepData.switch.isYearly ? addOn?.priceYearly : addOn?.priceMonthly }}</p>
      </div> -->
    </div>
    <div class="navigation-buttons">
      <button @click="baseFormStepData.functions.previousStep" class="button-previous-step">
        Go Back
      </button>
      <button class="button-next-step">Confirm</button>
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
.summary .subscription {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  border-bottom: 1px solid #e6e7ed;
}
.summary .subscription .subscription-name {
  display: flex;
  flex-direction: column;
  color: #2b4f7e;
  font-size: 15px;
  font-weight: 500;
}
.summary .subscription .subscription-name .subscription-change-button {
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
  color: #939393;
  font-size: 14px;
}
.summary .subscription .subscription-name .subscription-change-button:hover {
  color: #4f519e;
}
.summary .subscription .subscription-price {
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
</style>
