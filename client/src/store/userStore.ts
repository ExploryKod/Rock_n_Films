import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: "",
    reducers : {
        login: (state:string, action:PayloadAction<string>) => {
            return action.payload;
        },
        logout: (state, action: PayloadAction<undefined>) => {
            return "";
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;