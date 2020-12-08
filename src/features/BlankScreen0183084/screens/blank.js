import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <View style={styles.View_3}>
        <Text style={styles.Text_5}>Title Bar</Text>
      </View>
      <View style={styles.View_6}>
        <View style={styles.View_8}>
          <Text style={styles.Text_10}>Card title</Text>
          <Text style={styles.Text_13}>Card subtitle</Text>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/plant.jpg"
            }}
            style={styles.Image_16}
          />
          <View style={styles.View_23}>
            <View style={styles.View_24}>
              <Icon name="star" style={styles.Icon_45} />
              <Text style={styles.Text_48}>Likes</Text>
            </View>
            <View style={styles.View_25}>
              <Icon name="comment" style={styles.Icon_50} />
              <Text style={styles.Text_52}>Comments</Text>
            </View>
            <View style={styles.View_26}>
              <Icon name="share-alt" style={styles.Icon_49} />
              <Text style={styles.Text_51}>Shares</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: {
    width: "100%",
    height: 20,
    backgroundColor: "#257bcb",
    alignItems: "center"
  },
  Text_5: { color: "#ffffff" },
  View_6: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#dbf8ff"
  },
  View_8: { width: "100%", backgroundColor: "#fffffe" },
  Text_10: { marginTop: 0, marginBottom: 0, fontSize: 16, fontWeight: "bold" },
  Text_13: { marginTop: 0, marginBottom: 0 },
  Image_16: { height: 150 },
  View_23: { width: "100%", flexDirection: "row" },
  View_24: {
    width: "033.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_45: { marginTop: 0, marginBottom: 0, fontSize: 40 },
  Text_48: { paddingLeft: 0, paddingRight: 0, fontSize: 11 },
  View_25: {
    width: "033.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_50: { marginTop: 0, marginBottom: 0, fontSize: 40 },
  Text_52: { paddingLeft: 0, paddingRight: 0, fontSize: 11 },
  View_26: {
    width: "033.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_49: { marginTop: 0, marginBottom: 0, fontSize: 40 },
  Text_51: { paddingLeft: 0, paddingRight: 0, fontSize: 11 }
})
