import localFont from "next/font/local";

export const workSans = localFont({
  src: [
    {
      path: "./WorkSans/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./WorkSans/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});
