<script setup lang="ts">
import { baseFormStepData } from "@/store/store"
</script>

<template>
  <div class="base-form-step-container">
    <div class="title">Personal info</div>
    <div class="hint">Please provide your name, email address, and phone number.</div>
    <div class="inputs">
      <div class="input-container">
        <label for="name">Name</label><br />
        <input
          v-model="baseFormStepData.step1.inputs.fullName"
          class="input-personal-info"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div class="input-container">
        <label for="email">Email Address</label><br />
        <input
          v-model="baseFormStepData.step1.inputs.emailAddress"
          class="input-personal-info"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div class="input-container">
        <label for="tel">Phone Number</label><br />
        <input
          v-model="baseFormStepData.step1.inputs.phoneNumber"
          class="input-personal-info"
          type="tel"
          id="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <button @click="baseFormStepData.functions.nextStep" class="button-next-step">
        Next Step
      </button>
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
</style>
