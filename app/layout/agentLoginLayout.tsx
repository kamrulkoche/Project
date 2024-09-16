import "../globals.css";
import MenuItems from "../components/NavBar/MenuItems/MenuItems";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="bg-gradient-to-r from-pink-200 to-blue-200 h-screen">
          <div className="font-outfit container mx-auto px-2 sm:px-[100px] lg:px-[40px] 2lg:px-[100px]  ">
            <MenuItems ></MenuItems>
            <div> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}


