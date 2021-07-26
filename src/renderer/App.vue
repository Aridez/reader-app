<template>
  <div class="flex flex-row flex-1 h-screen antialiased">
    <div class="flex flex-row" v-click-outside="hideMenuBars">
      <sidebar
        v-on:toggle-reading-list-menu="isReadingListVisible = !isReadingListVisible"
      />

      <transition
        leave-to-class="-ml-4 opacity-0"
        leave-active-class="transition-all ease-in-out duration-1000"
        enter-class="-ml-4 opacity-0"
        enter-active-class="transition-all ease-in-out duration-1000"
      >
        <reading-list-menu v-if="isReadingListVisible" />
      </transition>
    </div>

    <reading-page />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import ReadingListMenu from "./components/ReadingListMenu.vue";
import ReadingPage from "./components/ReadingPage.vue";

export default {
  name: "App",
  data() {
    return {
      isDarkModeActive: false,
      isReadingListVisible: true,
    };
  },
  methods: {
    hideMenuBars() {
      this.isReadingListVisible = false;
    },
  },
  components: {
    Sidebar,
    ReadingListMenu,
    ReadingPage,
  },
};
</script>
