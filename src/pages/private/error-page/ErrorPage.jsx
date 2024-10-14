const ErrorPage = () => {
  return (
    <>
      <div className="bg-base-100 py-12 ">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-primary">404</h1>
          <p className="mb-4 text-lg ">Oops! Looks like you&apos;re lost.</p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p className="mt-4 ">
            Let&apos;s get you back{" "}
            <a href="/" className="text-blue-500">
              Home
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
