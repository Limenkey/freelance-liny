import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { AnyAction, bindActionCreators, Dispatch } from "redux"
import { stateFromStore } from "../../TypeScript/types"
import { openPage } from "../App/appSlice"
import MobileMenu from "../MobileMenu"

import './header.scss'

const MyHeader = ({openPage, page}:any) => {
    const mobMenu = page === 'main' && <MobileMenu/>
    const backBtn = 
        page === 'series' && 
            <Link 
                to="/"
                onClick= {
                    () => openPage(
                        {
                            page: 'main',
                            images: null,
                        })
                }
            >
                <img className="back-btn" src="/images/icons/back.svg" alt='go back'/>
            </Link>
    return (
        <div className="header-wrapper">
            <Link className="header--left"
                to="/"
                onClick= {
                    () => openPage(
                        {
                            page: 'main',
                            images: null,
                        })
                }
            >
                <div >
                    <h1>Lina Timofeeva</h1>
                    <h2>Photographer</h2>
                </div>
            </Link>
            <div className="header--right">
                {mobMenu}
                {backBtn}
                <div className="socials-container">
                    <a href="https://wa.me/79508078587" target="_blank" rel="noreferrer">
                        <img src="/images/icons/whatsapp.svg" alt="WhatsApp"/>
                    </a>
                    <a href="https://t.me/timofeeva_ph" target="_blank" rel="noreferrer">
                        <img src="/images/icons/telegram.svg" alt="Telegram" />
                    </a>
                    <a href="https://instagram.com/timofeeva_ph?igshid=tmv6go3vlw2d" target="_blank" rel="noreferrer">
                        <img src="/images/icons/instagram.svg" alt="Instagram"/>
                    </a>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state:stateFromStore) => ({
    page: state.app.opened,
})
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const bound = bindActionCreators({openPage}, dispatch)
    return {
        openPage: bound.openPage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)