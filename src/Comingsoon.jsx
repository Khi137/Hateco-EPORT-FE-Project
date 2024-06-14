import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Mprogress, Mmultiswitch } from "./components/BasicUI";
import { Row, Col } from "antd";

export class Comingsoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "option1", // Initial active item
    };

    this.dataSource = {
      options: [
        { ref: "option1", label: "Option 1" },
        { ref: "option2", label: "Option 2" },
        { ref: "option3", label: "Option 3" },
      ],
      class: "custom-switch", // Custom class for styling
      returnValue: (ref) => {
        console.log(`Selected option: ${ref}`);
        // Handle return value logic here
      },
    };
  }

  render() {
    const progressData = {
      dataSource: {
        label: "Progress Label",
        affix: "%",
        value: 40,
        span: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
      },
    };

    return (
      <>
        <Header />

        <Col className="khungtest-1" style={{ margin: "5%" }}>
          <h1 style={{ margin: "100px", color: "grey" }}>Comming soon</h1>
          <Mprogress {...progressData} />
        </Col>

        <Col style={{ margin: "10%", color: "red"}}>
          <div className="container">
            <h1>Choose an Option:</h1>
            <Mmultiswitch
              activeItem={this.state.activeItem}
              dataSource={this.dataSource}
            />
          </div>
        </Col>

        <Footer />
      </>
    );
  }
}
export default Comingsoon;
