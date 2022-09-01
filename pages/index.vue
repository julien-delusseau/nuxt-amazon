<template>
  <section class="container mx-auto">
    <articles-list :articles="articles" keep-alive />
  </section>
</template>

<script>
import ArticlesList from "~/components/articles/ArticlesList.vue";
export default {
  name: "IndexPage",
  components: { ArticlesList },
  computed: {
    articles() {
      return this.$store.getters.getArticles;
    },
  },
};
</script>
