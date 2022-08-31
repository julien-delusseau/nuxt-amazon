<template>
  <button
    class="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded py-2"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
};
</script>
