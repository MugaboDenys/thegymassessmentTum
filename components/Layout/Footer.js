import Image from "next/image";
import Link from "next/link";
import { departments, footerLinks } from "../../data";

const Footer = () => {
  return (
    <footer className="text-sm mt-20">
      <section className="bg-[#0A2D57] text-white ">
        <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col xl:flex xl:flex-row xl:justify-between  py-[56px]  border-b border-[#9ABCE4]">
          <div className="flex gap-5 text">
            <Image
              src="/images/main-logo.svg"
              width={60}
              height={60}
              alt="logo"
              className="-mt-20"
            />
            <div className="flex flex-col gap-5">
              <p>
                Technical University of Munich <br /> ArcisstraBe 21 <br />{" "}
                80333 Munchen
              </p>
              <p>
                Phone: <span> +49 (0)89-289-01</span> <br />
                Fax: +49 (0)89-289-22000
              </p>
            </div>
          </div>
          <div className="text-base">
            <p className="font-bold ">Let{"'"}s shape the future together</p>
            <p>Support us </p>
          </div>

          <div className="flex flex-col gap-3 text-base">
            <p className="font-bold">Latest news</p>
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#FFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
              Germany{"'"}s strongest university in business sciences
            </p>
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#FFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>{" "}
              TUM partners with Nobel Sustainability Trust
            </p>
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#FFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>{" "}
              Antihelium nuclei as messengers from the depths of the galaxy
            </p>
          </div>
        </div>
        <div className="py-[27px]">
          <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-10 ">
            <h1 className="font-bold">
              Schools and <br /> Departments:
            </h1>
            <div className="flex w-full flex-wrap gap-4">
              {departments.map((department, index) => {
                return (
                  <p key={index} className="flex gap-1 items-end">
                    {department.departmentName}{" "}
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3v2H5v14h14v-4h2v6H3V3h6zm12 0v8h-2V6.414l-6.293 6.293-1.414-1.414L17.584 5H13V3h8z"
                        fill="#fff"
                      />
                    </svg>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-16 mt-[26px]">
            <h1 className="font-bold">footerLinks:</h1>
            <div className="flex w-full flex-wrap gap-4">
              {footerLinks.map((links, index) => {
                return (
                  <p
                    key={index}
                    className="flex hover:underline hover:cursor gap-1 items-end"
                  >
                    {links.link}{" "}
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3v2H5v14h14v-4h2v6H3V3h6zm12 0v8h-2V6.414l-6.293 6.293-1.414-1.414L17.584 5H13V3h8z"
                        fill="#fff"
                      />
                    </svg>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#072140] text-sm text-white py-[26px]">
        <div className="px-6 xl:px-0 xl:max-w-[90rem] xl:mx-auto">
          <div className="xl:flex xl:flex-row  xl:justify-between flex flex-col-reverse gap-6 xl:gap-0 w-full">
            <ul className="flex gap-4 xl:gap-6 flex-wrap">
              <li>Jobs</li>
              <li>Feedback</li>
              <li>Press and Media</li>
              <li>Accessibility</li>
              <li>Privacy Policy</li>
              <li>Legal Notice</li>
            </ul>
            <div className="flex gap-6">
              <Image src='/images/facebook.svg' alt="facebook" width={20} height={20} />
              <Image src='/images/youtube.svg' alt="youtube" width={20} height={20} />
              <Image src='/images/twitter.svg' alt="twitter" width={20} height={20} />
              <Image src='/images/instagram.svg' alt="instagram" width={20} height={20} />
              <Image src='/images/linkedin.svg' alt="linkedin" width={20} height={20} />
              <Image src='/images/wifi.svg' alt="wifi" width={20} height={20} />
            </div>
          </div>

          <div className="flex gap-8 pt-[27px]">
            <Image
              src="/images/partners.svg"
              alt="logo"
              width={32}
              height={59.51}
            />
            <Link href={'/'}>
            <div className="flex flex-col gap-4">
              <p>TUM Partners of Excellence</p>
              <p>
                Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW ·
                Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries
                · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN ·
                Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens ·
                TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft ·
                Volkswagen · Wacker Chemie
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