<template>
  <div class="bima-main-layout">
    <bima-carriers-header />
    <bima-carriers-content />
    <bima-carriers-footer />
  </div>
</template>
<script>
import BimaCarriersHeader from "./BimaCarriersHeader.vue";
import BimaCarriersContent from "@/views/content/BimaCarriersContent.vue";
import BimaCarriersFooter from "./BimaCarriersFooter.vue";
export default {
  name: "main-layout",
  components: { BimaCarriersHeader, BimaCarriersContent, BimaCarriersFooter },
};
</script>
