
import Component from "@/components/";

export default {
    install(Vue){
        Object.keys(Component).forEach(item=>{
            Vue.component(item,Component[item])
        })
    }
}