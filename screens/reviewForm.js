import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Controller, useForm } from "react-hook-form";

export default function ReviewForm(props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => props.addReview(data);

  return (
    <View style={globalStyles.container}>
      <View>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            minLength: 5,
            required: {
              value: true,
            },
          }}
        />
        {errors.title && (
          <Text style={{ color: "red" }}>Field is required!</Text>
        )}
        <Controller
          control={control}
          multiline minHeight={60}
          name="body"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review details"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
            },
          }}
        />
        {errors.body && (
          <Text style={{ color: "red" }}>Field is required!</Text>
        )}
        <Controller
          control={control}
          name="rating"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              keyboardType="numeric"
              
            />
          )}
          rules={{
        
            max: { value: 5 },
            required: {
              value: true,
            },
          }}
        />
        {errors.rating && (
          <Text style={{ color: "red" }}>Enter value between 1-5!</Text>
        )}
        <Button
          color="maroon"
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
