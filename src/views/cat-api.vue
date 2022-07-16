<template>
  <div class="flex flex-col items-center justify-center">
    <div class="m-5 flex flex-wrap justify-center items-center">
      <Card
        v-bind:url="card.url"
        v-bind:srcImage="card.url"
        v-bind:title="card.title"
        v-bind:description="card.description"
        alt="Imagem do gatinho :3"
      />

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
    </div>
  </div>
</template>

<script>
import Card from "../components/card/card.vue";
import ButtonComponent from "../components/button/button-component.vue";
import { setVote, getCat, loadImage } from "../services";

export default {
  components: { ButtonComponent, Card },

  mounted() {
    this.changeCard();
  },

  data() {
    return {
      imageLoading: false,
      voteLoading: [false, false],
      voted: [false, false],
      card: {
        title: "",
        description: "",
        url: "",
      },
    };
  },

  methods: {
    async changeCard() {
      this.imageLoading = true;

      const { success, data } = await getCat();

      if (!success) return;

      this.card.url = data.url;

      await loadImage(data.url);
      this.resetState();

      this.card.title = data.id;
      this.card.description = data.url;
      this.card.url = data.url;
    },

    async vote(value) {
      if (this.voted[value]) {
        return;
      }

      this.voteLoading[value] = true;

      const response = await setVote({ id: this.card.title, value: value });

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
