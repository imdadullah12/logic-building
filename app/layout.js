'use client'
import { Dosis } from 'next/font/google'
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from "@/components/theme-provider";

const font = Dosis({
  weight: ['300', '500'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ProgressBar height="4px" options={{ showSpinner: false }} shallowRouting />
          {children}
          <ToastContainer position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
