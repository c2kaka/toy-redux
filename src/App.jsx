import React, { useState, useContext } from 'react';

const appContext = React.createContext(null);

export const App = () => {
  const [appState, setAppState] = useState({
    user: {
      name: 'fanoy',
      age: '29'
    }
  });

  const contextValue = {appState, setAppState};

  return (
    <appContext.Provider value={contextValue}>
      <FirstChild></FirstChild>
      <SecondChild></SecondChild>
      <ThirdChild></ThirdChild>
    </appContext.Provider>
  );
}

const FirstChild = () => <section>firstChild<User /></section>
const SecondChild = () => <section>secondChild<UserModifier /></section>
const ThirdChild = () => <section>thirdChild</section>

const User = () => {
  const {appState} = useContext(appContext);
  return <div>User:{appState.user.name}</div>
}

const UserModifier = () => {
  const {appState, setAppState} = useContext(appContext);
  const onChange = (e) => {
    appState.user.name = e.target.value;
    setAppState({...appState});
  };

  return <div>
    <input value={appState.user.name} onChange={onChange}/>
  </div>
}