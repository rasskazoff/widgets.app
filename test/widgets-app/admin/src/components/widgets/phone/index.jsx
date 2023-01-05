import React from 'react';

const Phone = (props) => {
  const settings = props.settings
  const url = `tel:+${settings.number}` 
  return (
    <>
        <a href={url} target="_blank" rel="noreferrer" className="p-btn">
          <img className="p-btn__icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIyLjg4IDEyMi4yNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIyLjg4IDEyMi4yNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTMzLjg0LDUwLjI1YzQuMTMsNy40NSw4Ljg5LDE0LjYsMTUuMDcsMjEuMTJjNi4yLDYuNTYsMTMuOTEsMTIuNTMsMjMuODksMTcuNjNjMC43NCwwLjM2LDEuNDQsMC4zNiwyLjA3LDAuMTEgYzAuOTUtMC4zNiwxLjkyLTEuMTUsMi44Ny0yLjFjMC43NC0wLjc0LDEuNjYtMS45MiwyLjYyLTMuMjFjMy44NC01LjA1LDguNTktMTEuMzIsMTUuMy04LjE4YzAuMTUsMC4wNywwLjI2LDAuMTUsMC40MSwwLjIxIGwyMi4zOCwxMi44N2MwLjA3LDAuMDQsMC4xNSwwLjExLDAuMjEsMC4xNWMyLjk1LDIuMDMsNC4xNyw1LjE2LDQuMiw4LjcxYzAsMy42MS0xLjMzLDcuNjctMy4yOCwxMS4xIGMtMi41OCw0LjUzLTYuMzgsNy41My0xMC43Niw5LjUxYy00LjE3LDEuOTItOC44MSwyLjk1LTEzLjI3LDMuNjFjLTcsMS4wMy0xMy41NiwwLjM3LTIwLjI3LTEuNjkgYy02LjU2LTIuMDMtMTMuMTctNS4zOC0yMC4zOS05Ljg0bC0wLjUzLTAuMzRjLTMuMzEtMi4wNy02Ljg5LTQuMjgtMTAuNC02Ljg5QzMxLjEyLDkzLjMyLDE4LjAzLDc5LjMxLDkuNSw2My44OSBDMi4zNSw1MC45NS0xLjU1LDM2Ljk4LDAuNTgsMjMuNjdjMS4xOC03LjMsNC4zMS0xMy45NCw5Ljc3LTE4LjMyYzQuNzYtMy44NCwxMS4xNy01Ljk0LDE5LjQ3LTUuMmMwLjk1LDAuMDcsMS44LDAuNjIsMi4yNSwxLjQ0IGwxNC4zNSwyNC4yNmMyLjEsMi43MiwyLjM2LDUuNDIsMS4yMSw4LjEyYy0wLjk1LDIuMjEtMi44Nyw0LjI1LTUuNDksNi4xNWMtMC43NywwLjY2LTEuNjksMS4zMy0yLjY2LDIuMDMgYy0zLjIxLDIuMzMtNi44Niw1LjAyLTUuNjEsOC4xOEwzMy44NCw1MC4yNUwzMy44NCw1MC4yNUwzMy44NCw1MC4yNXoiLz48L2c+PC9zdmc+" alt="p-btn" />
        </a>
        <style>{`
        .p-btn{
                align-items: center;
                cursor: pointer;
                position: fixed;
                ${settings.position}: 20px;
                bottom: 20px;
                z-index: 99999999999;
                border-radius: 50%;
                justify-content: center;
                display: flex;
                background-color: ${settings.color};
                width: 56px;
                height: 56px;
                box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
            }
            .p-btn__icon{
                width: 50%;
                filter: invert(1);
            }
        `}</style>
    </>
  );
}

export default Phone
