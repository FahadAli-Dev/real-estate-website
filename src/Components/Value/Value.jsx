import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
import data from "../../data/accordion.jsx";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Value = () => {
  return (
    <section className="value-section">
      <div className="v-container padding">
        {/* Left Side */}
        <div className="v-left">
          <div className="img-container">
            <img src="/value.png" alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Values We Give To You</span>
          <span className="secondary-text">
            We are always ready to help by providing the best services for you.
            <br />
            We believe, a good place to live can make your life better.
          </span>

          <Accordion preExpanded={[0]}>
            {data.map((items, idx) => {
              return (
                <AccordionItem uuid={idx} key={idx}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="icon">{items.icon}</div>
                      <span className="primaryText">{items.heading}</span>
                      <div className="icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondary-text">{items.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
