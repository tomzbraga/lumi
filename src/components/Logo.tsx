import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/lumi_logo_black_text_compact.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Ir para a página inicial da Lumi"
      className="flex items-center gap-2"
    >
      <Image src={logo} alt="Lumi" width={180} />
    </Link>
  );
}
