<template>
  <header class="py-6 px-6 mb-20 flex items-center text-white bg-gray-800">
    <nuxt-link to="/">
      <h2 class="text-2xl font-semibold">Amazon</h2>
    </nuxt-link>
    <ul class="flex justify-center items-center ml-auto gap-6">
      <li>
        <nuxt-link to="/admin/auth"> Bonjour, Identifiez-vous </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin">Admin</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
