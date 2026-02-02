import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
})

export const metadata = {
  title: {
    default: "Recipe Hub",
    template: "%s | Recipe Hub"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
