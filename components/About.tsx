import Image from "next/image";
import Modal from "./Modal";
import { FaXTwitter, FaInstagram, FaBluesky, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiBento } from "react-icons/si";

function About() {

  const socialLinks = [
    { href: "https://twitter.com/menma275", Icon: FaXTwitter, label: "Twitter" },
    { href: "https://www.instagram.com/menma275/", Icon: FaInstagram, label: "Instagram" },
    { href: "https://bsky.app/profile/sakamura.dev", Icon: FaBluesky, label: "BlueSky" },
    { href: "https://bento.me/sakamura", Icon: SiBento, label: "bento" },
    { href: "https://github.com/menma275", Icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/kusuke-sakamura-09544325a/", Icon: FaLinkedin, label: "LinkedIn" }
  ];

  return (
    <Modal>
      <div className="flex min-h-[50dvh] items-center justify-center bg-foreground">
        <Image src="img/me.jpeg" alt="portrait" className="flex justify-center p-6 aspect-square object-center object-contain" />
      </div>
      <div className="flex min-h-[50dvh] flex-col w-full h-full justify-between gap-6 p-6 md:p-12 overflow-y-auto">
        <h1>Kusuke Sakamura - 坂村 空介</h1>
        <p>
          Hi, I am a developer, designer and artist. the main field of my works is the on screen media. I love trying to create things small and fast. <br />
          Generative Art is my first things to create something using code/program. then I got into this field since then, and I am exploring the beauty by a logic and technology.
        </p>
        <ul className="flex flex-wrap gap-4">
          {socialLinks.map(({ href, Icon, label }) => (
            <li key={href} className="cursor-pointer"><a target="_blank" href={href} className="flex items-center gap-1"><Icon />{label}</a></li>
          ))}
        </ul>
      </div>
    </Modal>
  )
}

export default About;
