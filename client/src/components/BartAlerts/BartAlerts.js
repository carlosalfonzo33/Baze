import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import "./BartAlerts.css";


class BartAlerts extends Component {
  state = {
    alerts: [],
  };

  componentDidMount() {
    this.getAlerts();
  }

  getAlerts = () => {
    API.alerts()
      .then(res => {
        console.log("bart alerts", res.data.root.bsa)
        if (res.data.root.bsa[0].description['#cdata-section'] !== 'No delays reported.') {
            this.setState({ alerts: res.data.root.bsa})
        }

      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("bart alert state length at render", this.state.alerts);
    var displayAlerts = [];
    if (this.state.alerts.length) {
      this.state.alerts.map(alert => {
        displayAlerts.push(
          <div className="bart-alert">{alert.description['#cdata-section']}</div>
        );
      })
    }
    console.log("alerts render array", displayAlerts);


    return (

      <div>
        {displayAlerts}
      </div>

    );
  }

}

export default BartAlerts;
