<template>
  <div class="container mx-auto">
    <section class="text-center mb-10">
      <custom-button type="button" @click="$router.push('/admin/new-article')"
        >Créer un nouvel article</custom-button
      >
    </section>

    <section>
      <articles-list is-admin :articles="articles" keep-alive />
    </section>
  </div>
</template>

<script>
import ArticlesList from "~/components/articles/ArticlesList.vue";
import CustomButton from "~/components/ui/CustomButton.vue";
export default {
  name: "AdminView",
  layout: "admin",
  components: { ArticlesList, CustomButton },
  async asyncData({ $axios }) {
    const articles = await $axios.$get("http://localhost:8000/articles");
    return { articles };
  },
};
</script>
