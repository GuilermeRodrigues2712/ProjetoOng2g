import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o 2G</Text>

      <View style={styles.contentBox}>
        <Text style={styles.highlight}>Parceria com a CAJEC</Text>
        <Text style={styles.paragraph}>
          Aplicativo desenvolvido para apoiar o trabalho da Casa José Eduardo Cavichio,
          instituição referência no acolhimento de crianças com câncer desde 1996.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.subtitle}>Nossa Missão</Text>
        <Text style={styles.listItem}>• Humanizar o tratamento oncológico</Text>
        <Text style={styles.listItem}>• Desenvolver aatividades recreativas</Text>
        <Text style={styles.listItem}>• Conectar famílias a recursos da CAJEC</Text>

        <Text style={styles.quote}>
          "Transformamos desafios em esperança através da tecnologia social"
        </Text>

        <Text style={styles.link}>
          Saiba mais: www.cajec.org.br
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ebf8ff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2b6cb0',
    marginBottom: 25,
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  highlight: {
    fontSize: 18,
    color: '#2b6cb0',
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4a5568',
    marginBottom: 20,
    textAlign: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#e2e8f0',
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#2b6cb0',
    fontWeight: '600',
    marginBottom: 12,
  },
  listItem: {
    fontSize: 14,
    color: '#4a5568',
    marginVertical: 5,
  },
  quote: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#718096',
    textAlign: 'center',
    lineHeight: 22,
  },
  link: {
    marginTop: 25,
    color: '#3182ce',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});