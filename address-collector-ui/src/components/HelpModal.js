import {
  default as React, 
  Component,
  PropTypes,
} from "react";

import {default as ReactModal} from "react-modal";
import {
  Tabs,
  Tab,
  IconButton,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  alignContent: "center",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
};

const columnContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
};

export default class HelpModal extends Component {

  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
  }
  
  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  render() {
    return (  
      <ReactModal
        isOpen={true}
        onRequestClose={this.props.onRequestClose}
      >
        <IconButton
          onClick={this.props.onRequestClose}
          iconClassName="material-icons"
          color = {"#7e7e7e"}
          >arrow_back
        </IconButton>
   
        <Tabs>
          <Tab label = "iOS Devices" labelStyle={{size: "8px"}}>
            
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                Open "Settings" on the first page, then tap on "General".
              </div>
            </div>
    
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "200px"}}
                  src={require("../images/help_ios1.png")}
                />
              </div>
            </div>
          
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                In "General" page, tap on "Usage".
              </div>
            </div>
            
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "200px"}}
                  src={require("../images/help_ios2.png")}
                />
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                In "Usage" page, tap on "About", and the MAC address is in "Wi-Fi Address"
              </div>
            </div>
      
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img 
                  style={{height: "200px"}}
                  src={require("../images/help_ios3.png")}
                /> 
              </div>
            </div>
          </Tab>
          
          <Tab label = "Android OS" >
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                1. Go to your Android settings from your app drawer or other shortcut location.
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "150px"}}
                  src={require("../images/help_android1.png")}
                />
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                2. In the bottom of your settings screen, you will find "About phone". Tap on it.
              </div>
            </div>
  
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "150px"}}
                  src={require("../images/help_android2.png")}
                />
              </div>
            </div>
            
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                3. In your "About phone" section, you will have to tap on "Status" to get more details about your phone.
              </div>
            </div>
 
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "150px"}}
                  src={require("../images/help_android3.png")}
                />
              </div>
            </div>
      
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                4. In your "Status" screen, scroll down and you will find your Mac address under "Wi-Fi address".
              </div>
            </div>
 
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "150px"}}
                  src={require("../images/help_android4.png")}
                />
              </div>
            </div>
          </Tab>
          
          <Tab label = "Windows Phone" >
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                1. On your Windows Phone, open the App list, and tap on Settings.
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "280px"}}
                  src={require("../images/help_windows1.png")}
                />
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                2. Tap on "about" in system settings.
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "280px"}}
                  src={require("../images/help_windows2.png")}
                />
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                3. Tap on the "more info" button.
              </div>
            </div>
        
            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "280px"}}
                  src={require("../images/help_windows3.png")}
                />
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                4. You will now see the MAC address of your Windows Phone.
              </div>
            </div>

            <div style = {rowContainerStyle}>
              <div style = {{...rowStyle, ...columnContainerStyle}}>
                <img
                  style={{height: "280px"}}
                  src={require("../images/help_windows4.png")}
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      </ReactModal>
    );
  }
}
