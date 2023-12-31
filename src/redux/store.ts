import { PreloadedState, configureStore } from "@reduxjs/toolkit"
import { boardsReducer } from "./features/boards/boardsSlice"
import { BoardsState } from "../types"

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: boardsReducer,
    preloadedState,
  })
}

export const store = setupStore()

store.subscribe(() => {
  localStorage.setItem("boards", JSON.stringify(store.getState()))
})

export type RootState = BoardsState
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
