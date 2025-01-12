import "@repo/tailwind-config/styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="mx-12 my-6">
          <h1 className="text-black font-extrabold text-2xl">Blog</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
