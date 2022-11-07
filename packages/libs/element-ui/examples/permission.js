import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setToken, getToken } from "@/utils/auth";
import getPageTitle from "@/utils/get-page-title";
import { getParameter } from "@/utils/parse";

NProgress.configure({ showSpinner: false }); 
router.beforeEach(async (to, from, next) => {

    // start progress bar
    NProgress.start();

    // set page title
    document.title = getPageTitle(to.meta.title);

    // set islogin cookie
    const _token = getParameter("token");
    _token && setToken("token", _token);

    
    next();
    NProgress.done();
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});