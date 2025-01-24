import Notification from "./Notification";
import "./App.css";
import Popup from "./popup";

function goToNextPage() {
  window.location.href = "https://www.google.com";
}

function App() {
  const popupContent = "This is a popuptext.";
  return (
    <div className="App">
      {/* <Notification
        title="Notice"
        message="This is a notification."
        severity="general"
      />
      <Notification
        title="Notice"
        message="This is a notification."
        severity="important"
      />
      <Notification
        title="Notice"
        message="This is a notification."
        severity="urgent"
      /> */}

      {/* <Popup content={popupContent} /> */}

      {/* use children props to pass the notification to popup elements*/}
      {/* <Popup onClose={goToNextPage}> */}

      <Popup onClose={() => {}}>
        <Notification
          title="Notice"
          message="This is a notification."
          severity="general"
        />
      </Popup>
    </div>
  );
}

export default App;
