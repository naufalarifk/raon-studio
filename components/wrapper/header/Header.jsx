import Image from "next/image";
import Link from "next/link";
import RaonLogo from '../../../public/logos/Raon.png'
import { useRouter } from "next/router";
function Header() {
    const router = useRouter()
  return (
    <header className="flex flex-row justify-between py-6 px-12">
        <div className="items-center">
      <Image src={RaonLogo} height={32} width={64} alt="" />
      </div>
      <ul className="lg:flex hidden flex-row justify-evenly space-x-6 text-[#424242] items-center font-bold">
        <li><Link href="/"><a className={router.pathname == "/" ? "text-amber-400": "text-[#424242]"}>HOME</a></Link></li>
        <li><Link href="/works"><a className={router.pathname == "/works" ? "text-amber-400": "text-[#424242]"}>WORKS</a></Link></li>
        <li><Link href="/services"><a className={router.pathname == "/services" ? "text-amber-400": "text-[#424242]"}>SERVICES</a></Link></li>
        <li><Link href="/about"><a className={router.pathname == "/about" ? "text-amber-400": "text-[#424242]"}>ABOUT</a></Link></li>
        <li><Link href="/blog"><a className={router.pathname == "/blog" ? "text-amber-400": "text-[#424242]"}>BLOG</a></Link></li>
        <li><Link href="/contact"><a className={router.pathname == "/contact" ? "text-amber-400": "text-[#424242]"}>CONTACT</a></Link></li>
      </ul>
        <div className="bg-[#EE7526] lg:block hidden rounded-full py-2 px-8">
            <p className="font-bold text-white">BEST OFFER</p>
        </div>
    </header>
  );
}

export default Header;
