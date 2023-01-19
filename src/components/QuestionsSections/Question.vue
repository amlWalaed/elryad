<template>
  <div class="bg-white my-4 rounded p-5 border border-gray">
    <div class="leading-7">
    {{ question }}
    </div>
    <div class="">

    </div>
  </div>
</template>
<script>
export default{
    name:"Question",
    props:['question']
}
</script>
