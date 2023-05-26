import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
