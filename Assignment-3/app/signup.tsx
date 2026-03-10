import React from "react";
import { View } from "react-native";
import SignUpForm from "../components/SignUpForm";

export default function SignUpPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <SignUpForm />
    </View>
  );
}