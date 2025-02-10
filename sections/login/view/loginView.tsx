"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import styles from "./loginView.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import git from "@/public/icons/git.svg";
import gitHubLogo from "@/public/icons/gitHubLogo.svg";
import Button from "@/components/ui/button/button";
const LoginView = () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleGithubLogin = async () => {
    try {
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.logo}>
          <Image src={git} alt="logo" width={100} height={100} />
        </div>
        <span className={styles.title}>Login to your account</span>
        <span className={styles.description}>Welcome back!</span>
        <Button
          onClick={handleGithubLogin}
          label="Login with GitHub"
          icon={
            <Image
              src={gitHubLogo}
              alt="logo"
              width={24}
              height={24}
              className={styles.gitHubLogo}
            />
          }
        />
      </div>
    </div>
  );
};

export default LoginView;
