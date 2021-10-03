// https://github.com/mongodb-university/realm-tutorial-react-native/blob/final/providers/AuthProvider.js
import React, { useContext, useState, useEffect, useRef } from "react";
import { Alert } from "react-native";
import Realm from "realm";
import { RealmApp } from "../RealmApp";

// Access the Realm App.
const app = RealmApp();

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthContext = React.createContext(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser);
  const realmRef = useRef(null);
  // const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
    // const myProject = { name: "My Project", partition: `project=${user.id}` };
    // setProjectData([myProject]);

    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };

    // Open a realm with the logged in user's partition value in order
    // to get the projects that the logged in user is a member of
    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm;
      const users = userRealm.objects("User");

      // users.addListener(() => {
      //   // The user custom data object may not have been loaded on
      //   // the server side yet when a user is first registered.
      //   if (users.length === 0) {
      //     setProjectData([myProject]);
      //   } else {
      //     const { memberOf } = users[0];
      //     setProjectData([...memberOf]);
      //   }
      // });
    });

    return () => {
      // cleanup function
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
        // setProjectData([]); // set project data to an empty array (this prevents the array from staying in state on logout)
      }
    };
  }, [user]);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    // try {
      const newUser = await app.logIn(creds);
      setUser(newUser);
    // } catch (err) {
    //   console.error("Failed to log in", err.message);
    //   Alert.alert("Something went wrong", "Failed to sign in");
    // }
    
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (email, password) => {
    // try {
      await app.emailPasswordAuth.registerUser(email, password);
    // } catch (err) {
    //   console.error("Failed to sign up", err.message);
    //   Alert.alert("Something went wrong", "Failed to sign up");
    // }
    
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  // const signOut = async () => {
  //   if (user == null) {
  //     console.warn("Not logged in, can't log out!");
  //     return;
  //   }
  //   try {
  //     await user.logOut();
  //     setUser(null);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
    
  // };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        // projectData, // list of projects the user is a memberOf
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth };