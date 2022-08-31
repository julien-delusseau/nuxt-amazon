<template>
  <div class="container mx-auto">
    <h1 class="text-center text-6xl">Connexion</h1>

    <form
      @submit.prevent="onSubmit"
      class="w-1/2 mx-auto mt-10 p-4 border border-gray-100 rounded shadow-md"
    >
      <custom-input type="email">Votre adresse email</custom-input>
      <custom-input type="password">Votre mot de passe</custom-input>
      <custom-button type="submit">Me connecter</custom-button>
    </form>
  </div>
</template>

<script>
import CustomInput from "~/components/ui/CustomInput.vue";
import CustomButton from "~/components/ui/CustomButton.vue";
export default {
  name: "AuthPage",
  layout: "admin",
  components: { CustomInput, CustomButton },
};
</script>
