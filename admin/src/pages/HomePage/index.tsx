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
  ActionLayout,
  Tag,
  JSONInput,
} from "@strapi/design-system";
import axios from "../../utils/axios-instance";

const HomePage = () => {
  const [config, setConfig] = useState<null | {
    name: string;
    buttons: {
      url: string;
      method: string;
      label: string;
    }[];
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
      <ActionLayout
        startActions={config?.buttons?.map((button, i) => (
          <Button
            key={`button-${i}`}
            disabled={loading}
            onClick={() => {
              setLoading(true);
              axios
                .request({
                  url: button?.url,
                  method: button?.method,
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
            {button?.label}
          </Button>
        ))}
      />
      <ContentLayout>
        <Box margin={8}>
          {responseData && <JSONInput value={responseData} minHeight="300px" />}
        </Box>
      </ContentLayout>
    </Box>
  );
};

export default HomePage;
