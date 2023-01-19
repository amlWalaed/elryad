<template>
  <nav class="shadow">
    <div class="container py-5 flex items-center justify-between">
      <div class="flex items-center gap-2 flex-col lg:flex-row">
        <span class="d-block w-24 h-20"><img src="@/assets/logo.png" /> </span>
        <span class="text-orange text-3xl"> StudyBlood </span>
      </div>
      <ul class="mx-auto text-lg hidden lg:flex gap-10">
        <li class="hover:text-orange">
          <a href="#"
            ><svg
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </li>
        <li class="hover:text-orange"><a href="#">About US</a></li>
        <li class="hover:text-orange"><a href="#">Works With Us </a></li>
        <li class="hover:text-orange"><a href="#">Contact Us</a></li>
      </ul>
      <div class="flex gap-1 lg:gap-5 text-base font-medium">
        <a
          href="#"
          class="
            bg-orange
            text-white
            py-3
            px-2
            lg:px-5
            rounded
            hover:opacity-50
          "
          >My Profile</a
        >
        <a
          href="#"
          class="
            border border-semiBlack
            text-semiBlack
            py-3
            px-2
            lg:px-5
            rounded
            hover:opacity-50
          "
          >Log Out</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
