import React from "react";
import { Link, useHistory } from "react-router-dom";
import { returnToUrlSub } from "../custom-hooks/useMessageEventHandler";
import styles from "./dashboard.component.css";
import routesJson from "./dashboard.routes.json";

const Dashboard: React.FC = () => {
  const history = useHistory();

  React.useEffect(() => {
    const sub = returnToUrlSub.subscribe((url) => {
      if(url){
        history.push(url);
      }
    });
    return () => sub.unsubscribe();
  }, []);

  return (
    <div className={styles["home-container"]}>
      {routesJson.map((routes) => (
        <Link to={routes.url} key={routes.name} className={styles["home-link"]}>
          <div className={styles["report-title-container"]}>
            <div className={`${styles["report-icon"]}`}>
              <svg className="omrs-icon">
                <use xlinkHref={`#${routes.icon}`}></use>
              </svg>
            </div>
            <div className={styles["report-title"]}>{routes.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
