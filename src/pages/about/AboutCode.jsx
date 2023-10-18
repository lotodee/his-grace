import React from 'react';
import "./AboutCode.scss";

const AboutCode = () => {
  return (
    <>
    <div>
    <div className="top">
        <div className="image">
          <img src="https://images.ctfassets.net/pdf29us7flmy/4lj2CWL16wBUsKYCfrDCm4/5a55005c1277e624754081afa0059080/B8093-How-to-Create-Your-Code-of-Ethics-D2-Social.png?w=720&q=100&fm=jpg" alt="" />
          <div className="titlecontainer">
            <div className="text">CODE OF CONDUCT</div>
          </div>
        </div>
      </div>
    </div>
    <div className="aboutCodeContainer">
      <div className="top">
        <img src="/img/imgg/newcode.png" alt="" />
      </div>
      <div className="bottomcode">
        <div className="conductContainer">
          <h2>Our Code of Conduct</h2>
          <p>
            At our school, we uphold a high standard of conduct to create a safe, respectful, and inclusive environment for all students and staff. We expect everyone to adhere to the following principles:
          </p>
          <ol>
            <li>
              <strong>Respect:</strong> Treat others with kindness, respect, and empathy. Be inclusive and considerate of diverse backgrounds and opinions.
            </li>
            <li>
              <strong>Responsibility:</strong> Take responsibility for your actions, both in academics and behavior. Complete assignments and projects with integrity.
            </li>
            <li>
              <strong>Honesty:</strong> Be honest and truthful in your words and actions. Plagiarism and cheating are not tolerated.
            </li>
            <li>
              <strong>Punctuality:</strong> Arrive on time for classes, meetings, and events. Being punctual shows respect for others' time.
            </li>
            <li>
              <strong>Safety:</strong> Ensure the safety of yourself and others. Report any safety concerns promptly.
            </li>
          </ol>
          <p>
            Violations of our code of conduct will be addressed with appropriate consequences. By following these principles, we can create a positive and nurturing learning environment for all.
          </p>
        </div>
      </div>
 
    </div>
         <hr className='dividee'/>
        </>
  )
}

export default AboutCode;
