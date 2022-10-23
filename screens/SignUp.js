import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "../GloabalStylesheet";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";

export default function SignUp({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 60,
        alignItems: "center",
      }}
    >
      <View style={styles.boxContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>SIGN UP</Text>
      </View>
      <View style={styles.boxContainer}>
        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            phone: "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            resetForm,
            handleReset,
          }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Name"
                style={{
                  borderBottomWidth: 0.7,
                  width: 250,
                  marginBottom: 10,
                  fontSize: 15,
                  color: "black",
                }}
              />
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="********"
                style={{
                  borderBottomWidth: 0.7,
                  width: 250,
                  marginBottom: 10,
                  fontSize: 15,
                  color: "black",
                }}
              />
              <TextInput
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Phone number"
                style={{
                  borderBottomWidth: 0.7,
                  width: 250,
                  marginBottom: 10,
                  fontSize: 15,
                  color: "black",
                }}
              />
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
                style={{
                  borderBottomWidth: 0.7,
                  width: 250,
                  marginBottom: 10,
                  fontSize: 15,
                  color: "black",
                }}
              />
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <CustomButton
                  bg="#00719c"
                  iconName="save"
                  width={100}
                  text="Register"
                  onPress={handleSubmit}
                />
                <CustomButton
                  bg="#7f6000"
                  iconName="flat-brush"
                  width={100}
                  text="Clear"
                  onPress={handleReset}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.boxContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
          ALREADY REGISTERED?
        </Text>
        <CustomButton
          bg="chocolate"
          text="LOGIN"
          width={200}
          iconName="login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}