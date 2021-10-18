import { createSlice } from '@reduxjs/toolkit'

import { images } from '../../images/data'
import { appState } from '../../TypeScript/types'


const initialState: appState = {
  opened: 'main',
  series: images,
  filter: 'all',
  selectedImages: {
    portrait: [''],
    album: [''],
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    filterSeries (state, action) {
      state.filter = action.payload
    },
    openPage(state, action) {
      state.opened = action.payload.page
      state.selectedImages = action.payload.images
    },
  },
})


export const {filterSeries, openPage} = appSlice.actions
export default appSlice.reducer