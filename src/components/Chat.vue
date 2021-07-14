<template>
  <div class="flex flex-col flex-grow bg-white dark:bg-gray-900 px-4 py-6">
    <div
      class="
        flex flex-row
        items-center
        py-4
        px-6
        rounded-2xl
        border
        dark:border-gray-700
        w-full
      "
    >

      <div class="ml-auto">
        <ul class="flex flex-row items-center space-x-2">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                justify-center
                bg-gray-100
                hover:bg-gray-200
                text-gray-400
                h-10
                w-10
                rounded-full
                dark:bg-gray-600
                dark:hover:bg-gray-700
                dark:text-white
              "
            >
              <span>
                <font-awesome-icon :icon="['fas', 'phone']" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                justify-center
                bg-gray-100
                hover:bg-gray-200
                text-gray-400
                h-10
                w-10
                rounded-full
                dark:bg-gray-600
                dark:hover:bg-gray-700
                dark:text-white
              "
            >
              <span>
                <font-awesome-icon :icon="['fas', 'video']" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                justify-center
                bg-gray-100
                hover:bg-gray-200
                text-gray-400
                h-10
                w-10
                rounded-full
                dark:bg-gray-600
                dark:hover:bg-gray-700
                dark:text-white
              "
            >
              <span>
                <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-full overflow-hidden py-4">
      <div class="h-full overflow-y-auto">
        <img
          class="h-full w-full"
          src="local-resource:///I:/Desktop/design.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  faPaperPlane,
  faPaperclip,
  faMicrophone,
  faEllipsisV,
  faVideo,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "Chat",
  props: {},
  data() {
    return {};
  },
  beforeCreate() {
    this.$library.add(
      faPaperPlane,
      faImage,
      faPaperclip,
      faMicrophone,
      faEllipsisV,
      faVideo,
      faPhone
    );
  },
  methods: {
    sendMessage() {
      window.ipcRenderer.invoke("some-name", "argument").then((result) => {
        console.log(result);
      });
    },
  },
};
</script>