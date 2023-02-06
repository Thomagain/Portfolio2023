import Footer from "./Footer"
import Navigation from "./Navigation"
import Experience from "./experience/page"
import About from "./about/page"
import Contact from "./contact/page"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className=" bg-gradient-to-b from-gray-900  via-gray-800 to-emerald-800">
        <Navigation/>
        {children}
        <About/>
        <Experience/>
        <Contact/>
        <Footer />
        </section>
  )
}
