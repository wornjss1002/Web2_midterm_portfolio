import React from "react";
import Link from "next/link";

const menuItems = [
  { name: "PHP,MySQL", pdf: "/PHP_MySQL.pdf" },
  { name: "XSS(Cross Site Script)", pdf: "/XSS.pdf" },
  { name: "Command Injection", pdf: "/command_injection.pdf" },
  { name: "XS-Leak(Css Injection)", pdf: "/css_injection.pdf" },
  { name: "CSP(Cross Site Policy)", pdf: "/CSP.pdf" },
];

const WebMenu = () => {
  return (
    <div className="w-[500px] h-[500px] flex flex-col items-center justify-center text-center">
      <ul className="space-y-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.pdf}
              className="flex text-xl justify-center text-center h-[100%] bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition"
              download
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebMenu;
