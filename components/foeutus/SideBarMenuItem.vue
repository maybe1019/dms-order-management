<template>
  <a :href="href" class="h-[4.375rem] flex items-center my-6 sm:text-base">
    <div
      :class="
        active
          ? 'w-[0.31rem] h-full flex-none bg-blue-dark mr-[1.125rem] rounded-tr-lg rounded-br-lg'
          : 'w-[0.31rem] h-full flex-none  mr-[1.125rem] rounded-tr-lg rounded-br-lg'
      "
    ></div>
    <div
      :class="
        active
          ? 'uppercase text-[0.625rem] text-blue-dark leading-[0.7325rem] text-center flex flex-col items-center'
          : 'uppercase text-[0.625rem]  leading-[0.7325rem] text-center flex flex-col items-center'
      "
    >
      <div>
        <slot></slot>
      </div>
      <span class="mt-2 text-[0.65rem] font-bold"> {{ title }} </span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Menu item",
    },
    active: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      required: true,
      default: "/account",
    },
  },
};
</script>

<style></style>
