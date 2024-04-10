import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Página Inicial' }} />
      <Stack.Screen name="serviceOrder" options={{ title: 'Ordem de Serviço' }} />
      <Stack.Screen name="user" options={{ title: 'Usuários' }} />
    </Stack>
  );
}

export default Layout;