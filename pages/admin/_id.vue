<template>
  <div class="container mx-auto">
    <admin-form :article="loadedArticle">Modifier un article</admin-form>
  </div>
</template>

<script>
import AdminForm from "~/components/admin/AdminForm.vue";
export default {
  name: "ArticleId",
  layout: "admin",
  components: { AdminForm },
  async asyncData({ $axios, params }) {
    const loadedArticle = await $axios.$get(
      "http://localhost:8000/articles/" + params.id
    );
    return { loadedArticle };
  },
};
</script>
