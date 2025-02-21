import React from 'react';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobile, onClose }) => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const baseClasses = mobile
    ? 'flex flex-col space-y-4'
    : 'flex items-center space-x-8';

  return (
    <ul className={baseClasses}>
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="nav-link"
            onClick={onClose}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;