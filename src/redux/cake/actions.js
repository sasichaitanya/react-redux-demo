import { BUY_CAKE } from './constants';

export const buyCake = (number) => {
    return {
        type: BUY_CAKE,
        number
    }
}