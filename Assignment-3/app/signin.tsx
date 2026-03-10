import React from "react";
import { View } from "react-native";
import SignInForm from "../components/SignInForm";

export default function SignInPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <SignInForm />
    </View>
  );
}