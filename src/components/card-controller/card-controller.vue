<template>
  <CatCard v-on:loaded="resetState()" ref="CatCards"></CatCard>

  <div class="flex flex-col items-center">
    <ButtonComponent
      v-bind:loading="voteLoading[1]"
      v-on:onclick="vote(1)"
      :text="voted[1] ? `Votado` : `Gostei  `"
      class="text-green-500"
    />

    <ButtonComponent
      v-bind:loading="imageLoading"
      v-on:onclick="changeCard()"
      text="Trocar"
      class="text-yellow-500"
    />

    <ButtonComponent
      v-bind:loading="voteLoading[0]"
      v-on:onclick="vote(0)"
      :text="voted[0] ? `Votado` : `Não Gostei`"
      class="text-red-500"
    />
  </div>
</template>

<script>
import CatCard from "../cat-card/cat-card.vue";
import ButtonComponent from "../button/button-component.vue";
import { setVote } from "../../services";

export default {
  components: { CatCard, ButtonComponent },

  data() {
    return {
      imageLoading: false,
      voteLoading: [false, false],
      voted: [false, false],
    };
  },

  methods: {
    changeCard() {
      this.imageLoading = true;
      if (!this.$refs.CatCards.loading) {
        this.$refs.CatCards.setCard();
      }
    },
    async vote(value) {
      if (this.voted[value]) {
        return;
      }

      this.voteLoading[value] = true;

      const imageId = this.$refs.CatCards.cardState.id;
      const response = await setVote({ id: imageId, value: value });

      if (response.success) this.voted[value] = true;

      this.voteLoading[value] = false;
    },
    resetState() {
      this.imageLoading = false;
      this.voteLoading = [false, false];
      this.voted = [false, false];
    },
  },
};
</script>
