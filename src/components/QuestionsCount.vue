<template>
    <section class="overflow-hidden rounded-md w-full lg:w-1/6">
        <header class="bg-lightBlack  flex justify-between items-center text-white py-5 px-5 text-xl">
            <span>Score</span>
            <span class="text-lightBank">65%</span>
        </header>
        <table class="bg-white w-full flex flex-row lg:flex-col text-lightBlack">
            <tr class="text-center flex flex-col lg:flex-row lg:w-full flex-grow" v-for="i in getCurrentQue+1" :key="i">
                <td class="border border-gray lg:w-1/2">{{i}}</td>
                <td class="border border-gray lg:w-1/2 text-green" v-if="getQuestion[i-1].status =='correct-answered'"> &#10003;</td>
                <td class="border border-gray lg:w-1/2 " v-else-if="getQuestion[i-1].status =='not-answered'"> - </td>
                <td class="border border-gray lg:w-1/2 text-red" v-else-if="getQuestion[i-1].status =='wrong-answered'"> &#x2717; </td>
            </tr>
        </table>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    name:"Questions-count",
    computed:{
        ...mapGetters(['getQuestion','getCurrentQue'])
    }
}
</script>