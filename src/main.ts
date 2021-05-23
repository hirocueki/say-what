import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";

import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTimesCircle);

var app = createApp(App);
//コンポーネントの追加
app.component("fa", FontAwesomeIcon);
app.mount("#app");
