import { useState } from "react";
import trigger from "../assets/trigger.svg";
import "./NewCountry.css";

function NewCountry() {
  const [showDialog, setShowDialog] = useState(false);
  const [newCountryName, setNewCountryName] = useState("");

  return (
    <>
      {showDialog ? (
        <form>
          <div id="overlay"></div>
          <div id="dialog">
            <h3>Enter new country name</h3>
            <input
              type="text"
              name="NewCountryName"
              placeholder="enter name"
              autoFocus
              autoComplete="off"
              value={newCountryName}
              onChange={(e) => setNewCountryName(e.target.value)}
            />
            <div id="buttons">
              <button type="submit" id="save">
                save
              </button>
              <button id="cancel" type="button">
                cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <img
          src={trigger}
          alt="New Country"
          title="New Country"
          id="trigger"
          onClick={() => setShowDialog(true)}
        />
      )}
    </>
  );
}

export default NewCountry;
