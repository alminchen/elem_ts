export interface State {
    isLoading?: boolean,
    username?: string,
    password?: string,
    isLogin?: boolean,
    whichPage?: string,
    falseHotWord?: StoreStats.falseHotWord[],
    falseOrder?: any[],
    falseBussinessbrief?: StoreStats.falseBussinessbrief[],
    falseBussinessInfo?: StoreStats.falseBussinessInfo,
    allNums: number,
    allTotalPrice: number
}