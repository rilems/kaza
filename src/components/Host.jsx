import React from "react";

const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="server">
      <div className="server__name">
        <p className="server__firstname">{name.trim()}</p>
        <p className="server__lastname">{lastname.trim()}</p>
      </div>
      <img src={host.picture} alt="host" className="server__picture" />
    </div>
  );
};

export default Host;