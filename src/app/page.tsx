import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {  
  // fetch(
  //   "https://jqu2qe6wfg.execute-api.ap-south-1.amazonaws.com/portfolioMail",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstName: "CORS",
  //       lastName: "Lol",
  //       email: "koustav@example.com",
  //       message: "Hey! This is a test message3 from Postman.",
  //     }),
  //   }
  // ).then((response) => {
  //   if (response.ok) {
  //     console.log("Email sent successfully!");
  //   } else {
  //     console.error("Failed to send email.");
  //   }
  // });
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
