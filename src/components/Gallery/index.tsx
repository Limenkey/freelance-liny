/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { AnyAction, bindActionCreators, Dispatch } from "redux"
import { series, stateFromStore } from "../../TypeScript/types"
import { openPage } from "../App/appSlice"

import './gallery.scss'



const Gallery = ({images, filter, openPage, opened}:any) => {
    useEffect(()=> {
        openPage({
            page: 'main',
            images: null,
        })
    }, [])

    const galleryImages = images.map((series: series) => {
        const imagesCounter = 
            series.wideImages[0] ? 
                series.images.length + series.wideImages.length : 
                    series.images.length   
        if (filter === 'all' || filter === series.genre) {
            return (
                <Link 
                    to={`/series/${series.id}`} 
                    key={series.id} 
                    onClick={
                        () => openPage(
                            {
                                page: 'series',
                                images: {
                                    portrait: series.images,
                                    album: series.wideImages,
                                },
                            }
                        )
                    }
                >
                    <div className="img-container">
                        <img src={series.titleImg} alt="Title photo for the series"/>
                        <div className="images-counter">{`1/${imagesCounter}`}</div>
                    </div>
                </Link>
            )
        }
        return null
    })
    return (
        <>
        <div className="gallery">
            <div>{galleryImages}</div>
        </div>
        </>
    )
}

const mapStateToProps = (
    state: stateFromStore,
) => ({
    images: state.app.series,
    filter: state.app.filter,
    opened: state.app.opened,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const bound = bindActionCreators({openPage}, dispatch)
    return {
        openPage: bound.openPage
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery)