import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  FontIcon,
  IconButton,
  SelectField,
  TextField,
  FlatButton,
  RaisedButton,
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

const buttonStyle = {
  margin: "8px",
};

const columnStyle = {
  flex: "0 1 auto",
};

const submitInputStyle = {
  cursor: "pointer",
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
  width: "100%",
  opacity: "0"
};

function normalizeMacAddress (rawMacAddress) {
  return rawMacAddress.replace(/[-:]/g, "");  
}

var MobileDetect = require('mobile-detect');
//var md = new MobileDetect(window.navigator.userAgent);
var md = new MobileDetect(
    'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
    ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
    ' Version/4.0 Mobile Safari/534.30');
var isMobile;
var isM = true;
const MAC_ADDRESS_REGEXP = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;

if (!md.mobile()) {
  isMobile = false;
} else {
  isMobile = true;
}

const MAC_ADDRESS_FORMATTED_SEPARATER = "-";
  
function formatMacAddress (macAddress) {
  return macAddress 
    .split(/(\S{2})/)
    .filter(it => it)
    .join(MAC_ADDRESS_FORMATTED_SEPARATER);
}
export default class CollectDataStage extends Component {

  static propTypes = {
    manufactures: PropTypes.array.isRequired,
    devices: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    onHelpWithMacAddress: PropTypes.func.isRequired,
    onNewDevice: PropTypes.func.isRequired,
    onNewManufacture: PropTypes.func.isRequired,
    deviceObj: PropTypes.object.isRequired,
    onDeviceKeyValueChange: PropTypes.func.isRequired,
    stores: PropTypes.array.isRequired,
    onCheckAddress: PropTypes.func.isRequired,
    onHome: PropTypes.func.isRequired,
  }

  handleChange = (key, e) => {
    let value = e.target.value;
    if (key === "macAddress") {
      value = value.toUpperCase();
      value = normalizeMacAddress( value);
      value = formatMacAddress(value);
    }
    this.props.onDeviceKeyValueChange(key, value);
  }

  handleKeyUp = (key, e) => {
    let value = e.target.value.toUpperCase();
    if (key === "macAddress") {
      this.props.onCheckAddress(key, value);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  }

  handleHome = (e) => {
    e.preventDefault();
    this.props.onHome();
  }

  renderMobileDeviceRow() {
    const {deviceObj, errors} = this.props;
    const deviceItems = this.props.devices.map(it => ({text: it}));

    if (deviceObj.manufacture) {
      return (
        <div style = {{...rowStyle, ...columnContainerStyle}}>
          <select
          value={deviceObj.device}
          onChange={this.handleChange.bind(this, "device")}
        >
          <option>Select A Device</option>
          {this.props.devices.map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        <IconButton
          iconClassName="material-icons"
          tooltipPosition="top-right"
          tooltip="Add"
          iconStyle = {{color: "#7e7e7e"}}
          onClick={this.props.onNewDevice}
          >add_circle
        </IconButton>
        </div>  
      )
    } else {
    return null;
    }
  }

  renderDesktopDeviceRow() {
    const {deviceObj, errors} = this.props;
    const deviceItems = this.props.devices.map(it => ({text: it}));

    if (deviceObj.manufacture) {
      return (
        <div style = {{...rowStyle, ...columnContainerStyle}}>
        <select
          value={deviceObj.device}
          onChange={this.handleChange.bind(this, "device")}
        >
          <option>Select A Device</option>
          {this.props.manufactures.map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        <IconButton
          iconClassName="material-icons"
          tooltipPosition="top-right"
          tooltip="Add"
          iconStyle = {{color: "#7e7e7e"}}
          onClick={this.props.onNewDevice}
          >add_circle
        </IconButton>
        </div>
      );
    } else {
    return null;
    } 
  }

  renderMobileManufactureRow () {
    const {deviceObj,errors} = this.props;
    return (
      <div style = {{...rowStyle, ...columnContainerStyle}}>
        <select
          value={deviceObj.manufacture}
          onChange={this.handleChange.bind(this, "manufacture")}
        >
          <option>Select A Manufacture</option>
          {this.props.manufactures.map(it => <option key={it} value={it}>{it}</option>)}
        </select>
        <IconButton
          iconClassName="material-icons"
          tooltipPosition="top-right"
          tooltip="Add"
          iconStyle = {{color: "#7e7e7e"}}
          onClick={this.props.onNewManufacture}
          >add_circle
        </IconButton>
      </div>
    );
  }

  renderDesktopManufactureRow () {
    const manufactureItems = this.props.manufactures.map(it => ({text: it}));
    const {deviceObj,errors} = this.props;
    return (
      <div style = {{...rowStyle, ...columnContainerStyle}}>
        <SelectField
          value={deviceObj.manufacture}
          valueMember="text"
          underlineFocusStyle={{borderColor: "#00afc4"}}
          onChange={this.handleChange.bind(this, "manufacture")}
          errorText={errors.manufacture}
          hintText="Select A Manufacture"
          menuItems={manufactureItems}
        />
        <IconButton
          iconClassName="material-icons"
          tooltipPosition="top-right"
          tooltip="Add"
          iconStyle = {{color: "#7e7e7e"}}
          onClick={this.props.onNewManufacture}
          >add_circle
        </IconButton>
      </div>
    );
  }

  renderMobileCountryRow () {
    const {deviceObj,errors} = this.props;
    return (
      <div style = {{...rowStyle, ...columnContainerStyle}}>
        <select
          value={deviceObj.country}
          onChange={this.handleChange.bind(this, "country")}
        >
          <option>Select A Country</option>
          {this.props.countries.map(it => <option key={it} value={it}>{it}</option>)}
        </select>
      </div>
    );
  }

  renderDesktopCountryRow () {
    const countryItems = this.props.countries.map(it => ({text: it}));
    const {deviceObj,errors} = this.props;
    return (
      <div style = {{...rowStyle, ...columnContainerStyle}}>
        <SelectField
            value={deviceObj.country}
            valueMember="text"
            onChange={this.handleChange.bind(this, "country")}
            errorText={errors.country}
            hintText="Select Your Country"
            menuItems={countryItems}
          />
        <div style={{width: "48px", height: "48px"}} />
      </div>
    );
  }

  render () {
    const manufactureItems = this.props.manufactures.map(it => ({text: it}));
    const deviceItems = this.props.devices.map(it => ({text: it}));
    const countryItems = this.props.countries.map(it => ({text: it}));
    const storeItems = this.props.stores.map(it => ({text: it}));
    const {deviceObj,errors} = this.props;
    var isM = true;
    return (
      <div style = {rowContainerStyle}>
        {isM ? this.renderMobileManufactureRow() : this.renderDesktopManufactureRow()}
   
        {isM ? this.renderMobileDeviceRow() : this.renderDesktopDeviceRow()}
 
        <div style = {{...rowStyle, ...columnContainerStyle}}>
          <TextField
            value={deviceObj.macAddress}
            style = {{maxLength: 10}}
            maxLength="17"
            onChange={this.handleChange.bind(this, "macAddress")}
            onKeyUp={this.handleKeyUp.bind(this, "macAddress")}
            errorText={errors.macAddress}
            hintText="MAC Address: AA:BB:CC:11:22:33"
          />
          <IconButton
            iconClassName="material-icons"
            tooltipPosition="top-right"
            tooltip="Help"
            iconStyle = {{color: "#7e7e7e"}}
            color = {"#7e7e7e"}
            onClick={this.props.onHelpWithMacAddress}
            >help
          </IconButton>
        </div>

        {isM ? this.renderMobileCountryRow() : this.renderDesktopCountryRow()} 
        
        <div style = {{...rowStyle, ...columnContainerStyle}}>
          <SelectField
            value={deviceObj.store}
            valueMember="text"
            onChange={this.handleChange.bind(this, "store")}
            errorText={errors.store}
            hintText="Select Your Store"
            menuItems={storeItems}
          />
          <div style={{width: "48px", height: "48px"}} />
        </div>
         
        <div style = {{...rowStyle, ...columnContainerStyle}}>
          <RaisedButton 
            style={{ ...columnStyle, ...buttonStyle}}
            secondary={true} 
            label="HOME"
            labelStyle={{padding: "16px 8px"}}
            labelColor= {"#ffffff"}
            onClick={this.props.onHome}
          >
            <FontIcon 
              className="material-icons"
              color={"#ffffff"}
              style={{float: "left", lineHeight: "36px"}}
            >home
            </FontIcon>
          </RaisedButton>
         
          <RaisedButton
            style={{ ...columnStyle, ...buttonStyle}}
            primary={true}
            label="Submit"
            labelStyle={{padding: "16px 8px"}}
            onClick={this.handleSubmit}
          >
            <FontIcon
              className="material-icons"
              color={"#ffffff"}
              style={{float: "left", lineHeight: "36px"}}
            >check_circle
            </FontIcon>
          </RaisedButton>
        </div>
      </div>
    );
  }
}
