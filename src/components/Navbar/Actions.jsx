import React from "react";

import { Button } from "react-bootstrap";
function Actions() {
    return(
        <div className="actions">
          <Button size="lg" variant="primary" secondary label="LOG IN">Logg inn</Button>
          <Button size="lg" variant="primary" label="Logg inn">Registrer deg</Button>
        <div className="profile">
        </div>
      </div>
    );
}

export default Actions