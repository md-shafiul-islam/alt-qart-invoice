import React from "react";
import { Helmet } from "react-helmet";

const EsHeaderTitle = ({ page = "" }) => {
  return (
    <Helmet>
      <title>Green Architecture | {page}</title>
    </Helmet>
  );
};

export default EsHeaderTitle;
