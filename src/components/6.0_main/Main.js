//
//


// ___глобальные компоненты
import Header from "../header/Header";
import Footer from "../footer/Footer";
// ___локальные компоненты
import CalculatorHistory from "./1_section_calculatorHistory/CalculatorHistory";
import MulticalculatorCards from "./2_section_multicalculatorCards/MulticalculatorCards";
import VikingAndFrog from "./3_section_vikingAndFrog/VikingAndFrog";
import QuickClick from "./4_section_quickClick/QuickClick";

function Main() {
  return (
    <>
      <Header />
      <main>
        {/* <!-----1_section_calculatorHistory--------------------------------------------------------------------> */}
        <CalculatorHistory />

        {/* <!-----2_section_multicalculatorCards-----------------------------------------------------------------> */}
        <MulticalculatorCards />

        {/* <!-----3_section_vikingAndFrog------------------------------------------------------------------------> */}
        <VikingAndFrog />

        {/* <!-----4_section_quickClick---------------------------------------------------------------------------> */}
        <QuickClick />
      </main>
      <Footer />
    </>
  );
}

export default Main;