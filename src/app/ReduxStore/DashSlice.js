import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 325,
    dashState: 'Overview'
}

const DashSlice = createSlice({
    name:'val',
    initialState,
    reducers: {
        openPanel: (state) => {
            state.value = 325
        },
        closePanel: (state) => {
            state.value = 0
        }
    }
});

export const {closePanel,
              openPanel, 
              } = DashSlice.actions;
export default DashSlice.reducer;