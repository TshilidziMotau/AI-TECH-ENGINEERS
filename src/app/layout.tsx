import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroSpatial Prime | AI-Driven Drone Mapping & Surveying",
  description: "Premium geospatial intelligence platform for drone mapping, LiDAR, hydrology, inspections, and engineering support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
