import { State } from "./interfac"
const getters:any = {
    getLogin: (state: State) => state.isLogin,
    getuname: (state: State) => state.username,
    getpwd: (state: State) => state.password,
    getloading: (state: State) => state.isLoading,
    getwhichpage: (state: State) => state.whichPage,
    getFalseHotWord: (state: State) => state.falseHotWord,
    getFalseOrder: (state: State) => state.falseOrder,
    getFalseBussinessbrief: (state: State) => state.falseBussinessbrief,
    getFalseBussinessInfo: (state: State) => state.falseBussinessInfo
}
export default getters