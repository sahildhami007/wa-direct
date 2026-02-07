import WhatsAppForm from "@/components/WhatsAppForm";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  const adSlot = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_SLOT;

  return (
    <div className="font-sans flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-8 sm:p-10">
      <main className="flex flex-col gap-8 items-center w-full max-w-md mx-auto mt-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 dark:text-white">Send WhatsApp Direct</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
            Message without saving the contact
          </p>
        </div>
        
        <WhatsAppForm />
        
        {adSlot ? (
          <div className="mt-4 w-full">
            <AdBanner adSlot={adSlot} />
          </div>
        ) : null}
        
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-300 text-center">
          <p className="mb-2">
            How to send WhatsApp message without saving the phone number? That is what this
            WhatsApp direct service is for. You want to sent a WhatsApp message without
            going to the trouble of adding someone to your contact list.
          </p>
          <p>
            You just don't want to bloat your contacts with everyone you ever have sent
            a WhatsApp message. This service is for you.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
