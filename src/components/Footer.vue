<template>
  <footer class="text-center text-white">
    <div class="bg-lightBlack flex justify-center items-center flex-col py-10">
      <div>
        <img src="@/assets/01.png" class="border border-orange w-64" />
      </div>
      <ul class="mx-auto text-lg flex justify-between gap-3 lg:gap-10 pt-4">
        <li class="hover:text-banky "><a href="#">Home</a></li>
        <li class="hover:text-banky "><a href="#">About US</a></li>
        <li class="hover:text-banky "><a href="#">Works With Us </a></li>
        <li class="hover:text-banky "><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="bg-darkBlack py-3 text-base">
      all rights reserved to studyblood
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer-Section",
};
</script>
