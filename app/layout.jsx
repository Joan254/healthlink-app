import { Montserrat } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "HealthLink App",
  description: "Streamlining Healthcare Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased text-gray-900 bg-[#f0f4f8]`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: montserrat.style.fontFamily,
                colorPrimary: "#2b6cb0",
              },
            }}
          >
            <main className="min-h-screen">
              {children}
            </main>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
