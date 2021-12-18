import App from "../App";
import Introduction from "../component/Introduction/Introduction";


const routes = [
    { path: '/', exact: true, name: 'Home', component: App },
    { path: '/introduction', name: 'Introduction', component: Introduction },
    { path: '/about-team', name: 'About Team', component: App },
    { path: '/blog', name: 'Blog', component: App },
    { path: '/contact', name: 'Contact', component: App },
    { path: '/feedback', name: 'Feedback', component: App },
    { path: '/donate', name: 'Donate', component: App },
]

export default routes;