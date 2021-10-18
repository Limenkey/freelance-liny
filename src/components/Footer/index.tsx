import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { AnyAction, bindActionCreators, Dispatch } from "redux"
import { stateFromStore } from "../../TypeScript/types"
import { openPage } from "../App/appSlice"
import Filters from "../Filters"
import './footer.scss'

const MyFooter = ({opened, openPage}:any) => {
    const main = 'main'
    const series = 'series'

    const copyrightMsg = 
        <div className="copyright-msg">
            <p>All pictures(c)2021</p>
            <p>Lina Timofeeva</p>
            <p>All rights reserved</p>
        </div>

    const galleryFooter = 
        <div className="gallery-footer">
            <button className="filters-btn">Filters</button>
            <div className="filters-container">
                <Filters/>
            </div>
            {copyrightMsg}
        </div>

    const seriesFooter = 
        <div className="gallery-footer">
            <Link 
                to="/" 
                onClick= {
                    () => openPage(
                        {
                            page: 'main', 
                            images: null,
                        }
                    )
                }
            >
            <img className="back-btn" src="/images/icons/back.svg" alt='go back'/>
            </Link>
            {copyrightMsg}
        </div>    
    return (
        <footer className="footer">
            { opened === main && galleryFooter}
            { opened === series && seriesFooter}
        </footer>
    )
}

const mapStateToProps = (state:stateFromStore) => {
    return {
        opened: state.app.opened
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const bound = bindActionCreators({openPage}, dispatch)
    return {
        openPage: bound.openPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyFooter)