import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Página Inicial' }} />
      <Tabs.Screen name="serviceOrder" options={{ title: 'Ordem de Serviço' }} />
      <Tabs.Screen name="user" options={{ title: 'Usuários' }} />
    </Tabs>
  );
}

export default Layout;