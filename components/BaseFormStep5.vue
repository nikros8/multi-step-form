<script setup lang="ts">
import iconSuccess from "/assets/images/icon-thank-you.svg"
</script>

<template>
  <div class="base-form-step-success">
    <div class="content-container">
      <img :src="iconSuccess" class="image-success" />
      <div class="title">THANK YOU!</div>
      <div class="description">
        Thanks for confirming your subscription! We hope you have fun using your platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </div>
    </div>
  </div>
</template>

<style scoped>
.base-form-step-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 440px;
  width: 100%;
}
.content-container img {
  width: 80px;
  height: 80px;
}
.content-container .title {
  font-size: 32px;
  color: #173c69;
  font-weight: 700;
  margin-top: 30px;
}

.content-container .description {
  text-align: center;
  color: #a8a8b1;
  line-height: 1.5;
  margin-top: 16px;
}
@media (max-width: 600px) {
  .base-form-step-success {
    height: 400px;
  }
}
</style>
