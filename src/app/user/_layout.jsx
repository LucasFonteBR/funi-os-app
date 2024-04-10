import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, title: 'Lista de Usuários' }} />
      <Tabs.Screen name="createUser" options={{ headerShown: false, title: 'Criar Usuário' }} />
    </Tabs>
  );
}

export default Layout;