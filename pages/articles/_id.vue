<template>
  <div class="container mx-auto">
    <h1 class="text-center text-6xl font-light mb-20">
      {{ article.title }}
    </h1>

    <div class="flex justify-between gap-10">
      <img class="max-h-96 rounded" :src="article.image" :alt="article.title" />

      <div class="w-full">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quos
          laborum in, amet numquam dolorum consectetur iusto inventore sit rem
          commodi? Inventore totam distinctio velit nobis iure minus unde
          laudantium ratione deleniti quaerat quisquam culpa numquam, optio
          perferendis ipsa rem quas, non minima maiores voluptates, odit magni
          officia. Distinctio, iste magnam quis quaerat harum et aspernatur
          animi, dolore quas laborum officia ipsa nesciunt laudantium? Ex
          consectetur eum deserunt impedit sunt magni vero ad ab dolorem vitae.
          Et, placeat. Officia fuga fugiat magni maiores qui libero, illo
          expedita cumque modi, ducimus dolorem reprehenderit eveniet mollitia,
          eius dolore harum perspiciatis iusto ipsum natus eaque cum quasi quo
          explicabo. Nisi temporibus adipisci dignissimos ad dolorum hic ea
          debitis dolor placeat ipsum? Voluptate, optio enim! Quisquam
          repudiandae deserunt sequi minima architecto, deleniti facilis ut
          veritatis possimus dicta eius sed quos velit inventore temporibus
          voluptatum debitis explicabo unde facere at libero reiciendis. Et
          voluptates omnis veniam, quaerat nostrum dolore sunt corporis.
          Doloribus odit officia id, quia atque nihil reiciendis a error
          voluptas laboriosam delectus consectetur eos iure culpa provident
          illum fugiat quam deleniti vitae fuga sequi! Libero temporibus
          doloribus quas id labore distinctio dolorem, nostrum, ab fugiat beatae
          minus? Nostrum repellat quaerat inventore quod ad!
        </p>
        <p class="my-10 text-4xl">
          Prix: <span class="text-red-400">{{ article.price }} €</span>
        </p>
        <nuxt-link class="font-semibold" to="/">Retour aux articles</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleView",
  async asyncData({ $axios, params }) {
    const article = await $axios.$get(
      "http://localhost:8000/articles/" + params.id
    );
    return { article };
  },
};
</script>
