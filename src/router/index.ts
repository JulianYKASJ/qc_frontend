import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import RegistroPage from "../views/RegistroPage.vue";
import InicioPage from "@/views/InicioPage.vue";
import Escanearqr from "@/views/Escanearqr.vue";
import InicioPageEstudiantes from "@/views/Estudiantes/InicioPageEstudiantes.vue";

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
    path: "/estudiantes",
    component: InicioPageEstudiantes 
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
        component: () => import("@/views/RegistroPage.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/InicioPage.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Escanearqr.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
