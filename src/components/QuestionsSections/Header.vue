<template>
  <div class="bg-lightBlack  flex justify-between items-center text-white py-4 px-5">
    <div
      class="
        border
        rounded
        hover:bg-orange hover:border-orange
        text-center
        flex
        gap-1
        py-2
        px-4
        cursor-pointer
      "
      @click="previous()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      Previous
    </div>
    <div>Question 12 Of 19</div>
    <div
      class="
        border
        rounded
        hover:bg-orange hover:border-orange
        text-center
        flex
        gap-1
        py-2
        px-4
        cursor-pointer
      "
      @click="next()"
    >
      Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "question-header",
  props:['questionNum'],
  computed:{
    ...mapGetters(['getCurrentQue'])
  },
  methods:{
    next(){
      if(this.getCurrentQue < this.questionNum-1){
        this.$store.commit('setCurrentQue' , this.getCurrentQue+1);
      }
    },
    previous(){
      if(this.getCurrentQue > 0){
        console.log(this.getCurrentQue)
        this.$store.commit('setCurrentQue' , this.getCurrentQue-1);
      }else{
        this.$store.commit('setCurrentQue' , 0);
      }
    }
  }
};
</script>
