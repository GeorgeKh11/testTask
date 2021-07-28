import React, { Component } from 'react';

import ErrorIndicator from './ErrorIndicator';

interface State {
  error: Error | null;
}

interface Props {}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error: any) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
