<template>
  <section
    class="overflow-hidden rounded-md border border-gray w-full lg:w-2/3"
  >
    <Header
      :questionNum="getQuestion.length"
    />
    <div class="flex flex-col px-5">
      <Question :question="getQuestion[getCurrentQue].question" />
      <Answers
        :answers="getQuestion[getCurrentQue].answers"
        :status="getQuestion[getCurrentQue].status"
        :key="getCurrentQue"
      />

      
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "./Header.vue";
import Question from "./Question.vue";
import Answers from "./Answers.vue";
export default {
  name: "Question-Container",
  data() {
    return {
    };
  },
  components: { Header, Question, Answers },
  computed: {
    ...mapGetters(["getQuestion","getCurrentQue"]),
  },
  methods: {
    updateCount(count) {
      this.currentQue = count;
    },
    selectedAnswer(answer) {
      
      this.answer = answer;
    },
    
  },
};
</script>
