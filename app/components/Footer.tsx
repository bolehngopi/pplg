"use client";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Kelas 10 Footer */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Kelas 10</h3>
          <p className="text-sm md:text-base mt-2">
            © {new Date().getFullYear()} Kelas 10. All rights reserved.
          </p>
        </div>

        {/* Kelas 11 Footer */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Kelas 11</h3>
          <p className="text-sm md:text-base mt-2">
            © {new Date().getFullYear()} Kelas 11. All rights reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-6 md:mt-0">
          {/* Kelas 10 Instagram */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">Kelas 10 Instagram</h4>
            <a
              href="https://www.instagram.com/epplg21_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.347 3.608 1.322.975.976 1.26 2.243 1.322 3.609.058 1.266.07 1.646.07 4.837s-.012 3.572-.07 4.837c-.062 1.366-.347 2.633-1.322 3.608-.976.975-2.243 1.26-3.609 1.322-1.266.058-1.646.07-4.837.07s-3.572-.012-4.837-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.976-1.26-2.243-1.322-3.609-.058-1.265-.07-1.645-.07-4.837s.012-3.572.07-4.837c.062-1.366.347-2.633 1.322-3.608.976-.975 2.243-1.26 3.609-1.322 1.265-.058 1.645-.07 4.837-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.496.067-2.84.388-3.879 1.426-1.039 1.039-1.36 2.383-1.426 3.879-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.067 1.496.388 2.84 1.426 3.879 1.039 1.039 2.383 1.36 3.879 1.426 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.496-.067 2.84-.388 3.879-1.426 1.039-1.039 1.36-2.383 1.426-3.879.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.067-1.496-.388-2.84-1.426-3.879-1.039-1.039-2.383-1.36-3.879-1.426-1.28-.059-1.69-.072-4.947-.072zm0 5.838c-3.365 0-6.094 2.73-6.094 6.094s2.729 6.094 6.094 6.094 6.094-2.73 6.094-6.094-2.73-6.094-6.094-6.094zm0 10.133c-2.226 0-4.038-1.811-4.038-4.038s1.811-4.038 4.038-4.038 4.038 1.811 4.038 4.038-1.812 4.038-4.038 4.038zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.645-1.442-1.442-1.442z" />
              </svg>
              <span>Follow Kelas 10</span>
            </a>
          </div>

          {/* Kelas 11 Instagram */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">Kelas 11 Instagram</h4>
            <a
              href="https://www.instagram.com/pplgclassf_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.347 3.608 1.322.975.976 1.26 2.243 1.322 3.609.058 1.266.07 1.646.07 4.837s-.012 3.572-.07 4.837c-.062 1.366-.347 2.633-1.322 3.608-.976.975-2.243 1.26-3.609 1.322-1.266.058-1.646.07-4.837.07s-3.572-.012-4.837-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.976-1.26-2.243-1.322-3.609-.058-1.265-.07-1.645-.07-4.837s.012-3.572.07-4.837c.062-1.366.347-2.633 1.322-3.608.976-.975 2.243-1.26 3.609-1.322 1.265-.058 1.645-.07 4.837-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.496.067-2.84.388-3.879 1.426-1.039 1.039-1.36 2.383-1.426 3.879-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.067 1.496.388 2.84 1.426 3.879 1.039 1.039 2.383 1.36 3.879 1.426 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.496-.067 2.84-.388 3.879-1.426 1.039-1.039 1.36-2.383 1.426-3.879.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.067-1.496-.388-2.84-1.426-3.879-1.039-1.039-2.383-1.36-3.879-1.426-1.28-.059-1.69-.072-4.947-.072zm0 5.838c-3.365 0-6.094 2.73-6.094 6.094s2.729 6.094 6.094 6.094 6.094-2.73 6.094-6.094-2.73-6.094-6.094-6.094zm0 10.133c-2.226 0-4.038-1.811-4.038-4.038s1.811-4.038 4.038-4.038 4.038 1.811 4.038 4.038-1.812 4.038-4.038 4.038zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.645-1.442-1.442-1.442z" />
              </svg>
              <span>Follow Kelas 11</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
