<template>
  <div class="container mx-auto">
    <admin-form>Créer un nouvel article</admin-form>
  </div>
</template>

<script>
import AdminForm from "~/components/admin/AdminForm.vue";
export default {
  name: "NewArticle",
  components: { AdminForm },
};
</script>
