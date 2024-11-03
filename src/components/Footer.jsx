const Footer = () => {
  return (
    <div className="py-[100px]">
      <div className="container mx-auto text-center space-y-8">
        <div>
          <h1 className="mb-3 font-bold text-[2rem] text-[#09080F]">
            Gadget Heaven
          </h1>
          <p className="font-medium text-base text-[#09080F] text-opacity-60">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr />
        <div className="flex justify-evenly">
          <div>
            <h2 className="mb-4 font-bold text-[18px] text-[#09080F]">
              Services
            </h2>
            <ul className="space-y-2 text-base text-[#09080F] text-opacity-60">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-bold text-[18px] text-[#09080F]">
              Company
            </h2>
            <ul className="space-y-2 text-base text-[#09080F] text-opacity-60">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-bold text-[18px] text-[#09080F]">Legal</h2>
            <ul className="space-y-2 text-base text-[#09080F] text-opacity-60">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
