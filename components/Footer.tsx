import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-300">
      <p>
        © {new Date().getFullYear()} WhatsApp Direct | Privacy-friendly service
      </p>
      <p className="mt-1">
        This service is not affiliated with WhatsApp Inc.
      </p>
    </footer>
  );
};

export default Footer;