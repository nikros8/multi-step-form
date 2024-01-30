<script setup lang="ts">
import { baseFormStepData, type Input } from "@/store/store"

const isInputEmpty = (input: Input): boolean => {
  if (input.value.length < 1) {
    input.error = "Can't be empty."
    return true
  } else {
    input.error = ""
    return false
  }
}

const handleInput = (): boolean => {
  const inputErrorsCount = ref(0)

  for (const inputKey in baseFormStepData.step1.inputs) {
    const input = baseFormStepData.step1.inputs[inputKey]
    switch (input.type) {
      case baseFormStepData.step1.inputs.fullName.type:
        isInputEmpty(input) ? inputErrorsCount.value++ : null
        break
      case baseFormStepData.step1.inputs.emailAddress.type:
        isInputEmpty(input) ? inputErrorsCount.value++ : null
        break
      case baseFormStepData.step1.inputs.phoneNumber.type:
        isInputEmpty(input) ? inputErrorsCount.value++ : null
        break
    }
  }
  return inputErrorsCount.value === 0 ? true : false
}

const nextStep = () => {
  handleInput() ? baseFormStepData.functions.nextStep() : null
}
</script>

<template>
  <div class="base-form-step-container">
    <div class="title">Personal info</div>
    <div class="hint">Please provide your name, email address, and phone number.</div>
    <div class="inputs">
      <div class="input-container">
        <label for="name">Name</label><br />
        <input
          v-model="baseFormStepData.step1.inputs.fullName.value"
          class="input-personal-info"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
        />
        <div v-if="baseFormStepData.step1.inputs.fullName.error" class="input-error">
          {{ baseFormStepData.step1.inputs.fullName.error }}
        </div>
      </div>
      <div class="input-container">
        <label for="email">Email Address</label><br />
        <input
          v-model="baseFormStepData.step1.inputs.emailAddress.value"
          class="input-personal-info"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <div v-if="baseFormStepData.step1.inputs.emailAddress.error" class="input-error">
          {{ baseFormStepData.step1.inputs.emailAddress.error }}
        </div>
      </div>
      <div class="input-container">
        <label for="tel">Phone Number</label><br />
        <input
          v-model="baseFormStepData.step1.inputs.phoneNumber.value"
          class="input-personal-info"
          type="tel"
          id="tel"
          placeholder="e.g. +1 234 567 890"
        />
        <div v-if="baseFormStepData.step1.inputs.phoneNumber.error" class="input-error">
          {{ baseFormStepData.step1.inputs.phoneNumber.error }}
        </div>
      </div>
      <button @click="nextStep()" class="button-next-step">Next Step</button>
    </div>
  </div>
</template>

<style scoped>
.base-form-step-container .inputs {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 17px;
}
.base-form-step-container .inputs button {
  margin-left: auto;
  margin-top: auto;
}
.base-form-step-container .inputs .input-container {
  margin-top: 22px;
}
.base-form-step-container .inputs .input-container label {
  display: inline-block;
  color: #385b76;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
}
.base-form-step-container .inputs .input-container .input-error {
  position: absolute;
  color: red;
}
</style>
