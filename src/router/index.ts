import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import RegistroPage from "../views/Coordinador/RegistroPage.vue";
import InicioPage from "@/views/Estudiante/InicioPage.vue";
import Escanearqr from "@/views/Estudiante/Escanearqr.vue";
import AulasPage from "@/views/Coordinador/AulasPage.vue";

import PruebasPage from '@/views/PruebasPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/registro",
    component: RegistroPage,
  },

  {
    path: "/escanear",
    component: Escanearqr,
  },

  {
    path: "/inicio",
    component: InicioPage,
  },

  {
    path: "/aulas",
    component:AulasPage ,
  },
  {
    path: '/pruebas',
    component: PruebasPage
  },

  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Coordinador/RegistroPage.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Estudiante/InicioPage.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Estudiante/Escanearqr.vue"),
      },
      {
        path: "tab4",
        component: () => import("@/views/Coordinador/AulasPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
