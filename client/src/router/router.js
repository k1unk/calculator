import Main from "@/pages/MainPage/Main";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/AboutPage/About";
import Users from "@/pages/UsersPage/Users";
import User from "@/pages/UserPage/User";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id',
        component: User
    },

]

const router = createRouter({
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router
