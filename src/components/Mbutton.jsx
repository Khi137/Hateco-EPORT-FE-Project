class Mbutton extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: this.props.loading || false,
      };
  
      this.buttonRef = React.createRef();
    }
  
    startLoading = () => {
      this.setState({ loading: true });
    };
  
    stopLoading = () => {
      this.setState({ loading: false });
    };
  
    handleClick = () => {
      this.startLoading();
  
      setTimeout(() => {
        this.stopLoading();
      }, 2000);
    };
  
    render() {
      return (
        <>
          <Button ref={this.buttonRef} onClick={this.handleClick} {...this.props}></Button>
        </>
      );
    }
  }