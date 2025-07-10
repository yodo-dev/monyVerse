export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <WebsiteHeader /> */}
        {children}
      </body>
    </html>
  );
}
