import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Out from '../src/out';
import In from '../src/in';
import WeixinOut from './weixin-out';
import WeixinIn from './weixin-in';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Out}/>
            <Route exact path="/in" component={In}/>
            <Route exact path="/weixin-out" component={WeixinOut}/>
            <Route exact path="/weixin-in" component={WeixinIn}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;