<template>
  <div
    class="flex flex-col flex-grow h-full w-full bg-white px-4 py-6 rounded-3xl"
  >
    <div
      class="flex flex-row items-center py-4 px-6 rounded-2xl shadow relative"
    >
      <ul class="flex flex-row justify-center align-middle space-x-2 w-full">
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
                  "
          >
            <span>
              <font-awesome-icon :icon="['fas', 'columns']" size="lg" />
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
                  "
          >
            <span>
              <font-awesome-icon :icon="['fas', 'expand']" size="lg" />
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
                  "
          >
            <span>
              <font-awesome-icon
                :icon="['fas', 'expand-arrows-alt']"
                size="lg"
              />
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
                  "
          >
            <span>
              <font-awesome-icon :icon="['fas', 'arrows-alt-h']" size="lg" />
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
                  "
          >
            <span>
              <font-awesome-icon :icon="['fas', 'arrows-alt-v']" size="lg" />
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
                  "
          >
            <span>
              <font-awesome-icon :icon="['fas', 'arrows-alt']" size="lg" />
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
                  "
          >
            <span>
              <font-awesome-icon :icon="['fas', 'vector-square']" size="lg" />
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex h-full overflow-hidden py-4 " ref="container">
      <v-stage
        :config="configKonva"
        ref="stage"
        @wheel="zoom"
        class="overflow-hidden border-dashed rounded-2xl border-2"
      >
        <v-layer>
          <v-image
            :config="{
              image: image,
            }"
          />
        </v-layer>
      </v-stage>
    </div>
    <div class="flex flex-row items-center">
      <div
        class="
              flex flex-row
              items-center
              w-full
              border
              rounded-3xl
              h-12
              px-2
            "
      >
        <input
          type="text"
          class="
                  border border-transparent
                  w-full
                  focus:outline-none
                  text-sm
                  h-10
                  flex
                  items-center
                "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadingPage",
  props: {},
  data() {
    return {
      configKonva: {
        width: 2400,
        height: 600,
        draggable: true,
        scaleX: 1,
        scaleY: 1,
      },
      image: null,
    };
  },
  methods: {
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
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
};
</script>
