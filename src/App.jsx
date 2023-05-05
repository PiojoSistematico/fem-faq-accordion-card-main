import { useState } from "react";
import illustrationMobile from "./assets/illustration-woman-online-mobile.svg";
import illustrationDesktop from "./assets/illustration-woman-online-mobile.svg";
import illustrationBox from "./assets/illustration-box-desktop.svg";
import backgroundMobile from "./assets/bg-pattern-mobile.svg";
import backgroundDesktop from "./assets/bg-pattern-desktop.svg";
import Accordion from "./components/Accordion";

function App() {
  const [count, setCount] = useState(0);

  const q1 = "How many team members can I invite?";
  const a1 =
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";

  const q2 = "What is the maximum file upload size?";
  const a2 =
    "No more than 2GB. All files in your account must fit your allotted storage space.";

  const q3 = "How do I reset my password?";
  const a3 =
    "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.";

  const q4 = "Can I cancel my subscription?";
  const a4 =
    "Yes! Send us a message and we’ll process your request no questions asked.";

  const q5 = "Do you provide additional support?";
  const a5 =
    "Chat and email support is available 24/7. Phone lines are open during normal business hours.";

  return (
    <div>
      <img className="img-illustration-box" src={illustrationBox} alt="" />
      <div className="wrapper">
        <section className="image-section">
          <img
            className="img-background-mobile"
            src={backgroundMobile}
            alt=""
          />
          <img
            className="img-background-desktop"
            src={backgroundDesktop}
            alt=""
          />
          <img
            className="img-illustration-mobile"
            src={illustrationMobile}
            alt=""
          />
          <img
            className="img-illustration-desktop"
            src={illustrationDesktop}
            alt=""
          />
        </section>

        <section className="questions-section">
          <h1>FAQ</h1>
          <Accordion question={q1} answer={a1}></Accordion>
          <Accordion question={q2} answer={a2}></Accordion>
          <Accordion question={q3} answer={a3}></Accordion>
          <Accordion question={q4} answer={a4}></Accordion>
          <Accordion question={q5} answer={a5}></Accordion>
        </section>
      </div>
    </div>
  );
}

export default App;
