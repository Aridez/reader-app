<template>
  <div
    class="flex flex-col flex-grow bg-white dark:bg-gray-900 px-4 py-6 w-full"
  >
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
    <div
      class="
        flex 
        p-4
        w-full
        overflow-hidden
      "
      ref="container"
    >
      <v-stage :config="configKonva">
        <v-layer>
          <v-image
            :config="{
              image: image,
            }"
          />
        </v-layer>
      </v-stage>
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
  name: "Reader",
  props: {},
  data() {
    return {
      configKonva: {
        width: 600,
        height: 100,
      },
      image: null,
    };
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
    onResize() {
      const container = this.$refs.container;

      if (!container) {
        return;
      }

      const height = container.offsetHeight;
      const width = container.offsetWidth;

      console.log(width, height, container.width, container.height);
      this.configKonva.width = width;
      this.configKonva.height = height;
    },
  },
  created() {
    const image = new window.Image();
    image.src = "local-resource:///I:/Desktop/design.png";
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  },
  mounted() {
    this.ro = new ResizeObserver(this.onResize)
    .observe(this.$refs.container)
  }
};
</script>
