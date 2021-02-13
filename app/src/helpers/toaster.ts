import { toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

enum AlertType {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
}

type ErrorType = {
  response: {
    statusText: string;
    data: string;
  }
}

function Alert( type: AlertType, error: ErrorType | string, time = 5 ): void {
  const options = {
    position: "top-right" as ToastPosition,
    autoClose: time * 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  let errorMessage = `${ type.toUpperCase() }: ${ error }`;
  if ( typeof error !== "string" && error.response ) {
    const {
      response: {
        statusText = '',
        data: errorText = ''
      }
    } = error;
    errorMessage = `[${ statusText }]: ${ errorText }`;
  }
  toast[ type ]( errorMessage, options );
}

export { Alert, AlertType };
