<template>
  <div
    :class="{ dark: isDarkModeActive }"
    class="flex flex-row h-screen antialiased text-gray-800 bg-gray-100"
  >
    <Toolbar
      @toggle-dark-mode="isDarkModeActive = !isDarkModeActive"
      @toggle-sidebar="isSidebarVisible = !isSidebarVisible"
    />
    <transition
      leave-to-class="-ml-72"
      leave-active-class="transition-all ease-in-out duration-500"
      enter-class="-ml-72"
      enter-active-class="transition-all ease-in-out duration-500"
      v-on:after-enter="$refs.reader.onResize()"
      v-on:after-leave="$refs.reader.onResize()"
    >
      <Sidebar v-show="isSidebarVisible" />
    </transition>
    <reader ref="reader" />
  </div>
</template>

<script>
import Reader from "./components/Reader.vue";
import Sidebar from "./components/Sidebar.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",
  data() {
    return {
      isDarkModeActive: false,
      isSidebarVisible: true,
    };
  },
  components: {
    Reader,
    Sidebar,
    Toolbar,
  },
};
</script>
