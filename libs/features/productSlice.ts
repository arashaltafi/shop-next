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
        }
    }
});

export const { addProductCount } = productSlice.actions;
export default productSlice.reducer;