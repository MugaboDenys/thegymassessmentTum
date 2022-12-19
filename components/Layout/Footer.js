import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/logo2.svg"
import instagram from "../../public/instagram.svg"
import twitter from "../../public/twitter.svg"
import facebook from "../../public/facebook.svg"
import rss from "../../public/rss.svg"
import linkedin from "../../public/linkedin.svg"
import youtube from "../../public/youtube.svg"


const Footer = () => {
  return (
    <footer className="text-sm">
      <section className="bg-darkbluefooter text-sm text-white py-[26px]">
        <div className="px-6 xl:px-0 xl:max-w-[90rem] xl:mx-auto">
          <div className="xl:flex xl:flex-row  xl:justify-between flex flex-col-reverse gap-6 xl:gap-0 w-full">
            <ul className="flex gap-4 xl:gap-6 flex-wrap">
              <Link href={'https://www.tum.de/en/about-tum/careers-and-jobs/careers-at-tum'} className="hover:underline">Jobs</Link>
              <Link href={'https://www.tum.de/en/about-tum/contact-directions/feedback'} className="hover:underline">Feedback</Link>
              <Link href={'https://www.tum.de/en/about-tum/contact-directions/feedback'} className="hover:underline">Press and Media</Link>
              <Link href={'https://www.tum.de/en/about-tum/contact-directions/feedback'} className="hover:underline">Accessibility</Link>
              <Link href={'https://www.tum.de/en/about-tum/contact-directions/feedback'} className="hover:underline">Privacy Policy</Link>
              <Link href={'https://www.tum.de/en/about-tum/contact-directions/feedback'} className="hover:underline">Legal Notice</Link>
            </ul>
            <div className="flex gap-6">
              <Image
                src={facebook}
                alt="facebook"
                width={20}
                height={20}
              />
              <Image
                src={youtube}
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src={twitter}
                alt="twitter"
                width={20}
                height={20}
              />
              <Image
                src={instagram}
                alt="instagram"
                width={20}
                height={20}
              />
              <Image
                src={linkedin}
                alt="linkedin"
                width={20}
                height={20}
              />
              <Image src={rss} alt="wifi" width={20} height={20} />
            </div>
          </div>

          <div className="flex gap-8 pt-[27px]">
            <Image
              src={logo2}
              alt="logo"
              width={32}
              height={59.51}
            />
            <Link href={"/"} className="">
              <div className="flex flex-col gap-4 hover:underline">
                <p>TUM Partners of Excellence</p>
                <p>
                  Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW
                  · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik
                  Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde
                  · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon ·
                  Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen
                  Wirtschaft · Volkswagen · Wacker Chemie
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
