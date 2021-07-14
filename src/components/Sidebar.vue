<template>
  <div
    class="
      flex flex-col
      w-72
      flex-shrink-0
      bg-gray-100
      dark:bg-gray-800
      p-4
      z-0
      overflow-hidden
    "
  >
    <div class="mt-5">
      <div class="text-xs text-gray-400 font-semibold uppercase">Team</div>
    </div>
    <div class="mt-2">
      <div class="flex flex-col -mx-4">
        <a
          href="#"
          class="
            relative
            flex flex-row
            items-center
            h-11
            focus:outline-none
            hover:bg-blue-800
            dark:hover:bg-grey-600
            text-gray-600
            hover:text-grey-800
            border-l-4 border-transparent
            hover:border-blue-500
            dark:hover:border-gray-800
            pr-6
          "
        >
          <span class="inline-flex justify-center items-center ml-4">
            <font-awesome-icon :icon="['fas', 'home']" size="lg" />
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";

export default {
  name: "Sidebar",
  props: {},
  data() {
    return {};
  },
  methods: {},
  componenets: {
    Toolbar,
  },
};
</script>