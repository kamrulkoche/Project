import "../globals.css";
import MenuItems from "../components/NavBar/MenuItems/MenuItems";
import Footer from "../components/Footer/Footer";


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-medium dark:text-white ">
        <div className="font-outfit container mx-auto px-2 sm:px-4 lg:px-10 2lg:px-20  ">
          <MenuItems ></MenuItems>
          <div className=""> {children}</div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}


