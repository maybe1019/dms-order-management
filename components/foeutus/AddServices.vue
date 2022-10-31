<template>
  <div class="dimession flex items-center  py-12 flex-col">
    <div>
      <p class="font-roboto not-italic flex justify-center font-[400] items-center text-lg">
        Your Services
      </p>
      <p class="font-roboto text-xs not-italic text-gray-400 font-[400]">
        You can add your Services here
      </p>
    </div>
    <div class="mb-6 flex flex-row  mt-10">

      <input placeholder="Service Name" type="text"
        class="focus:outline-none mr-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
      <button type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1  focus:outline-none  font-roboto">
        Add New
      </button>
    </div>

  </div>
</template>
<script>
export default {
  name: "AddServices",
};
</script>
<style scoped>

</style>
