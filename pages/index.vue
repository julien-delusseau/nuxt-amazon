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
  async asyncData({ $axios }) {
    const articles = await $axios.$get("http://localhost:8000/articles");
    return { articles };
  },
};
</script>
