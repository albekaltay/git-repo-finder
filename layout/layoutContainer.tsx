"use client";

import React, { ReactNode } from "react";
import styles from "./layoutContainer.module.css";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Dropdown } from "@/components/ui";
import userIcon from "@/public/icons/user-outline.svg";
import git from "@/public/icons/git.svg";

interface LayoutContainerProps {
  children: ReactNode;
}

const userDropdownItems = [
  {
    label: "Logout",
    onClick: () =>
      signOut({
        callbackUrl: "/",
      }),
  },
];

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const userName = session?.user?.name || "User";

  if (!isAuthenticated) {
    return (
      <main className={`${styles.main} ${styles.loginMain}`}>{children}</main>
    );
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Image src={git} alt="logo" width={40} height={40} />
          <span className={styles.navbarLogoText}>Git Repo Finder</span>
        </div>
        <div className={styles.navbar__user}>
          <Dropdown
            icon={<Image src={userIcon} alt="user" width={24} height={24} />}
            dropdownItems={userDropdownItems}
            text={userName}
          />
        </div>
      </nav>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Albek ALTAY
      </footer>
    </div>
  );
};

export default LayoutContainer;
