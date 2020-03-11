import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*
type PortalProps = {
  children: React.ReactNode,
}

class Portal extends Component<PortalProps> {

  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount():void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount():void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class MyComponent extends Component<{}, { count: number }> {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>Clicks: {this.state.count}</h1>
        <Portal>
          <h2>TEST PORTAL</h2>
          <button>Click</button>
        </Portal>
      </div>
    );
  }
}
*/

interface IContext {
  isAuth: Boolean,
  toggleAuth: () => void,
}

// Context creation
const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

// Inner component (new syntax of static property)
class Login extends Component {

  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>

  render() {
    const { toggleAuth, isAuth } = this.context;

    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    );
  }
}

// Inner component (old variant with Consumer)
const Profile: React.FC = (): React.ReactElement => (
  <AuthContext.Consumer>
    {({ isAuth }: IContext) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

// Root component
class Context extends Component<{}, { isAuth: Boolean }> {
  readonly state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth
    }));
  };

  render() {
    const { isAuth } = this.state;
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth };

    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}


const App:React.FC = () => <Context />;

export default App;
