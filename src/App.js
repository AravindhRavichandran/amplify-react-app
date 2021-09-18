import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Samurai Car Rentals</h1>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App)