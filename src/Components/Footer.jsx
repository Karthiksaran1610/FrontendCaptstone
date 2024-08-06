import { Footer } from "flowbite-react";
import React from "react";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 dark:bg-black ">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 g ">
          <div>
            <Footer.Brand
              href="#"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qzcm_IUW-I_34aWLDvgsyJptx2ShICqnsQ&s"
              alt="Logo"
              name="Rental Inn!"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="page"
                className="text-lg hover:underline font-serif mt-3 ml-7 mb-5  "
              />
              <Footer.LinkGroup col>
                <Footer.Link href="/" className="ml-7">
                  Home
                </Footer.Link>
                <Footer.Link href="/about" className="ml-7">
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Contact us"
                className="text-lg hover:underline font-serif mt-3"
              />
              <Footer.LinkGroup col>
                <p>
                  23/7 ,
                  <br />
                  Rajiv Gandhi Tech Park,
                  <br />
                  Pune, Maharashtra 411038
                  <br />
                  +91 9876543210
                </p>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
