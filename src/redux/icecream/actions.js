import { BUY_ICECREAM } from './constants';

export const buyIcecream = (number) => {
    return {
        type: BUY_ICECREAM,
        number
    }
}