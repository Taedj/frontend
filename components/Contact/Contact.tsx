import BackgroundText from "../BackgroundText/BackgroundText";
import AddressBox from "./AddressBox";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="py-16 px-4 sm:px-10 md:px-16 lg:px-20 text-white bg-bg-less-dark"
    >
      <BackgroundText backgroundText="CONTACT" innerText="Get in Touch" />
      <div className="max-w-[1224px] mx-auto w-full md:m-12">
        <div className="flex flex-col md:flex-row md:gap-16 w-full">
          <div className="md:w-auto order-2 md:order-1">
            <AddressBox />
          </div>
          <div className="flex-1 mt-10 md:mt-0 order-1 md:order-2 mb-16">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
