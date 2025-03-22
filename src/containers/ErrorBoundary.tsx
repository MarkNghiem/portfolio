/* eslint-disable no-unused-vars */
// If there are any errors, this component will render

import React, { ErrorInfo } from "react";

import ErrorDisplay from "../components/ErrorDisplay.js";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // If there are en errors, hasError will be reassigned to true
  static getDerivedStateFromError(_err: Error) {
    return { hasError: true };
  }

  // Log the errors to console if they are caught
  componentDidCatch(err: Error, errInfo: ErrorInfo) {
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

export default ErrorBoundary;
