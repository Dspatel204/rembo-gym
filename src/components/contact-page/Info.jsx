import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        We are here for help you To Shape Your Body
      </h3>
      <p className="font-medium text-gray-300">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente molestias excepturi, ipsam alias dolor, in debitis labore rem, non obcaecati eos vel quos. Minus cumque eum facere molestiae iusto adipisci!
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Surat, Gujarat </h4>
          <address className="font-medium not-italic text-gray-300">
            Radhika complex
            <br /> surat
          </address>
        </div>
        <div>
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Sat: 6:00 am — 10:00 pm
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Information</h4>
          <a
            href="tel:+91 9586471510"
            className="block font-medium text-gray-300"
          >
            +91 9586471510
          </a>
          <a
            href="dishant.sureshbhai@gmail.com"
            className="block font-medium text-gray-300"
          >dishant.sureshbhai@gmail.com
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
