import { Commit } from "vuex"
const actions: any = {
    setLogin(context: { commit: Commit }, plateform: boolean): any {
        context.commit("SET_LOGIN", plateform)
    },
    setLoading(context: { commit: Commit }, plateform: boolean): any {
        context.commit('SET_LOADING', plateform)
    },
    setWhichpage(context: { commit: Commit }, platform: string): any {
        context.commit('SET_WHICHPAGE', platform);
    },
    setHomepageMore(context: { commit: Commit }, platform: StoreStats.falseBussinessbrief[]): any {
        context.commit('SET_HOME_PAGE_MORE', platform);
    },
    setOrder(context: { commit: Commit }, platform: any): any {
        context.commit('SET_ORDER', platform);
    },
    setAllNums(context: { commit: Commit }, nums: number): any {
        context.commit('SET_ALLNUMS', nums)
    },
    setAllTotalPrice(context: { commit: Commit }, allprice: number): any {
        context.commit('SET_ALLTOTALPRICR', allprice)
    }
}
export default actions;