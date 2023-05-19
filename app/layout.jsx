import Footer from "@components/Footer"
import Nav from "@components/Nav"

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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> 
        </body>
    </html>
  )
}

export default RootLayout