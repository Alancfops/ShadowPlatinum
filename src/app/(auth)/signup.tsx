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

const signUpSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .matches(/^[a-zA-Z0-9]+$/, "Senha deve conter apenas letras e números")
    .required("Senha é obrigatória"),
});

const MOCK_EMAIL = "shinobi@gmail.com";
const MOCK_SENHA = "Al123456";

export default function SignUpScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const handleSubmit = async (values: {
    nome: string;
    email: string;
    senha: string;
  }) => {
    setIsSubmitting(true);
    setShowSuccess(false);
    setSignUpError("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (
      values.email.trim().toLowerCase() === MOCK_EMAIL &&
      values.senha === MOCK_SENHA
    ) {
      setShowSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => router.replace("/(auth)/login"), 2000);
    } else {
      setSignUpError("Email ou senha inválidos.");
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAwareScroll
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <AuthHeader />
      <Card maxWidth={300}>
        <Formik
          initialValues={{ nome: "", email: "", senha: "" }}
          validationSchema={signUpSchema}
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
                label="Nome de usuário"
                placeholder="Seu nome"
                value={values.nome}
                onChangeText={handleChange("nome")}
                onBlur={handleBlur("nome")}
                autoCapitalize="words"
                editable={!isSubmitting}
                error={errors.nome}
                touched={touched.nome}
              />
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

              {showSuccess && (
                <Text style={styles.successText}>Cadastrado com sucesso!</Text>
              )}
              {signUpError ? (
                <Text style={styles.errorText}>{signUpError}</Text>
              ) : null}

              <Button
                title="CRIAR CONTA"
                onPress={() => formikSubmit()}
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </>
          )}
        </Formik>
        <LinkButton
          text="Já tem conta?"
          highlight="Entrar"
          onPress={() => router.back()}
          disabled={isSubmitting}
        />
      </Card>
    </KeyboardAwareScroll>
  );
}
