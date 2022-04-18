import React from "react";
import { useUser } from "./AuthProvider";

import {getCurrentUser} from "../../Services/APIService";

const useAutoLogin = () => {
  const { setUser } = useUser();

  React.useEffect(
    () => {
      (async () => {
        try {
          const { data } = await getCurrentUser();

          if (data) {
            setUser({
              id: data.id,
              username: data.username,
              email: data.email,
            });
          } else {
            setUser(null);
          }
        } catch (error) {
          // noop
        }
      })();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default useAutoLogin;