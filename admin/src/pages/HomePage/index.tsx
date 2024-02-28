/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
import pluginId from "../../pluginId";

import {
  Box,
  BaseHeaderLayout,
  ContentLayout,
  Button,
  JSONInput,
} from "@strapi/design-system";
import axios from "axios";

const HomePage = () => {
  const [config, setConfig] = useState<null | {
    name: string;
    url: string;
    method: string;
    buttonName: string;
  }>(null);
  useEffect(() => {
    axios.get("/button/config").then((res: any) => {
      setConfig(res.data);
    });
  }, []);
  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Box background="neutral100">
      <BaseHeaderLayout title={config?.name} />
      <ContentLayout>
        <div>
          <Button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              axios
                .request({
                  url: config?.url,
                  method: config?.method,
                })
                .then((res) => {
                  setResponseData(JSON.stringify(res.data, null, 2));
                  setLoading(false);
                })
                .catch((res) => {
                  setResponseData(
                    "error: " + JSON.stringify(res.data, null, 2)
                  );
                  setLoading(false);
                });
            }}
          >
            {config?.buttonName}
          </Button>
        </div>
        <Box margin={8}>
          {responseData && <JSONInput value={responseData} minHeight="300px" />}
        </Box>
      </ContentLayout>
    </Box>
  );
};

export default HomePage;
