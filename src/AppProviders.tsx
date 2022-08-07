import { MantineProvider } from '@mantine/core';
import App from './App';

export default function AppProviders() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}