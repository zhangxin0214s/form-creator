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

    // determine whether the user has logged in
    const hasToken = getToken("token");
    const jyyToken = getToken("jyyToken");
    const _name = getToken("name");
    if(hasToken) {
        if (!jyyToken) {
            await store
                .dispatch("login/login", { token: _token, methodType: 1 })
                .then(() => {
                    console.log(store.getters.name, "Name");
                });
            if (!getToken("jyyToken")) {
                NProgress.done();
                return;
            }
            next();
            NProgress.done();
        } else {
            if (!getToken("jyyToken")) {
                NProgress.done();
                return;
            }
            // 重写name
            await store.dispatch("login/name", _name);
            next();
            NProgress.done();
        }
    } else {
        window.location.href = store.state.login.loginUrl;
        NProgress.done();
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});