import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import VueKonva from "vue-konva";
import "./directives/OnClickOutside";
import {
  faCog,
  faBookmark,
  faLanguage,
  faArrowsAlt,
  faVectorSquare,
  faArrowsAltH,
  faArrowsAltV,
  faExpandArrowsAlt,
  faExpand,
  faColumns,
  faBook,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faPiedPiper } from "@fortawesome/free-brands-svg-icons";

//Prepare icons used in the application
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.prototype.$library = library;

Vue.prototype.$library.add(
  //Sidebar
  faPiedPiper,
  faBookmark,
  faLanguage,
  faCog,
  faMoon,
  //ReadingListMenu
  faBook,
  faBars,
  //ReadingPage
  faColumns,
  faExpand,
  faExpandArrowsAlt,
  faArrowsAltH,
  faArrowsAltV,
  faArrowsAlt,
  faVectorSquare
);

//Prepare canvas
Vue.use(VueKonva);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
