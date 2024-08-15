import Navbar from '../components/navbar/Navbar'
// import MainContent from '../components/mainContent/MainContent'
import Footer from "../components/Footer"
import BlogSnippet from '../components/blogSnippet/BlogSnippet'
function Home() {
  return (
    <>
        <Navbar/>
        <BlogSnippet />
        <Footer/>
    </>
  )
}

export default Home