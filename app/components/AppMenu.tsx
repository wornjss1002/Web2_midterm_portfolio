import React from "react";
import Link from "next/link";

const menuItems = [
  { name: "Android X Frida Function Hooking", pdf: "/hooking.pdf" },
  { name: "Deep Link", pdf: "/Deep_Link.pdf" },
  { name: "Broadcast Receiver", pdf: "/Broadcast.pdf" },
];

const AppMenu = () => {
  return (
    <div className="text-center w-[500px] h-[500px] flex flex-col items-center justify-center">
      <ul className="space-y-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.pdf}
              className="flex w-[100%] justify-center text-xl text-center h-[100%] bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition"
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

export default AppMenu;
