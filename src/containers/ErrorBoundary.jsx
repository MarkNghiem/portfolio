/* eslint-disable no-unused-vars */
// If there are any errors, this component will render

import React from "react";
import PropTypes from 'prop-types';

import ErrorDisplay from "../components/ErrorDisplay.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // If there are en errors, hasError will be reassigned to true
  static getDerivedStateFromError(_err) {
    return { hasError: true };
  }

  // Log the errors to console if they are caught
  componentDidCatch(err, errInfo) {
    console.error(err);
    console.error(errInfo);
  }

  // Conditioning rendering
  render() {
    // If state has error, render ErrorDisplay
    if (this.state.hasError) {
      return <ErrorDisplay />;
    }
    // Otherwise, render the child, which, in this case, is App
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
}

export default ErrorBoundary;
