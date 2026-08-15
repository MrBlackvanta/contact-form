import ContactForm from "@/components/form/contact-form";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center justify-center px-4 py-8 sm:px-10 sm:py-16">
        <div className="w-full max-w-184 rounded-2xl bg-white p-6 sm:p-10">
          <h1 className="text-heading font-bold">Contact Us</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
