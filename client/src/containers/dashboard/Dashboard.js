import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import useStyles from './styles'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import { useLayoutState } from '../../context/LayoutContext'

function Dashboard(props) {
  const classes = useStyles()

  var [isAuthed, setIsAuth] = useState(false)
  var [isLoading, setIsLoading] = useState(false)

  return (
    <div className={classes.root}>
      <Header history={props.history}/>
      <Sidebar />
    </div>
  )
}

export default Dashboard
