import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  username: Yup.string().required('Nome de usuário é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
  birthDate: Yup.date().required('Data de nascimento é obrigratória'),
});

const createUser = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      username: '',
      password: '',
      birthDate: null,
    }
  });

  const submitUser = (data) => {
    console.log(data);
  };

  return (
    <View style={ styles.container }>
      <Controller
        control={ control }
        render={
          ({ field: { onChange, onBlur, value } }) => (
            <>
              <Text>Nome</Text>
              <TextInput
                style={ styles.input }
                onChangeText={ onChange }
                onBlur={ onBlur }
                value={ value }
              />
            </>
          )
        }
        name="name"
      />
      { errors.name && <Text style={ styles.inputError }>{ errors.name?.message }</Text> }

      <Controller
        control={ control }
        render={
          ({ field: { onChange, onBlur, value } }) => (
            <>
              <Text>Nome de Usuário</Text>
              <TextInput
                style={ styles.input }
                onChangeText={ onChange }
                onBlur={ onBlur }
                value={ value }
              />
            </>
          )
        }
        name="username"
      />
      { errors.username && <Text style={ styles.inputError }>{ errors.username?.message }</Text> }

      <Controller
        control={ control }
        render={
          ({ field: { onChange, onBlur, value } }) => (
            <>
              <Text>Senha</Text>
              <TextInput
                style={ styles.input }
                onChangeText={ onChange }
                onBlur={ onBlur }
                secureTextEntry={ true }
                value={ value }
              />
            </>
          )
        }
        name="password"
      />
      { errors.password && <Text style={ styles.inputError }>{ errors.password?.message }</Text> }

      <Controller
        control={ control }
        render={
          ({ field: { onChange, onBlur, value } }) => (
            <>
              <Text>Data de Nascimento</Text>
              <TextInput
                style={ styles.input }
                onChangeText={ onChange }
                onBlur={ onBlur }
                value={ value }
              />
            </>
          )
        }
        name="birthDate"
      />
      { errors.birthDate && <Text style={ styles.inputError }>{ errors.birthDate?.message }</Text> }

      <Button title={ 'Enviar' } onPress={ handleSubmit(submitUser) }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  inputError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  },
});

export default createUser;