import React, { useState } from "react";
import { Text } from "react-native";
import { router } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  AuthHeader,
  Button,
  Card,
  Input,
  KeyboardAwareScroll,
  LinkButton,
  PasswordInput,
} from "../../components";
import { authScreenStyles as styles } from "./_authScreenStyles";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .matches(/^[a-zA-Z0-9]+$/, "Senha deve conter apenas letras e números")
    .required("Senha é obrigatória"),
});

const MOCK_EMAIL = "shinobi@gmail.com";
const MOCK_SENHA = "Al123456";

export default function LoginScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (values: { email: string; senha: string }) => {
    setIsSubmitting(true);
    setLoginError("");
    setLoginSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    if (
      values.email.trim().toLowerCase() === MOCK_EMAIL &&
      values.senha === MOCK_SENHA
    ) {
      setLoginSuccess(true);
      router.replace("/(tabs)");
    } else {
      setLoginError("Email ou senha inválidos.");
    }
    setIsSubmitting(false);
  };

  return (
    <KeyboardAwareScroll
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <AuthHeader />
      <Card maxWidth={300}>
        <Formik
          initialValues={{ email: "", senha: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit: formikSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Input
                label="Email"
                placeholder="shinobi@gmail.com"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isSubmitting}
                error={errors.email}
                touched={touched.email}
              />
              <PasswordInput
                label="Senha (apenas letras e números)"
                placeholder="********"
                value={values.senha}
                onChangeText={handleChange("senha")}
                onBlur={handleBlur("senha")}
                editable={!isSubmitting}
                error={errors.senha}
                touched={touched.senha}
              />

              {loginError ? (
                <Text style={styles.errorText}>{loginError}</Text>
              ) : null}
              {loginSuccess ? (
                <Text style={styles.successText}>Login realizado!</Text>
              ) : null}

              <Button
                title="ENTRAR"
                onPress={() => formikSubmit()}
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </>
          )}
        </Formik>
        <LinkButton
          text="Não tem conta?"
          highlight="Cadastre-se"
          onPress={() => router.push("/(auth)/signup")}
          disabled={isSubmitting}
        />
      </Card>
    </KeyboardAwareScroll>
  );
}
