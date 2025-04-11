import { View, Text, StyleSheet } from 'react-native';

export default function Ajuda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central de Apoio CAJEC</Text>
      
      <Text style={styles.paragraph}>
        Bem-vindo(a) ao suporte do aplicativo 2G em parceria com a CAJEC.
      </Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Recursos Disponíveis</Text>
        <Text style={styles.listItem}>• Guias interativos para tratamento</Text>
        <Text style={styles.listItem}>• FAQ médico validado por especialistas</Text>
        <Text style={styles.listItem}>• Canal direto com voluntários CAJEC</Text>
      </View>

      <Text style={styles.contact}>
        Suporte prioritário: suporte@cajec.org.br
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4a5568',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#e53e3e',
    fontWeight: '600',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    color: '#4a5568',
    marginVertical: 5,
  },
  contact: {
    marginTop: 15,
    color: '#3182ce',
    textAlign: 'center',
    fontWeight: '500',
  },
});