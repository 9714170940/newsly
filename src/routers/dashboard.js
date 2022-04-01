import Account from "../presentation/dashboard/Account";
import Category from "../presentation/dashboard/Category";
import Index from "../presentation/dashboard/Dashboard";
import News from "../presentation/dashboard/News";
import Profile from "../presentation/dashboard/Profile";
import Updates from "../presentation/dashboard/Updates";


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
    },
    {
        name: 'account',
        path: '/dashboard/my-account',
        exact: true,
        component: Account,
        requiredSession: true,
        redirectUrl: '/login'
    },
    {
        name: 'updates',
        path: '/dashboard/updates',
        exact: true,
        component: Updates,
        requiredSession: true,
        redirectUrl: '/login'
    }
]