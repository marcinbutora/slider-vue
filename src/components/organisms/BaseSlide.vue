<template>
  <ArrowButton :is-disabled="!isAbleToGoToPrevSlide" />
  <BaseImage :file-name="fileName" :caption-text="captionText" />
  <ArrowButton :is-disabled="!isAbleToGoToNextSlide" is-next />
</template>

<script>
import BaseImage from "@/components/molecules/BaseImage.vue";
import ArrowButton from "@/components/atoms/ArrowButton.vue";
import { computed, ref } from "@vue/reactivity";

export default {
  name: "BaseSlide",
  components: {
    BaseImage,
    ArrowButton,
  },
  props: {
    photoNumber: {
      type: String,
      default: "1",
    },
  },
  setup(props) {
    const images = require.context("/src/assets/img", false, /^.*\.jpg$/);

    const numberOfImages = images.keys().length;
    const slideNumber = ref(+props.photoNumber);

    const isAbleToGoToPrevSlide = computed(() => slideNumber.value !== 1);
    const isAbleToGoToNextSlide = computed(
      () => slideNumber.value !== numberOfImages
    );

    const fileName = computed(() => `${slideNumber.value}.jpg`);
    const captionText = computed(
      () => `${slideNumber.value}/${numberOfImages}`
    );

    return {
      isAbleToGoToPrevSlide,
      isAbleToGoToNextSlide,
      fileName,
      captionText,
    };
  },
};
</script>

<style lang="scss" scoped></style>
