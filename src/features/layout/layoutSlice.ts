import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    isDarkMode: boolean
}

const initialState: userState = {
    isDarkMode: false,
}

export const userSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsDarkMode } = userSlice.actions

export default userSlice.reducer