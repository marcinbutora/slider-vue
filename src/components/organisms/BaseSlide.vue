<template>
  <ArrowButton />
  <BaseImage />
  <ArrowButton />
</template>

<script>
import BaseImage from "../molecules/BaseImage.vue";
import ArrowButton from "../atoms/ArrowButton.vue";

export default {
  name: "BaseSlide",
  components: {
    BaseImage,
    ArrowButton,
  },
};
</script>

<style lang="scss"></style>
