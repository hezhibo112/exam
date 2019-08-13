import {
    userGetAll,
    userViewAuthority,
    userApiAuthority,
    userIdentity
} from '@/api/user'
const user={
    namespaced:true,
    state:{
       /* 所有用户数据 */
        userData: [],
        /* 所有视图权限数据 */
        userAuthority: [],
        /* 所有api接口权限数据 */
        apiAuthority: [],
        /* 所有身份数据 */
        identityData: [],
       
    },
    mutations:{
        /* 所有用户数据 */
        mutationuserData (state, arr) {
            state.userData = arr;
        },
        /* 所有视图权限数据 */
        mutationAuthority (state, arr) {
            state.userAuthority = arr;
        },
        /* 所有api接口权限数据 */
        mutationApiAuthority (state, arr) {
            state.apiAuthority = arr;
        },
        /* 所有身份数据 */
        mutationIdentityData (state, arr) {
            state.identityData = arr;
        },
        
    },
    getters:{
        /* 所有用户数据 */
        getData (state) {
            return state.userData
        },
        /* 所有视图权限数据 */
        getAuthority (state) {
            return state.userAuthority
        },
        /* 所有api接口权限数据 */
        getApiAuthority (state) {
            return state.apiAuthority
        },
        /* 所有身份数据 */
        getIdentityData (state) {
            return state.identityData
        },
        
    },
    actions:{
        /* 所有用户数据 */
        actionUser ({ commit }) {
            userGetAll().then(res => {
                commit('mutationuserData', res.data)
            })
        },
        /* 所有视图权限数据 */
        actionAuthority ({ commit }) {
            userViewAuthority().then(res => {
                commit('mutationAuthority', res.data)
            })
        },
        /* 所有api接口权限数据 */
        actionApiAuthority ({ commit }) {
            userApiAuthority().then(res => {
                commit('mutationApiAuthority', res.data)
            })
        },
        /* 所有身份数据 */
        actionIdentity ({ commit }) {
            userIdentity().then(res => {
                commit('mutationIdentityData', res.data)
            })
        },
        
    }
}
export default  user;
