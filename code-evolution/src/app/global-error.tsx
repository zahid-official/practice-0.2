"use client";

// GlobalError Component
const GlobalError = () => {
  return (
    <html>
      <body>
        <h2>Globally Error Occurred!</h2>
        <button onClick={() => window.location.reload()}>Fix again</button>
      </body>
    </html>
  );
};

export default GlobalError;
