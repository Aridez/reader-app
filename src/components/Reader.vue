<template>
  <div
    class="flex flex-col justify-center flex-grow w-full"
  >
    <div
      class="
        flex flex-row
        py-4
        px-6
        border-b-2
        dark:border-gray-700
        w-full
        dark:text-white
        dark:bg-gray-800
        fixed
        z-10
      "
    >
      Text here...
    </div>
    <div
      class=" 
        flex 
        justify-center
        p-0
        w-full
        h-full
        z-0
      "
      ref="container"
    >
      <v-stage :config="configKonva" ref="stage" @wheel="zoom">
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
        draggable: true,
        scaleX: 1,
        scaleY: 1,
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
      this.configKonva.width = 0;
      this.configKonva.height = 0;

      this.$nextTick(() => {
        const container = this.$refs.container;

        if (!container) {
          return;
        }
        const rect = container.getBoundingClientRect();

        const height = rect.height;
        const width = rect.width;
        this.configKonva.width = width;
        this.configKonva.height = height;
      });
    },
    zoom(e) {
      var scaleBy = 1.02;
      var oldScale = this.configKonva.scaleX;

      var newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
      console.log(oldScale);
      this.configKonva.scaleX = newScale;
      this.configKonva.scaleY = newScale;
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
    //this.ro = new ResizeObserver(this.onResize).observe(this.$refs.container);
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
};
</script>
