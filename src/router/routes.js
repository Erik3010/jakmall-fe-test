const routes = [
  {
    pathh: "/",
    redirect: { name: "Delivery" },
  },
  {
    path: "/step-1",
    name: "Delivery",
    component: () => import("../components/Delivery/Delivery.vue"),
  },
  {
    path: "/step-2",
    name: "Payment",
    component: () => import("../components/Payment/Payment.vue"),
  },
  {
    path: "/step-3",
    name: "Finish",
    component: () => import("../components/Finish/Finish.vue"),
  },
];

export default routes;
