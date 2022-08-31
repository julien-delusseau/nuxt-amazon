<template>
  <div class="w-full mb-3">
    <label class="block mb-2">
      <slot />
    </label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full p-2 border border-gray-100 rounded outline-none"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full p-2 border border-gray-100 rounded outline-none"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    controlType: {
      type: String,
      default: "input",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
