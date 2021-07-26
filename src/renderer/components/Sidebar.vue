<template>
  <div
    class="
      flex flex-col flex-shrink-0
      w-20
      z-50
      bg-gradient-to-b
      from-green-400
      to-blue-500
      p-4
    "
  >
    <div
      @click="test"
      class="
        flex
        items-center
        justify-center
        h-12
        w-12
        bg-white
        text-green-400
        rounded-full
      "
    >
      <font-awesome-icon :icon="['fab', 'pied-piper']" size="2x" />
    </div>

    <ul class="flex flex-col space-y-2 mt-12">
      <li
        @click="toggleReadingListMenu"
        class="
          flex
          items-center
          justify-center
          text-white
          h-12
          w-12
          border-2 border-white
          cursor-pointer
          rounded-2xl
          bg-gradient-to-b
          from-transparent
          to-transparent
          hover:from-pink-500
          hover:to-yellow-500
        "
      >
        <font-awesome-icon :icon="['fas', 'bookmark']" size="lg" />
      </li>
      <li>
        <span
          class="
            flex
            items-center
            justify-center
            text-white
            h-12
            w-12
            border-2 border-white
            cursor-pointer
            rounded-2xl
            bg-gradient-to-b
            from-transparent
            to-transparent
            hover:from-pink-500
            hover:to-yellow-500
          "
        >
          <font-awesome-icon :icon="['fas', 'language']" size="lg" />
        </span>
      </li>
      <li>
        <span
          class="
            flex
            items-center
            justify-center
            text-white
            h-12
            w-12
            border-2 border-white
            cursor-pointer
            rounded-2xl
            bg-gradient-to-b
            from-transparent
            to-transparent
            hover:from-pink-500
            hover:to-yellow-500
          "
        >
          <font-awesome-icon :icon="['fas', 'cog']" size="lg" />
        </span>
      </li>
    </ul>
    <button
      class="mt-auto flex items-center justify-center h-12 w-12 text-white"
    >
      <font-awesome-icon :icon="['far', 'moon']" size="lg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {},
  data() {
    return {};
  },
  methods: {
    toggleReadingListMenu() {
      this.$emit("toggle-reading-list-menu");
    },
    test() {
      window.ipcRenderer.invoke("some-name", "test").then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
