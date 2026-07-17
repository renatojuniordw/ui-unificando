import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-slate-50 p-8" role="alert">
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-black text-slate-950 mb-4 uppercase">
                Algo deu errado
              </h2>
              <p className="text-slate-600 mb-6 font-bold text-sm uppercase tracking-wider">
                Ocorreu um erro inesperado. Tente recarregar a página.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-slate-950 text-white px-8 py-4 font-black uppercase text-sm border-4 border-slate-950 shadow-[4px_4px_0px_#ccff00] hover:-translate-y-1 transition-all"
              >
                Recarregar
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
