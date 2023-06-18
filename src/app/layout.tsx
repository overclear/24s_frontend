import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "24S FrontEnd",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-light`}>{children}</body>
        </html>
    );
}
