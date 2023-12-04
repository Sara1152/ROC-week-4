import logo from './logo.svg';
import './App.scss';
import { PolylineOutlined } from '@ricons/material'
import { Icon } from '@ricons/utils'
import Card from './components/Card'
import Container from './components/Layout/Container.js';
import Button from './components/Buttons.js';


function App() {
  return (
   <div id="app">
      <Container>
        <Card
          title="Heartsteel yone"
          text="<3"
          image="https://pbs.twimg.com/media/F9q-9VnWEAA0Gq_.jpg:large"
          actions={
            <>
              <Button variant="secondary" text="Love" />
              <Button variant="danger" text="Danger" />
            </>
          }
        />
      </Container>
    </div>
  );
}

export default App;
