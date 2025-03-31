import "./globals.css";

export const metadata = {
  title: "pumpions",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "pumpions",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "pumpions Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "pumpions",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
