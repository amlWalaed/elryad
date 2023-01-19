<template>
  <div id="app">
    <Navbar />
    <div
      class="
        container
        py-14
        flex
        gap-8
        flex-wrap
        lg:flex-nowrap lg:flex-row
        flex-col-reverse
        items-start
      "
    >
      <QuestionsSections />
      <ExplanationOrReferences />
      <QuestionsCount />
    </div>
    <Footer-Section />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";
import QuestionsCount from "./components/QuestionsCount.vue";
import ExplanationOrReferences from "./components/ExplanationOrReferences.vue";
import QuestionsSections from "./components/QuestionsSections";
export default {
  components: { Navbar, FooterSection, QuestionsSections, QuestionsCount ,ExplanationOrReferences },
  created() {
    this.$store.dispatch("fetchQuestions");
  },

};
</script>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  font-family: "Calibri";
  background-color: #fdf6f0;
}
</style>
