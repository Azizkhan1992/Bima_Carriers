<template>
  <div class="bima-content-container">
    <bima-content-top />
    <bima-slider-content />
    <bima-news-content />
    <bima-reviews />
    <about-company />
  </div>
</template>
<script>
import BimaContentTop from "@/components/content-items/content-top-item/BimaContentTop.vue";
import BimaSliderContent from "@/components/content-items/content-top-item/BimaSliderContent.vue";
import BimaNewsContent from "@/components/content-items/content-top-item/BimaNewsContent.vue";
import BimaReviews from "@/components/content-items/content-top-item/BimaReviews.vue";
import AboutCompany from "@/components/content-items/content-top-item/AboutCompany.vue";
export default {
  name: "bima-content",
  components: {
    BimaContentTop,
    BimaSliderContent,
    BimaNewsContent,
    BimaReviews,
    AboutCompany,
  },
};
</script>
