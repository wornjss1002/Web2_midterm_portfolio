import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="flex justify-center min-h-screen">
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
