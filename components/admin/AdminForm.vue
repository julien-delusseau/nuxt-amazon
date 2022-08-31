<template>
  <div>
    <h1 class="text-center text-6xl">
      <slot />
    </h1>

    <form
      @submit.prevent="onSave"
      class="w-1/2 mx-auto mt-10 p-4 border border-gray-100 rounded shadow-md"
    >
      <custom-input v-model="editedArticle.title"
        >Titre de l'article</custom-input
      >
      <custom-input v-model="editedArticle.price"
        >Prix de l'article</custom-input
      >
      <custom-input v-model="editedArticle.image"
        >Image de l'article</custom-input
      >
      <custom-button type="submit">Envoyer</custom-button>
      <div class="mt-6 text-center">
        <button
          @click="onCancel"
          type="button"
          class="font-semibold hover:text-red-500"
        >
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from "~/components/ui/CustomInput.vue";
import CustomButton from "../ui/CustomButton.vue";
export default {
  components: { CustomInput, CustomButton },
  name: "AdminForm",
  props: {
    article: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedArticle: this.article
        ? { ...this.article }
        : {
            title: "",
            price: "",
            image: "",
          },
    };
  },
  methods: {
    onSave() {
      console.log(this.editedArticle);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
