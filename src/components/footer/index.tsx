import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-4 bg-mainGray text-white">
      <p className="text-center"> &copy; Increasio, {new Date().getFullYear()}</p>
    </footer>
  );
};
