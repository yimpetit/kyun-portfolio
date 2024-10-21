import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations("Menu");
  return (
    <header className="flex justify-between py-6 px-4">
      <div>
        <Link href="/" className="text-lg font-bold">
          Kyun.
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li className="font-bold">
            <Link href="/">{t("intro")}</Link>
          </li>
          {/* <li className="text-slate-500">
            <Link href="/works">{t("work")}</Link>
          </li>
          <li className="text-slate-500">
            <Link href="#">{t("etc")}</Link>
          </li> */}
        </ul>
        <div className="w-px h-full bg-slate-500"></div>
        <ul className="flex gap-4 text-sm text-slate-500">
          <li>
            <Link
              href="/"
              locale="en"
              className={locale === "en" ? "text-red-100 font-bold" : ""}
            >
              En
            </Link>
          </li>
          <li>
            <Link
              href="/"
              locale="kr"
              className={locale === "kr" ? "text-red-100 font-bold" : ""}
            >
              Kr
            </Link>
          </li>
          <li>
            <Link
              href="/"
              locale="th"
              className={locale === "th" ? "text-red-100 font-bold" : ""}
            >
              Th
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
