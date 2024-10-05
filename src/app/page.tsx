import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="w-full h-80 bg-orange-500">{/* input profile img */}</div>

      <h3 className="w-full p-4 border-b">
        Hello. Im kyun. nice to meet you everyone. 😁
      </h3>

      <div className="pb-4 pt-8 flex justify-between items-center">
        <dl>
          <dt className="pb-2 text-2xl text-slate-100">Jaekyun-Im</dt>
          <dd className="text-sm text-slate-400">web frontend developer</dd>
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
          <h4 className="font-bold text-xl">About Me</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">👨‍💼</div>
        </div>
        <p className="text-sm">
          I am a web front-end developer living in Cheongju, South Korea. I have
          a deep passion for web technologies and user interface design, and I
          am always striving to create beautiful and user-friendly websites. I
          provide web solutions using basic HTML, JavaScript, CSS, as well as
          React or Next.js. I enjoy learning and applying new technologies, with
          the goal of enhancing user experience through my projects.
        </p>
      </div>

      <div className="pb-4 pt-8 text-sm">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">My Life</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">🗒️</div>
        </div>

        <dl className="flex mb-2">
          <dt className="w-14 font-medium">1991</dt>
          <dd className="text-slate-300">Born in Chungju, South Korea</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2015</dt>
          <dd className="text-slate-300">Major Web Develop</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2015</dt>
          <dd className="text-slate-300">Reconers Web Publisher</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2017</dt>
          <dd className="text-slate-300">ST Unitas Web Developer</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2020</dt>
          <dd className="text-slate-300">Delicious Web Frontend Developer</dd>
        </dl>
        <dl className="flex mb-2">
          <dt className="w-14 font-medium">2022~</dt>
          <dd className="text-slate-300">The Jackpot Web Frontend Developer</dd>
        </dl>
      </div>

      <div className="pb-4 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">I Like</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">❤️</div>
        </div>
        <p className="text-sm">
          Workout, Travel, Music, Guitar, Thailand, Escape from Tarkov, Learning
          Something, Cooking
        </p>
      </div>

      <div className="pb-4 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">Other Info</h4>
          <div className="flex-1 border-b border-slate-500 h-1"></div>
          <div className="text-2xl">☂️</div>
        </div>
        <ul>
          <li>
            <Link
              href="https://github.com/yimpetit"
              className="flex items-center gap-2"
            >
              <FaGithub /> Github
            </Link>
          </li>
          <li className="pt-1">
            <Link
              href="https://www.instagram.com/yim_petit/"
              className="flex items-center gap-2"
            >
              <FaInstagram />
              Instagram
            </Link>
          </li>
        </ul>
      </div>

      <div className="pb-20 pt-8">
        <div className="flex justify-between gap-4 items-center pb-2">
          <h4 className="font-bold text-xl">Contact</h4>
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
