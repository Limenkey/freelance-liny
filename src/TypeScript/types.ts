export interface series {
    id: string,
    genre: null | string,
    titleImg: string,
    images: string[],
    wideImages: string[],
}

export interface appState {
        opened: string,
        series: series[],
        filter: string,
        selectedImages: {
            portrait: string[],
            album: string[] | undefined,
        } | null,
}

export interface stateFromStore {
    app: appState
}

export interface openPage {
    page: string,
    selectedImages: string[] | null,
}

