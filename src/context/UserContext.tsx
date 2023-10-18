import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface UserProviderProps {
  children: ReactNode;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const UserContext = createContext<UserData | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const FetchUsersData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (res.status >= 200 && res.status < 300) {
          const data = res.data;
          setUser(data[Math.floor(Math.random() * data.length)]);
        } else {
          console.log("Error fetching data. status code: ", res.status);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    FetchUsersData();
  }, []);

  return (
    <div>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </div>
  );
};
