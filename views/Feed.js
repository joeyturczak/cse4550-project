import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import { ListItem } from "react-native-elements";
import styles from "../stylesheet";

export function Feed({ navigation }) {
//   const { projectData } = useAuth();

  // the onClickProject navigates to the Task List with the project name
  // and project partition value
//   const onClickProject = async (drop) => {
//     navigation.navigate("Drop View", {
//       name: project.name,
//       projectPartition: project.partition,
//     });
//   };

  return (
    <View>
      {/* {projectData.map((project) => (
        <View key={project.name}>
          <ListItem
            onPress={() => onClickProject(project)}
            bottomDivider
            key={project.name}
          >
            <ListItem.Content>
              <ListItem.Title>
                {project.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      ))} */}
      <Text style={styles.logo}>Feed placeholder</Text>
    </View>
  );
}