<template>
  <div class="grid grid-cols-4 gap-4">
    <article-item
      v-for="article in articles"
      :key="article.id"
      :is-admin="isAdmin"
      :id="article.id"
      :title="article.title"
      :price="article.price"
      :image="article.image"
    />
  </div>
</template>

<script>
import ArticleItem from "~/components/articles/ArticleItem.vue";
export default {
  name: "ArticlesList",
  components: { ArticleItem },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>
