import "./globals.css";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"dark:bg-medium font-outfit"}>
        <div> {children}</div>
      </body>
    </html>
  );
}


