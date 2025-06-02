import ReduxProvider from "./ReduxStore/ReduxProvider";
import "./App.css";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";


export const metadata = {
  title: "BankDash: Streamlined Financial Insights and Analytics",
  description: "Optimize your banking experience with real-time data and user-friendly tools designed for informed decision-making.",
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
