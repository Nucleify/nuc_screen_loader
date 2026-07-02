<template>
  <div class="screen-loader-container">
    <div class="screen-loader-content">
      <ad-logo-svg class="loader-image" nui-type="main" dimensions="125" />
      <ad-progress-bar mode="indeterminate" width="100px" height="10px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AdLogoSvg, hideLoader } from 'nucleify'

onMounted(() => {
  hideLoader()
})
</script>

<style lang="scss">
@import 'index';
</style>
