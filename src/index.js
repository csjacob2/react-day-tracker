import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Oops404 } from './components/Oops404'
import { Router, Route, hashHistory} from 'react-router'

window.React = React

render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="list-days" component={App}>
            <Route path=":filter" component={App}/>
        </Route>
        <Route path="add-day" component={App} />
        <Route path="*" component={Oops404} />
    </Router>,
    document.getElementById('react-container')
)