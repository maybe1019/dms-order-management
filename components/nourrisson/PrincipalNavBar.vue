<template>
  <nav class="px-2 bg-white border-gray-200  shadow border-b-zinc-600 py-7 px-32">
    <div class="container flex flex-wrap justify-between items-center mx-auto w-3/4">
      <a href="#" class="flex items-center">
        <img src="logo.png" class="mr-3 h-6 sm:h-10" alt="Company Logo" />
      </a>
      <button data-collapse-toggle="navbar-multi-level" type="button"
        class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 "
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>



      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 font-roboto rounded md:bg-transparent md:text-blue-700 leading-5 text-sm md:p-0 "
              aria-current="home">Dashboard</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex justify-between items-center  font-roboto py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
              Production
              <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 font-roboto text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Users</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 font-roboto  pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Files</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3  font-roboto text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Payments</a>
          </li>

          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 font-roboto text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Reports</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 font-roboto text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Messages</a>
          </li>
          <li>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </li>
          <li>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </li>
          <li>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </li>

          <li>
            <div class="flex">
              <img type="button  " class="w-10 h-10 rounded-full cursor-pointer mx-10    " src="profil.jpeg"
                alt="Rounded avatar" />
              <div>
                <span class="font-roboto ">Serhii Movchan</span><br />
                <span class="text-gray-600 font-roboto">example@gmail.com</span>
              </div>
            </div>

          </li>
        </ul>
      </div>


      
    </div>
  </nav>
</template>

<script>
export default {
  name: "PrincipalNavBar",
};
</script>

<style scoped>
</style>
