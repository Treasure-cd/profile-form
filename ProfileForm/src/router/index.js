import { createRouter, createWebHistory } from "vue-router";
import FormView from "../views/FormView.vue";
import SummaryView from "../views/SummaryView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "form",
            component: FormView
        },
        {
            path: "/summary",
            name: "summary",
            component: SummaryView
        }
    ]
})

export default router