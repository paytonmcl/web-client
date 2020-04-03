import React from 'react';

import { Dimmer, Loader } from 'semantic-ui-react';

const DimSpinner = () => {
  return (
    <Dimmer active>
      <Loader size="massive">Loading...</Loader>
    </Dimmer>
  );
};

export default DimSpinner;
