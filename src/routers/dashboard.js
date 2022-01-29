import Category from "../presentation/dashboard/Category";
import Index from "../presentation/dashboard/Dashboard";
import News from "../presentation/dashboard/News";
import Profile from "../presentation/dashboard/Profile";


export const dashboardRoutes = [
    {
        name: 'dashboard',
        path: '/dashboard',
        exact: true,
        component: Index,
        requiredSession: true,
        redirectUrl: '/login'
    },
    {
        name: 'news',
        path: '/dashboard/revenue',
        exact: true,
        component: News,
        requiredSession: true,
        redirectUrl: '/login'
    },
    {
        name: 'category',
        path: '/dashboard/notifications',
        exact: true,
        component: Category,
        requiredSession: true,
        redirectUrl: '/login'
    },
    {
        name: 'profile',
        path: '/dashboard/profile',
        exact: true,
        component: Profile,
        requiredSession: true,
        redirectUrl: '/login'
    }
]