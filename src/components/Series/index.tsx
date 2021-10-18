/* eslint-disable react-hooks/exhaustive-deps */
import { Image } from "antd"
import { useEffect } from "react"
import { connect } from "react-redux"
import { AnyAction, bindActionCreators, Dispatch } from "redux"
import { series, stateFromStore } from "../../TypeScript/types"
import { openPage } from "../App/appSlice"

import './series.scss'


const Series = ({ images, name, openPage, series} : any) => {
    const filteredImgs = series.filter((item: series) => item.id === name)
    useEffect(() => {
        openPage(
            {
                page: 'series',
                images: {
                    portrait: filteredImgs[0].images,
                    album: filteredImgs[0].wideImages,
                }
            }
        )
    }, [])

    const portraitImages = images.portrait.map((image:string, idx:number) => {
        return (
            <Image src={image} width={328} height={492} key={`${name}-${idx}`}/>
        )
    })
    const albumImages = images.album.map((image:string, idx:number) => {
        if (images.album[0]) return (
            <Image src={image} width={'100%'} className="wide-img" key={`${name}-${idx}-wide`}/>
        )
        return null
    })

    const previewGroup = [...albumImages, ...portraitImages]

    return (
        <div className="gallery">
            <div>
                <Image.PreviewGroup>
                    {previewGroup}
                </Image.PreviewGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state:stateFromStore) => {
    return {
        series: state.app.series,
        opened: state.app.opened,
        images: state.app.selectedImages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const bound = bindActionCreators({openPage}, dispatch)
    return {
        openPage: bound.openPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Series)