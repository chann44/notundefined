import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notundefined - Blog by Vikash",
  description: "A blog about frontend development",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <link rel="icon" href="/pfp.svg" sizes="any" />
      <body
        className={`antialiased min-h-screen bg-white dark:bg-background text-slate-900 dark:text-primary ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <div className="relative h-8 w-8 dark:bg-primary rounded-full flex items-center justify-center">
                  <Link href={"/"}>
                    <Image
                      src={"/pfp.svg"}
                      alt="avtar"
                      fill
                      className="rounded-full"
                    />
                  </Link>
                </div>

                <nav className="ml-auto text-sm font-medium gap-4 flex items-center">
                  <Link href="/">Home</Link>
                  <Link href="/blog">blog</Link>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
