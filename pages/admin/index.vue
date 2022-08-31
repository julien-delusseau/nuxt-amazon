<template>
  <div class="container mx-auto">
    <section class="text-center mb-10">
      <custom-button type="button" @click="$router.push('/admin/new-article')"
        >Créer un nouvel article</custom-button
      >
    </section>

    <section>
      <articles-list is-admin :articles="articles" />
    </section>
  </div>
</template>

<script>
import articles from "~/data/fakers";
import ArticlesList from "~/components/articles/ArticlesList.vue";
import CustomButton from "~/components/ui/CustomButton.vue";
export default {
  name: "AdminView",
  layout: "admin",
  components: { ArticlesList, CustomButton },
  data() {
    return { articles };
  },
};
</script>
