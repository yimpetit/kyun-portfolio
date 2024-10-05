import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <div>
        <Link href="/" className="text-lg font-bold">
          Gyun.
        </Link>
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="#">menu2</Link>
        </li>
        <li>
          <Link href="#">menu3</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
