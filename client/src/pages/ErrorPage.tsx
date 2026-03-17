// ErrorPage.tsx
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Oops!</h1>
      <p className="text-gray-600 mb-6">We couldn’t find that page.</p>
      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
