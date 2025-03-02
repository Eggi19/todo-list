import Header from "@/components/header";
import RightMenu from "@/components/rightMenu";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex min-h-screen">
          <RightMenu />
          <main className="h-screen mt-16 px-12 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
