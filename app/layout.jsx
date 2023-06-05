import Footer from "@components/Footer"
import Nav from "@components/Nav"
import Script from "next/script";
// export const metadata = {
//     title : "Homepage",
//     description : "nextJs demo Application"
// }

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main className="app">
                <Nav/>
                {children}
                <Footer/>
            </main>
            
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></Script>
            <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
            <Script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></Script>
            <Script src="https://unpkg.com/split-type"></Script>
        </body>
    </html>
  )
}

export default RootLayout