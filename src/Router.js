import{BrowserRouter as Router,Switch,Route,Link}from"react-router-dom"
import React from 'react'

    
    function AppRouter() {
      return (
        <div>

<Router>
<div className="mycontainer-3">
  <Switch>
    <Route path="/">
    <TextForm heading="Enter The Text To Analyze" mode={mode} showalert={showalert}/>
    </Route>
  </Switch>
</div>
    </Router>
          
        </div>
      )
    }
    
    export default AppRouter
    