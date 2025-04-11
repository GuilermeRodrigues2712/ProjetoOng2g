import { View, Text, StyleSheet, Linking } from 'react-native';

export default function Contato() {
  const handlePress = (url: any) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato CAJEC</Text>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Atendimento Prioritário</Text>
        <Text style={styles.contactItem}>☎️ (11) 4701-4194</Text>
        <Text style={styles.contactItem}>☎️ (11) 4787-7149</Text>
        <Text style={styles.contactHours}>⏰Horário: 8h às 18h (Seg-Sex)</Text>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>E-mails Institucionais</Text>
        <Text 
          style={styles.link} 
          onPress={() => handlePress('mailto:suporte@cajec.org.br')}>
          ✉️ apoio@cajec.org.br
        </Text>
        <Text 
          style={styles.link} 
          onPress={() => handlePress('mailto:parcerias@cajec.org.br')}>
          🤝 seso@cajec.org.br
        </Text>
        <Text 
          style={styles.link} 
          onPress={() => handlePress('mailto:parcerias@cajec.org.br')}>
          🎉 eventos@cajec.org.br
        </Text>
        
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Visite Nossa Sede</Text>
        <Text 
          style={styles.link} 
          onPress={() => handlePress('https://maps.app.goo.gl/EXAMPLE')}>
          📍 Rua Preciosa, 86 – Parque Monte Alegre
        </Text>
      </View>

      <Text 
        style={styles.socialLink}
        onPress={() => handlePress('https://instagram.com/cajec_oficial')}>
        @cajec_oficial
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fef2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#dc2626',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#b91c1c',
    fontWeight: '600',
    marginBottom: 12,
  },
  contactItem: {
    fontSize: 14,
    color: '#1e293b',
    marginVertical: 5,
  },
  contactHours: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 3,
  },
  link: {
    fontSize: 14,
    color: '#2563eb',
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
  socialLink: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    color: '#db2777',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});