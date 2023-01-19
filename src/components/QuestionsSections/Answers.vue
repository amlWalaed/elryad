<template>
  <section>
    <div class="flex justify-between font-bold mb-4" v-if="disableBtns">
      <span v-if="answer" class="text-green">&#10003; Correct Answer</span>
      <span v-else class="text-red"> &#x2717; Incorrect Answer</span>
      <span class="text-orange">Previous Solutions</span>
    </div>
    <div
      class="
        border border-gray
        py-2
        px-3
        bg-white
        flex
        gap-3
        items-center
        rounded
        mb-3
        relative
        overflow-hidden
        answer-container
      "
      v-for="(answer, i) in answers"
      :key="i"
      ref="answerContainer"
      :data-answer="i"
    >
      <div class="absolute left-0 h-full"></div>
      <div class="relative w-[22px] h-[22px] z-10">
        <input
          type="radio"
          name="answer"
          :value="answer.answer"
          id="answer1"
          class="z-10 relative w-full h-full opacity-0"
          ref="input"
          @click="selectAnswer(answer)"
          :disabled="disableBtns"
        />
        <span
          class="
            absolute
            w-full
            h-full
            bg-gray
            rounded
            left-0
            text-gray text-center
          "
        >
          &#10003;
        </span>
      </div>
      <label for="answer1" class="z-10">{{ answer.answer }}</label>
    </div>
    <button
      type="submit"
      class="bg-orange text-white py-3 px-5 w-36 rounded my-6 opacity-50"
      :class="{ 'shadow-3xl shadow-orange opacity-100': submit }"
      @click="checkAnswer()"
    >
      Submit Answer
    </button>
  </section>
</template>
<script>
export default {
  name: "Answers",
  props: ["answers","status"],
  data() {
    return {
      disableBtns: false,
      userAnswer: false,
      submit: false,
      answer: false,
    };
  },
  computed: {
    getCorrectAnswer: function () {
      let correctAnswer = "";
      let maxPercentage = 0;
      Object.entries(this.answers).forEach(answer=>{
        if (answer[1].percentage > maxPercentage) {
          maxPercentage = answer[1].percentage;
          correctAnswer = answer;
        }
      })
      return correctAnswer;
    },
  },
  methods: {
    selectAnswer: function (answer) {
      let answerContainers = document.querySelectorAll(".answer-container");
      answerContainers.forEach((answerContainer) => {
        answerContainer.classList.remove("selected");
        if (
          this.answers[answerContainer.dataset.answer].answer ==
          answer.answer
        ) {
          answerContainer.classList.add("selected");
          this.submit = true;
          this.userAnswer = answerContainer.dataset.answer;
        }
      });
    },
    checkAnswer: function () {
      this.disableBtns = true;
      document.querySelector("button").style.display = "none";
      let answerContainers = document.querySelectorAll(".answer-container");
      answerContainers.forEach((answerContainer) => {
        answerContainer.childNodes[0].classList.add("percentage");
        answerContainer.childNodes[0].style.width =
          this.answers[answerContainer.dataset.answer].percentage + "%";
        answerContainer.childNodes[1].style.display = "none";
        let percentageValue = document.createElement("span");
        percentageValue.innerText =
          this.answers[answerContainer.dataset.answer].percentage + "%";
        percentageValue.classList.add("z-10");
        answerContainer.classList.add("justify-between");
        answerContainer.appendChild(percentageValue);
        if (answerContainer.classList.contains("selected")) {
          answerContainer.classList.remove("selected");
          if (answerContainer.dataset.answer === this.getCorrectAnswer[0]) {
            answerContainer.childNodes[0].classList.add("correct");
            answerContainer.childNodes[3].style.color = "#12A008";
            this.$store.dispatch('fetchAnswer','correct-answered')
            this.answer=true
          } else {
            answerContainer.childNodes[0].classList.add("wrong");
            answerContainer.childNodes[3].style.color = "#E71414";
            this.$store.dispatch('fetchAnswer','wrong-answered')
          }
        }
        if (answerContainer.dataset.answer === this.getCorrectAnswer[0]) {
          answerContainer.childNodes[0].classList.add("correct");
          answerContainer.childNodes[3].style.color = "#12A008";
        }
      });
    },
    
  },
  mounted(){
    console.log(this.status)
  this.status != "not-answered" ? this.checkAnswer():''
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
input:checked {
  & + span {
    background-color: white;
    color: #ff4d00;
  }
}
.selected {
  background-color: #ff4d00;
  color: #fff;
}
.percentage {
  background-color: #ddd;
  color: black;
  transition: all 0.5s;
}
.correct {
  background-color: #bbffb6;
  &::after {
    content: "";
    height: 100%;
    background-color: #12a008;
    width: 8px;
    display: inline-block;
  }
}
.wrong {
  background-color: #ffb6b6;
  &::after {
    content: "";
    height: 100%;
    background-color: #e71414;
    width: 8px;
    display: inline-block;
  }
}
.color-red {
  color: "#E71414";
}
.color-green {
  color: "#12A008";
}
</style>