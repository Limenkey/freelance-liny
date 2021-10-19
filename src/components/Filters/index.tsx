import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { stateFromStore } from '../../TypeScript/types'
import { filterSeries } from '../App/appSlice'
import './filters.scss'


const Filters = ({filter, filterSeries, clicked, mobile}:any) => {
    const all = 'all'
    const beauty = 'beauty'
    const lookbook = 'lookbook'
    const modeltests = 'modeltests'
    const items = 'items'
    const catalog = 'catalog'
    const active = 'filter--active'

    return (
        <ul className='filters'>
                <li>
                    <button 
                        className={(filter === all && active) || ''} 
                        type="button" 
                        onClick={() => {
                            filterSeries('all')
                            if (mobile) clicked()
                            }}>
                        All
                    </button>       
                </li>
                <li>
                    <button 
                        className={(filter === beauty && active) || ''} 
                        type="button" 
                        onClick={() => {
                            filterSeries('beauty')
                            if (mobile) clicked()
                            }}>
                    Beauty
                    </button>
                </li>
                <li>
                    <button
                        className={(filter === lookbook && active) || ''} 
                        type="button" onClick={() => {
                            filterSeries('lookbook')
                            if (mobile) clicked()
                            }}>
                    Lookbook
                    </button>
                </li>
                <li>
                    <button 
                        className={(filter === modeltests && active) || ''} 
                        type="button" 
                        onClick={() => {
                            filterSeries('modeltests')
                            if (mobile) clicked()
                            }}>
                    Model tests
                    </button>
                </li>
                <li>
                    <button 
                        className={(filter === items && active) || ''} 
                        type="button" 
                        onClick={() => {
                            filterSeries('items')
                            if (mobile) clicked()
                            }}>
                    Items
                    </button>
                </li>
                <li>
                    <button 
                        className={(filter === catalog && active) || ''} 
                        type="button" 
                        onClick={() => {
                            filterSeries('catalog')
                            if (mobile) clicked()
                            }}>
                    Catalogue
                    </button>
                </li>
            </ul>
    )
}

const mapStateToProps = (
    state: stateFromStore,
) => ({
    filter: state.app.filter,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => { 
    const bound = bindActionCreators({filterSeries}, dispatch)
    return {
        filterSeries: bound.filterSeries,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)