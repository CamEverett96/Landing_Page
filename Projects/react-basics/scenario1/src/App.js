import React from "react";
import EmailModal from "./EmailModal/EmailModal.js";
import {EMProvider} from "./EmailModal/EMProvider.js";
const App = () => {
    return(
      <EMProvider>
        <>
        <header className="page-header">
          <div className="logo">
            Berry
            <div className="logo__sub">
              by Jenny
            </div>
          </div>
        </header>
        <main className="content-area">
        <section className="content">
          <div className="left_column">
            <h1>
              We’re experts with <span>modern marketing tools,</span>  so you don’t have to be!
            </h1>
            <p>With hands-on experience in B2B’s most innovative apps and tools, we take a data-driven approach to continually improve prospect engagement. Whether we work directly out of your platform or provide our insights manually, you always get full visibility into the process.</p>
          </div>
          <div className="right_column">
            <img src="/img/Marketing_Tools.svg" />
          </div>
        </section>
        <section className="content2">
          <div className="left_column2">
            <img src="/img/Complete-Department-Marketing.png" />
          </div>
          <div className="right_column2">
            <h1>
              <span>The best way</span>   to build a marketing team
            </h1>
            <p>With EBQ, you’re not just hiring a marketing specialist. You’re getting an entire marketing department at a fraction of the cost and effort of hiring internally.
            </p>
            <p>
              For each project, we provide: a Success Manager to drive high-level strategy, a Project Manager to oversee day-to-day operations, and one or more Specialists working diligently to amplify your brand..
            </p>
          </div>
        </section>
        </main>
        <footer>
        <div className="footer_content">
          <h1>
            Looking to take your <span>marketing to the next level?</span> 
          </h1>
          <div className="button">
            <a href="#" className="contact_button">Contact Us</a>
          </div>
        </div>
      </footer>
       <EmailModal/>
      </>
    </EMProvider>
    )
}
export default App;