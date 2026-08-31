import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-[4.375rem] text-center">
      <p className="mb-4 text-2xl font-bold text-primary">Page not found</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text font-semibold text-transparent"
      >
        Back to portfolio
      </Link>
    </div>
  );
};

export { NotFoundPage };
