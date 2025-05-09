import "./globals.css";

export const metadata = {
  title: "Explore durable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
