<template>
  <nuxt-link :to="generateLink" class="border rounded overflow-hidden">
    <div
      class="bg-center bg-contain w-full h-52 bg-no-repeat border-b"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="p-6 bg-blue-50">
      <h4 class="text-2xl">{{ title }}</h4>
      <h4 class="text-3xl my-3">{{ price }} €</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        neque accusamus. Similique deserunt officia, provident dignissimos
        facilis tempora nostrum neque?
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    generateLink() {
      return this.isAdmin ? `/admin/${this.id}` : `/articles/${this.id}`;
    },
  },
};
</script>
