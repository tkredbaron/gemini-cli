import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Hero } from "@/components/Hero";
import { MotifBand } from "@/components/MotifBand";
import { TheMoment } from "@/components/TheMoment";
import { Pillars } from "@/components/Pillars";
import { ParadeBand } from "@/components/ParadeBand";
import { WhyThisBook } from "@/components/WhyThisBook";
import { AboutAuthor } from "@/components/AboutAuthor";
import { BuyDetails } from "@/components/BuyDetails";
import { StructuredData } from "@/components/StructuredData";

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Hero locale={locale} dict={dict} />
      <TheMoment dict={dict} />
      <MotifBand dict={dict} />
      <Pillars dict={dict} />
      <ParadeBand dict={dict} />
      <WhyThisBook dict={dict} />
      <AboutAuthor dict={dict} />
      <BuyDetails locale={locale} dict={dict} />
    </>
  );
}
