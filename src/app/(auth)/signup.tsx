import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../theme";
import { authScreenStyles as styles } from "./authScreenStyles";

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

const MOCK_EMAIL = "sekiro@gmail.com";
const MOCK_SENHA = "123456";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
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
      setTimeout(() => router.replace("/(tabs)"), 2000);
    } else {
      setSignUpError("Use os dados de teste para criar a conta");
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Shadow Platinum</Text>
          <Text style={styles.subtitle}>Seu Guia Shinobi</Text>
        </View>
        <View style={styles.card}>
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
                <Text style={styles.label}>Nome de usuário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Seu nome"
                  placeholderTextColor={colors.placeholder}
                  value={values.nome}
                  onChangeText={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  autoCapitalize="words"
                  editable={!isSubmitting}
                />
                {touched.nome && errors.nome && (
                  <Text style={styles.errorText}>{errors.nome}</Text>
                )}

                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="shinobi@gmail.com"
                  placeholderTextColor={colors.placeholder}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isSubmitting}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Text style={styles.label}>
                  Senha (apenas letras e números)
                </Text>
                <View style={styles.inputRow}>
                  <TextInput
                    style={[styles.input, styles.inputWithIcon]}
                    placeholder="********"
                    placeholderTextColor={colors.placeholder}
                    value={values.senha}
                    onChangeText={handleChange("senha")}
                    onBlur={handleBlur("senha")}
                    secureTextEntry={!showPassword}
                    editable={!isSubmitting}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    disabled={isSubmitting}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={22}
                      color={colors.placeholder}
                    />
                  </TouchableOpacity>
                </View>
                {touched.senha && errors.senha && (
                  <Text style={styles.errorText}>{errors.senha}</Text>
                )}

                {showSuccess && (
                  <Text style={styles.successText}>
                    Cadastrado com sucesso!
                  </Text>
                )}

                {signUpError ? (
                  <Text style={styles.errorText}>{signUpError}</Text>
                ) : null}

                <TouchableOpacity
                  style={[styles.button, isSubmitting && styles.buttonDisabled]}
                  activeOpacity={0.8}
                  onPress={() => formikSubmit()}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="#1A1A1A" size="small" />
                  ) : (
                    <Text style={styles.buttonText}>CRIAR CONTA</Text>
                  )}
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <TouchableOpacity
            style={styles.linkWrap}
            onPress={() => router.back()}
            disabled={isSubmitting}
          >
            <Text style={styles.linkText}>
              Já tem conta? <Text style={styles.linkHighlight}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
