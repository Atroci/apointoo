"use client";
import { AppIcon } from "@components/app-icon";
import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase, ThemedTitleV2 } from "@refinedev/mui";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      formProps={{
        defaultValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
      title={
        <ThemedTitleV2
          collapsed={false}
          text="Refine Project"
          icon={<AppIcon />}
        />
      }
    />
  );
};
