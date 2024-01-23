import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./ui/SideBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Website Canvas",
  description: "personal website canvas (for anyone).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ margin: 0, height: '100%' }} lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, height: '100%' }} className={`${inter.className} d-flex`}>
          <SideBar />
          {children}
      </body>
    </html>
  );
}
