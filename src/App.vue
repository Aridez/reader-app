<template>
  <div :class="{ dark: isDarkModeActive }">
    <div class="flex flex-row h-screen antialiased text-gray-800">
      <Toolbar
        @toggle-dark-mode="isDarkModeActive = !isDarkModeActive"
        @toggle-sidebar="isSidebarVisible = !isSidebarVisible"
      />
      <transition
        leave-to-class="-ml-72"
        leave-active-class="transition-all ease-in-out duration-500"
        enter-class="-ml-72"
        enter-active-class="transition-all ease-in-out duration-500"
      >
        <Sidebar v-show="isSidebarVisible"/>
      </transition>
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";
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
    Chat,
    Sidebar,
    Toolbar,
  },
};
</script>