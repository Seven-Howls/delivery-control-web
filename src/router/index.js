import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import DeliveryHistoryView from "../views/DeliveryHistoryView.vue";
import MotoboysView from "../views/MotoboysView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/deliveries-history",
    name: "deliveries-history",
    component: DeliveryHistoryView
  },
  {
    path: "/motoboys",
    name: "motoboys-list",
    component: MotoboysView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
