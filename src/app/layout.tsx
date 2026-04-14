import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased scroll-smooth"
    >
      <body className="flex flex-col min-h-full">{children}</body>
    </html>
  );
}
