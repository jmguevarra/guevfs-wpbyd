import { priceFormat } from "./formatter";

//calculate discount by price and discount value
export const calcDiscout = (price: number, discount: number) => {
    const percent =   discount / 100; //get in percent

    return ( price - (price * percent));
}

//it will return string of discounted price in currency
export const calcDiscoutInCurrency = (price: number, discount: number) => {
    const percent =   discount / 100; //get in percent

    return priceFormat(price - (price * percent));
}