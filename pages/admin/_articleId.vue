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
  data() {
    return {
      loadedArticle: {
        id: 20,
        title: "Nintendo Switch OLED",
        price: "349.99",
        image:
          "https://www.backmarket.fr/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_f46f910f-110d-4f1c-825d-9009c4ebc7b2.jpg",
      },
    };
  },
};
</script>
