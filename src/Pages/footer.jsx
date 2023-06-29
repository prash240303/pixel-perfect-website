
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|footer)">
          <Footer {...footerData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame1Data = {
    children: "Speakers",
};

const frame2Data = {
    children: "Sponsors",
};

const footerData = {
    image1: "https://anima-uploads.s3.amazonaws.com/projects/6493d341b62dc1e09bdc3a80/releases/649d0d15fefcf687c34e49a6/img/image-1@2x.png",
    drBRAmbedkarNati1: <React.Fragment>DR B R AMBEDKAR NATIONAL INSTITUTE OF<br /> TECHNOLOGY JALANDHAR -PUNJAB</React.Fragment>,
    image17: "https://anima-uploads.s3.amazonaws.com/projects/6493d341b62dc1e09bdc3a80/releases/649d0d15fefcf687c34e49a6/img/image-17@2x.png",
    navigate: "NAVIGATE",
    place: "Home",
    committee: "Committee",
    awards: "Awards",
    registrations: "Registrations",
    contactUs1: "Contact us",
    contactUs2: "CONTACT US",
    drBRAmbedkarNati2: <React.Fragment>Dr B R Ambedkar National Institute of Technology Jalandhar<br />G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</React.Fragment>,
    telephone919888604632: "Telephone  : +919888604632",
    emailWrecNitjAcIn: "Email: wrec@nitj.ac.in",
    copyright: "© Copyright",
    allRightsReserved: "All Rights Reserved.",
    frame1Props: frame1Data,
    frame2Props: frame2Data,
};

