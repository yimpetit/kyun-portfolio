import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { useTranslations } from "next-intl";
// import ThreeScene from "@/components/Cube";
import ThreeScene from "@/components/KyunCube";

export default function Home() {
  const t = useTranslations("IntroPage");
  return (
    <>
      <div className="w-full">
        {/* <Image
          src="/main_profile.jpg"
          alt="profile"
          width="600"
          height="320"
        ></Image> */}
        {/* <ThreeScene /> */}
        <ThreeScene />
      </div>

      <h3 className="w-full p-4 border-b">{t("introTitle")} 😁</h3>

      <div className="pb-4 pt-8 flex justify-between items-center">
        <dl>
          <dt className="pb-2 text-2xl text-slate-100">{t("introName")}</dt>
          <dd className="text-sm text-slate-400">{t("introJob")}</dd>
        </dl>
        <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
          <Image
            src="/main_profile.jpeg"
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

      <div className="pb-4 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">기술</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">🧑‍💻</div>
        </div>
        <ul className="grid grid-cols-2">
          <li>- Figma</li>
          <li>- Blender 3D</li>
          <li>- HTML / CSS / JavaScript</li>
          <li>- React</li>
          <li>- Next.js</li>
          <li>- TypeScript</li>
          <li>- Tailwind CSS</li>
          <li>- Sanity CMS</li>
          <li>- Vercel</li>
          <li>- 웹 성능 최적화</li>
          <li>- SEO</li>
          <li>- Git</li>
        </ul>
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
          <h4 className="font-bold text-xl">{t("works")}</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">🎨</div>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          <li className="relative">
            <Image
              src="/photos/p1.jpeg"
              alt=""
              width={400}
              height={400}
              className="opacity-30 rounded-lg border border-slate-500"
            />
            <div className="absolute left-0 top-0 w-full h-full text-2xl flex p-4 font-bold">
              {t("renewel")}
            </div>
            <ul className="pt-2 pb-6 pl-2 opacity-70">
              <li>- 아임웹 사용</li>
            </ul>
          </li>
          <li className="relative">
            <Image
              src="/photos/p2.jpeg"
              alt=""
              width={400}
              height={400}
              className="opacity-30 rounded-lg border border-slate-500"
            />
            <ul className="pt-2 pb-6 pl-2 opacity-70">
              <li>- Next.js 프론트엔드 개발</li>
            </ul>
            <div className="absolute left-0 top-0 w-full h-full text-2xl flex p-4 font-bold">
              {t("noService")}
            </div>
          </li>
          <li>
            <Link href="https://heosupdf.com/" target="_blank">
              <Image
                src="/photos/p3.webp"
                alt=""
                width={400}
                height={400}
                className="rounded-lg hover:scale-105 transition border border-slate-500/50"
              />
            </Link>
            <ul className="pt-2 pb-6 pl-2 opacity-70">
              <li>- 레이아웃 및 UI 전체 디자인</li>
              <li>- 프론트엔드 개발</li>
            </ul>
          </li>
          <li>
            <Link href="https://www.choinchocolate.com/" target="_blank">
              <Image
                src="/photos/p5.jpeg"
                alt=""
                width={400}
                height={400}
                className="rounded-lg hover:scale-105 transition border border-slate-500/50"
              />
            </Link>
            <ul className="pt-2 pb-6 pl-2 opacity-70">
              <li>- 레이아웃 디자인</li>
              <li>- UI 디자인(이미지 소스 제외)</li>
              <li>- 블랜더 3D 작업</li>
              <li>- Three.js 3D 오브젝트 랜더링</li>
              <li>- Next.js 프론트엔드 개발</li>
            </ul>
          </li>
          <li>
            <Link href="https://mi.nujackpot.com/" target="_blank">
              <Image
                src="/photos/p4.jpeg"
                alt=""
                width={400}
                height={400}
                className="rounded-lg hover:scale-105 transition border border-slate-500/50"
              />
            </Link>
            <ul className="pt-2 pb-6 pl-2 opacity-70">
              <li>- 레이아웃 디자인</li>
              <li>- UI 디자인(이미지 소스 제외)</li>
              <li>- 블랜더 3D 작업</li>
              <li>- Three.js 3D 오브젝트 랜더링</li>
              <li>- Next.js 프론트엔드 개발</li>
            </ul>
          </li>
          {/* <li>
            <div className="w-full h-full border border-slate-500/50 rounded-lg flex items-center justify-center text-4xl opacity-30">
              EMPTY
            </div>
          </li> */}
        </ul>
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
            <div className="text-slate-400">+82 10 2943 5571</div>
          </li>
          <li className="pt-1 flex items-center gap-2">
            <FaMailBulk />
            <div className="text-slate-400">cllb5571@gmail.com</div>
          </li>
        </ul>
      </div>
    </>
  );
}
