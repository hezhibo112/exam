import Vue from "vue";
import Router from "vue-router";
import subrouting from "./subrouting";
import {getUserinfoNew,authorization} from "@/utils/userinfo"
const{
    Login,
    Home,
    Permission,
    Hundred
}=require("@/views/index");
Vue.use(Router);
const isLogin=(to,from,next)=>{
    if(authorization() && authorization().split(".").length===3){
         next();
    }else if(getUserinfoNew()){
        next();
    }else{
        next("/login");
    }
}

const router=new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/login"
        },
        {
            path:"/login",
            components:Login
        },
        {
            path:"/home",
            components:Home,
            beforeEnter:isLogin,
            children:subrouting.subrouting
        },
        {
            path:"/permission",
            components:Permission
        },
        {
            path:"*",
            components:Hundred
        },
    ]
})


export default router;