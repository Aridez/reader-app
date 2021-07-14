<template>
  <div
    class="
      flex flex-col
      items-center
      py-4
      flex-shrink-0
      w-20
      bg-indigo-800
      dark:bg-gray-700
      z-10
    "
  >
    <a
      href="#"
      class="
        flex
        items-center
        justify-center
        h-12
        w-12
        bg-indigo-100
        text-indigo-800
        rounded-full
        dark:text-gray-700
      "
      @click="toggleSidebar()"
    >
      <font-awesome-icon :icon="['far', 'comments']" size="lg" />
    </a>
    <ul class="flex flex-col space-y-2 mt-12">
      <li>
        <a href="#" class="flex items-center">
          <span
            class="
              flex
              items-center
              justify-center
              text-indigo-100
              hover:bg-indigo-700
              h-12
              w-12
              rounded-2xl
              dark:hover:bg-gray-600
            "
          >
            <font-awesome-icon :icon="['fas', 'home']" size="lg" />
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center">
          <span
            class="
              flex
              items-center
              justify-center
              text-indigo-100
              hover:bg-indigo-700
              h-12
              w-12
              rounded-2xl
              dark:hover:bg-gray-600
            "
          >
            <font-awesome-icon :icon="['fas', 'comment-dots']" size="lg" />
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center">
          <span
            class="
              flex
              items-center
              justify-center
              text-indigo-100
              hover:bg-indigo-700
              h-12
              w-12
              rounded-2xl
              dark:hover:bg-gray-600
            "
          >
            <font-awesome-icon :icon="['fas', 'calendar-minus']" size="lg" />
          </span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center">
          <span
            class="
              flex
              items-center
              justify-center
              text-indigo-100
              hover:bg-indigo-700
              h-12
              w-12
              rounded-2xl
              dark:hover:bg-gray-600
            "
          >
            <font-awesome-icon :icon="['fas', 'cog']" size="lg" />
          </span>
        </a>
      </li>
    </ul>
    <button
      class="
        mt-auto
        flex
        items-center
        justify-center
        hover:text-white
        text-indigo-500
        h-10
        w-10
        focus:outline-none
        dark:text-gray-500
        dark:hover:text-white
      "
      @click="toggleDarkMode()"
    >
      <font-awesome-icon :icon="['far', 'moon']" size="lg" />
    </button>
  </div>
</template>

<script>
import {
  faHome,
  faCalendarMinus,
  faCog,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { faComments, faMoon } from "@fortawesome/free-regular-svg-icons";
import Toolbar from "./Toolbar.vue";

export default {
  name: "Toolbar",
  props: {},
  data() {
    return {};
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggle-dark-mode");
    },
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
  beforeCreate() {
    this.$library.add(
      faComments,
      faHome,
      faCommentDots,
      faCalendarMinus,
      faCog,
      faMoon
    );
  },
  componenets: {
    Toolbar,
  },
};
</script>