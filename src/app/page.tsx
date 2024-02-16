
import SideBar from "@/app/ui/SideBar";
import { randomUUID } from "crypto";

export default function Home() {
  return (
    <main className='flex-grow-1 d-flex flex-column p-5'>
      <span>
        Hello! I'm Nachmi Kott. This is a work in progress (WIP) personal website. 
      </span>
      <span>I am building this completely from scratch.</span>
      
      <span>
        The main goals of this project are:
        <ul>
          <li key={randomUUID()}>Create a space in which I can share passions; from coding to cooking.</li>
          <li key={randomUUID()}>Educate visitors on <i>how I built something</i>; from things like making Web Accessible (A11Y) site Navigation to how I monitor the performance of this web app.<br/>
            - Note: This may be a simple personal project website, but I intend on leveraging industry-standard code architecture, infrastructure design, testing strategies and monitoring tools
          </li>
          <li key={randomUUID()}>Demonstrate my engineering skills and how to get in touch with me for potential collaboration (fancy talk for employment :-))</li>
        </ul>
      </span>
    </main>
  );
}
