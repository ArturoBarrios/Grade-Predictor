import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function ControlledTabs() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
          <div>first</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>second</div>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            <div>third</div>
        </Tab>
      </Tabs>
    );
  }
  export default ControlledTabs;