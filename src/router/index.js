import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import DeliveryHistoryView from "../views/DeliveryHistoryView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/deliveries-history", name: "deliveries-history", component: DeliveryHistoryView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
