import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IntroPage");
  return (
    <>
      <div className="w-full">
        <Image
          src="/main_profile.jpg"
          alt="profile"
          width="600"
          height="320"
        ></Image>
      </div>

      <h3 className="w-full p-4 border-b">{t("introTitle")} 😁</h3>

      <div className="pb-4 pt-8 flex justify-between items-center">
        <dl>
          <dt className="pb-2 text-2xl text-slate-100">{t("introName")}</dt>
          <dd className="text-sm text-slate-400">{t("introJob")}</dd>
        </dl>
        <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="profile"
            width="460"
            height="460"
          ></Image>
        </div>
      </div>

      <div className="pb-4 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">{t("aboutMeTitle")}</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">👨‍💼</div>
        </div>
        <p className="text-sm">{t("aboutMeDescription")}</p>
      </div>

      <div className="pb-4 pt-8 text-sm">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">{t("myLifeTitle")}</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">🗒️</div>
        </div>

        <dl className="flex mb-2">
          <dt className="w-14 font-medium">1991</dt>
          <dd className="text-slate-300">{t("myLife1991")}</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2015</dt>
          <dd className="text-slate-300">{t("myLife2015")}</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2017</dt>
          <dd className="text-slate-300">{t("myLife2017")}</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2020</dt>
          <dd className="text-slate-300">{t("myLife2020")}</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2022~</dt>
          <dd className="text-slate-300">{t("myLife2022")}</dd>
        </dl>
      </div>

      <div className="pb-4 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">{t("iLikeTitle")}</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">❤️</div>
        </div>
        <p className="text-sm">{t("iLikeDescription")}</p>
      </div>

      <div className="pb-4 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">{t("ohterInfoTitle")}</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">☂️</div>
        </div>
        <ul>
          <li>
            <Link
              href="https://github.com/yimpetit"
              className="flex items-center gap-2"
            >
              <FaGithub /> {t("ohterInfoGit")}
            </Link>
          </li>
          <li className="pt-1">
            <Link
              href="https://www.instagram.com/yim_petit/"
              className="flex items-center gap-2"
            >
              <FaInstagram />
              {t("ohterInfoInstagram")}
            </Link>
          </li>
        </ul>
      </div>

      <div className="pb-20 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">{t("ContactTitle")}</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">🤙</div>
        </div>
        <ul className="text-sm">
          <li className="pt-1 flex items-center gap-2">
            <FaPhoneAlt />
            <div className="text-slate-400">+82 10 5745 3234</div>
          </li>
          <li className="pt-1 flex items-center gap-2">
            <FaMailBulk />
            <div className="text-slate-400">jgjg2832@gmail.com</div>
          </li>
        </ul>
      </div>
    </>
  );
}
