<template>
  <section class="overflow-hidden rounded-md w-full lg:w-1/4">
    <header
      class="
        bg-lightBlack
        flex
        justify-center
        items-center
        text-white
        py-5
        px-5
        text-xl
      "
    >
      <span v-if="getQuestion[getCurrentQue].status === 'not-answered'"
        >Reference Ranges</span
      >
      <span v-else>Links</span>
    </header>
    <div class="bg-white p-4 overflow-y-scroll ,max-h-[66vh]">
      <div v-if="getQuestion[getCurrentQue].status === 'not-answered'" >
        <div class="border-b-2 border-gray py-2" v-for="(reference , i ) in getQuestion[getCurrentQue].references" :key="i" >
          <div class="font-bold py-1">{{ reference[0] }}</div>
          <div class="text-lightBlack mb-2">{{ reference[1] }}</div>
        </div>
      </div>
      <div v-else class="text-blue">
        {{ getQuestion[getCurrentQue].explanation }}
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "explanation-or-references",
  computed: {
    ...mapGetters(["getQuestion", "getCurrentQue"]),
  },
};
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #DDD; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #787878; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #787878; 
}
</style>