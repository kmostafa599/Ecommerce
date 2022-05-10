import { createSlice } from '@reduxjs/toolkit'
import { AppStateType, CartItem, Category, Product } from 'types'

const initialState: AppStateType = {
  products: [],
  categories: [],
  cart: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts:(state, { payload }: { payload: Product[] }) =>{
      state.products = payload
    },
    setCategories(state, { payload }: { payload: Category[] }) {
      state.categories = payload
    },
    setCart(state, { payload }: { payload: CartItem[] }) {
      state.cart = payload
    },
  },
})

export const { setProducts, setCategories,setCart } = appSlice.actions

export default appSlice.reducer
