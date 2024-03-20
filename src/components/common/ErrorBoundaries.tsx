import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    fallback: ReactNode; // Updated to use ReactNode instead of React.ReactNode
    children: ReactNode; // This is required for accessing children
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children; // This should work now
    }
}

export default ErrorBoundary;
