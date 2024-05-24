import { getProductStorageCount } from '@/utils/Product';
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    productCount: number;
}

const initialState: CounterState = {
    productCount: 0,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProductCount: (state) => {
            state.productCount = getProductStorageCount();
        },
        deleteAllProduct: (state) => {
            state.productCount = 0;
        }
    }
});

export const { addProductCount, deleteAllProduct } = productSlice.actions;
export default productSlice.reducer;