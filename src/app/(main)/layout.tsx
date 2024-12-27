import MainNavbar from "@/sections/MainNavbar";
import MainFooter from "@/sections/MainFooter";

// Providers
import ObserverProvider from "@/lib/ObserverProvider";



export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ObserverProvider>
      <main className="max-w-7xl mx-auto">
        <MainNavbar />
        {children}
        <MainFooter />
      </main>
    </ObserverProvider>
  );
}
