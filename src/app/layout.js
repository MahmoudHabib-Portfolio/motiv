import ReduxProvider from "./ReduxStore/ReduxProvider";
import "./App.css";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";


export const metadata = {
  title: "Innovative Car Dashboard UI Design - Enhance Your App Experience",
  description: "Explore our cutting-edge Car Dashboard UI Design on Figma. Perfect for developers and designers looking to elevate their automotive applications with a sleek, user-friendly interface. Join the community and start designing today!",
  icons:{
    icon:{
      url: '/imgs/favicon.png'
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bodybg text-dashLight">
          <ReduxProvider>
          { children }
          </ReduxProvider>
      </body>
    </html>
  );
}
