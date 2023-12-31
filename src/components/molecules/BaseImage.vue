<template>
  <figure>
    <img :src="require(`@/assets/img/${fileName}`)" alt="Slide" class="image" />
    <BaseCaption :text="captionText" />
  </figure>
</template>

<script>
import BaseCaption from "@/components/atoms/BaseCaption.vue";

export default {
  name: "BaseImage",
  components: {
    BaseCaption,
  },
  props: {
    fileName: {
      type: String,
      required: true,
    },
    captionText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: auto;
  max-width: 100%;
}
</style>
