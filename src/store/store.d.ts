declare namespace StoreStats {
    export interface falseHotWord {
        search_word?: string,
        title?: string
    }
    export interface falseOrder {
        restaurant_id: string,
        img_src: string,
        store_name: string,
        order_birth_time: string,
        order_state: string,
        order_content: object,
        order_brief_info: string,
        order_price: number
    }
    export interface falseBussinessbrief {
        shop_name: string,
        id: string,
        path: string,
        shop_rating: number,
        brand: boolean,
        on_time: boolean,
        fengniao: boolean,
        bao: boolean,
        piao: boolean,
        zhun: boolean,
        start_send: number,
        send_cost: number,
        distance: number,
        estimate_time: number,
        notice: string,
        discount: string
    }
    export interface falseBussinessInfo {

    }
}