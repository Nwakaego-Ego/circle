// Creating a context
const MyContext = React.createContext();

// Providing data using Context.Provider
function MyProvider({ children }) {
  const sharedData = { value: "Hello from Context!" };

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
}

// Consuming data using Context.Consumer
function MyComponent() {
  return (
    <MyContext.Consumer>
      {(context) => <div>{context.value}</div>}
    </MyContext.Consumer>
  );
}
