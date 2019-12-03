import React from 'react'

var UserStateContext = React.createContext()
var UserDispatchContext = React.createContext()

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true }
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  })

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

function useUserState() {
  var context = React.useContext(UserStateContext)
  if (context === undefined) {
    throw new Error("useUserState must be used with a UserProvider")
  }
  return context
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext)
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider")
  }
  return context
}

export { UserProvider, useUserState, useUserDispatch, loginUser, registerUser, signOut }

function loginUser(dispatch, email, password, history, setIsLoading, setError) {
  //setError(false)
  //setIsLoading(true)

  if (!!email && !!password) {
    //TODO: set this later to the UID of the user for referencing later
    //Also add logic in here to sign in a user using a username and password
    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(email, password),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        localStorage.setItem('id_token', 1)
        setError(null)
        setIsLoading(false)
        dispatch({ type: 'LOGIN_SUCCESS' })
        history.push('/dashboard')
      } else {
        const error = new Error(res.error)
        throw error
        setError(error)
      }
    }).catch(err => {
      console.error(err)
    })
  } else {
    //dispatch({ type: 'LOGIN_FAILURE' })
    //setError(true)
    //setIsLoading(false)
  }
}

function registerUser(dispatch, name, email, password, history, setIsLoading, setError) {
  fetch('http://localhost:5000/register', {
    method: 'POST',
    body: JSON.stringify(name, email, password),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.status === 200) {
      console.log('something special :)')
    }
  }).catch(err => {
    console.error(err)
  })
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token")
  dispatch({ type: "SIGN_OUT_SUCCESS" })
  history.push("/")
}