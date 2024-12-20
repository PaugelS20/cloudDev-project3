/* Sam Paugel 2024© */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Navbar } from "./pages";
import { IonPage, IonContent } from "@ionic/react";
import "./Master.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css"; // Remove if nothing is visible
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { setupIonicReact } from "@ionic/react";
setupIonicReact();

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<IonPage>
					<IonContent>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							{/* <Route path="/protected" element={ <ProtectedPage/> }/> */}
							{/* <Route path="/controlled" element={ <ControlledFormPage/> }/> */}
							{/* <Route path="/uncontrolled" element={ <UncontrolledFormPage/> }/> */}
							{/* <Route path="*" element={ <NotFoundPage/> }/> */}
						</Routes>
					</IonContent>
				</IonPage>
			</BrowserRouter>
		</div>
	);
};
export default App;
