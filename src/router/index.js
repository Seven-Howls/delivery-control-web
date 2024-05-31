import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import DeliveryHistoryView from "../views/DeliveryHistoryView.vue";
import MotoboysView from "../views/MotoboysView.vue";
import LoginView from "../views/LoginView.vue";
import CollaboratorsView from "../views/CollaboratorsView.vue"

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView
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
  {
    path: "/collaborators",
    name: "collaborators-list",
    component: CollaboratorsView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
