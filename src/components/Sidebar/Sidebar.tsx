"use client";

import { useGlobalState } from "@/context/globalProvider";
import Image from "next/image";
import menu from "@/utils/menu";
import Link from "next/link";
import SidebarStyled from '@/components/Sidebar/SidebarStyled'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image
            width={70}
            height={70}
            src="/images/avatar1.png"
            alt="Avatar Logo"
          />
        </div>
        <h1>
          <span>Matheus</span>
          <span>Duarte</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;

          return (
            <li
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  );
};
export default Sidebar;
