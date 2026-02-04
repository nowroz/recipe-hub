import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import CartItemsProvider from "./providers/CartItemsProvider";
import { ToastContainer } from "react-toastify";

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
        className={`${inter.className} antialiased`}
      >
        <header>
          <Navbar></Navbar>
        </header>
        <CartItemsProvider>
          <main>
            {children}
            <ToastContainer newestOnTop></ToastContainer>
          </main>
        </CartItemsProvider>
      </body>
    </html>
  );
}
