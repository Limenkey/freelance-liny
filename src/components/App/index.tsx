import { Layout } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from '../Footer'
import Gallery from '../Gallery'
import MyHeader from '../Header'
import Series from '../Series'


import './app.scss'



const App = () => {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <MyHeader/>
                </Header>
                <Content>
                    <Route path="/" exact component={Gallery} />
                    <Route 
                        path="/series/:id" 
                        exact 
                        render= {
                            ({match}) => {
                        const { id } = match.params
                        return <Series name={id}/>
                            }
                        }
                    />
                </Content>    
                <Footer/>
            </Layout>
        </Router>
    )
}



export default App