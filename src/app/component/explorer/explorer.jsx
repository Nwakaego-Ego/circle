import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faHome,
  faUser,
  faBell,
  faUsers,
  faGear,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./explorer.css";

const Explorer = () => {
  return (
    <>
      <div className="explorer">
        <div>
          <img
            src="/talking_drum.png"
            alt="talking drum"
            className="talking-drum"
          />
        </div>
        <div className="explorer-container mt-4">
          <div className="explorer-item">
            <FontAwesomeIcon icon={faHome} className="fa" />
            <div>Home</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faUser} className="fa" />
            <div>Profile</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faBell} className="fa" />
            <div>Notification</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faUserGroup} className="fa" />
            <div>Circle</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faUsers} className="fa" />
            <div>Yard</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faEnvelope} className="fa" />
            <div>Request</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faGear} className="fa" />
            <div>Setting</div>
          </div>
          <button className="btnSync">Sync</button>
        </div>
      </div>
    </>
  );
};

export default Explorer;
