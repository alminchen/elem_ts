import { State } from "./interfac"
const mutations: any = {
    SET_LOGIN (state: State, plateform: boolean): any {
        state.isLogin = plateform
    },
    SET_LOADING (state: State, plateform: boolean): any {
        state.isLogin = plateform
    },
    SET_WHICHPAGE (state: State, plateform: string): any {
        state.whichPage = plateform;
    },
    SET_HOME_PAGE_MORE (state: State, plateform: StoreStats.falseBussinessbrief[]): any {
        state.falseBussinessbrief = plateform
    },
    SET_ORDER (state: any, plateform: StoreStats.falseOrder[]): any {
        state.falseOrder.unshift(plateform);
    },
    SET_ALLNUMS (state: State, nums: number): any {
        state.allNums = nums
    },
    SET_ALLTOTALPRICR (state: State, allprice: number): any {
        state.allTotalPrice = allprice
    }
}
export default mutations