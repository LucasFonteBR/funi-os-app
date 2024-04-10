import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Lista de Usuários' }} />
      <Stack.Screen name="createUser" options={{ title: 'Criar Usuário' }} />
    </Stack>
  );
}

export default Layout;