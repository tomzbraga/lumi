import icon from "@/assets/userIcon/user_icon_circled.svg";
import Image from "next/image";

export default function UserIcon() {
  return (
    <div className="relative">
      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-foreground">
        <Image src={icon} width={40} alt="User Icon" />
      </button>
    </div>
  );
}
