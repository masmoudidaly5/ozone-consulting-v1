import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-16">
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
