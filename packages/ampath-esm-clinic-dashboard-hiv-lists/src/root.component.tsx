import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { HIVListsRoutes } from "./routes/hiv-lists.routes";
import {
  useMessageEventHandler,
  returnToUrlSub,
} from "./custom-hooks/useMessageEventHandler";

const Root: React.FC = () => {
  const [redirectUrl, setRedirectUrl] = React.useState<string>("");
  const { sendMessage, handleMessage } = useMessageEventHandler();
  React.useEffect(() => {
    sendMessage({ action: "authenticate" });
  }, []);

  React.useEffect(() => {
    window.addEventListener("message", handleMessage.bind(this));
  }, []);

  React.useEffect(() => {
    const sub = returnToUrlSub.subscribe(url => setRedirectUrl(url));
    return () => sub.unsubscribe();
  },[]);



  return (
    <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
      {redirectUrl ? (
        <div>
          <Route path={redirectUrl}/>
        </div>
      ) : (
        HIVListsRoutes.map((hivroute) => (
          <Route
            key={hivroute.name}
            exact
            path={hivroute.path}
            render={(routeProps) => {
              return <hivroute.component {...routeProps} />;
            }}
          />
        ))
      )}
    </BrowserRouter>
  );
};

export default Root;
