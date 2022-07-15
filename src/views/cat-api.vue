<template>
  <div class="flex flex-col items-center justify-center">
    <div class="m-5 flex flex-wrap justify-center items-center">
      <CardController />
    </div>
  </div>
</template>

<script>
import CardController from "../components/card-controller/card-controller.vue";

export default {
  components: { CardController },
};
</script>
