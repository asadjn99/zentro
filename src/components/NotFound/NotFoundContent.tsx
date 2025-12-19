import Link from "next/link";

const NotFoundContent = () => {
  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* 1. Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-10 sm:mb-20">
        <Link href="/" className="opacity-50 hover:opacity-100 transition">
          Home
        </Link>
        <span>/</span>
        <span className="text-black font-medium">404 Error</span>
      </div>

      {/* 2. Main Content */}
      <div className="flex flex-col items-center justify-center text-center gap-8 sm:gap-10">
        
        {/* Large Heading */}
        <h1 className="text-6xl sm:text-9xl font-medium tracking-wide">
          404 Not Found
        </h1>

        {/* Description Text */}
        <p className="text-black text-sm sm:text-base">
          Your visited page not found. You may go home page.
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <button className="bg-btn-red text-white px-12 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium mt-4">
            Back to home page
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundContent;