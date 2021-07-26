<template>
  <div
    class="
      flex flex-row
      w-72
      flex-shrink-0
      absolute
      h-full
      ml-20
      z-40
      rounded-r-2xl
      bg-white
      border-t-4 border-green-400 border-r-1
      shadow-2xl
    "
  >
    <div class="flex flex-col flex-1">
      <div class="text-xl font-semibold text-green-500 px-4 pt-4 pb-2">
        <font-awesome-icon :icon="['fas', 'bookmark']" size="lg" /> Reading list
      </div>
      <div class="text-xs italic text-gray-500 px-4">
        Boku no hero academia > chapter 1
      </div>
      <div class="p-4">
        <ul class="flex flex-row items-center justify-between text-green-500">
          <li>
            <a
              href="#"
              class="flex items-center pb-3 text-xs font-semibold relative"
            >
              <span>All</span>
              <span
                class="
                  absolute
                  left-0
                  bottom-0
                  h-1
                  w-6
                  bg-green-500
                  rounded-full
                "
              ></span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center pb-3 text-xs font-semibold">
              <span>Books</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center pb-3 text-xs font-semibold">
              <span>Chapters</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center pb-3 text-xs font-semibold">
              <span>Pages</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col space-y-2" style="overflow-y: overlay">
        <div
          class="
            flex flex-row
            text-black
            bg-gray-50
            p-2
            shadow-inner
            transition
            duration-500
            ease-in-out
            hover:bg-gray-200
            cursor-pointer
            space-x-3
            items-center
          "
        >
          <div
            class="
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              transition
              duration-500
              ease-in-out
            "
          >
            <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
          </div>

          <div class="flex flex-col">
            <div class="text-sm font-medium">Boku no hero academia</div>
            <div class="text-sm italic">Chapter 3, Page 8</div>
          </div>
        </div>

        <div
          class="
            flex
            border-2 border-gray-300 border-dashed
            h-14
            rounded-2xl
            justify-center
            items-center
            text-gray-400
            italic
            text-xs
            mx-1
          "
          @drop="drop"
          @dragenter="dragenter"
          @dragleave="dragleave"
          @dragover.prevent
        >
          Drag and drop .cbc files here!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadingListMenu",
  props: {},
  data() {
    return {};
  },
  methods: {
    drop(e) {
      console.log("drop");
      console.log(e.dataTransfer.files[0].path);
    },
    dragenter(e) {
      console.log("dragenter");
      console.log(e);
    },
    dragleave(e) {
      console.log("dragleave");
      console.log(e);
    },
  },
};
</script>
