import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
export default function App() {
  return (
   <View style={styles.container}>
   <Text style={styles.titre}>Faculté des Sciences Appliquées</Text>
   <Text style={styles.sousTitre}>IAIL S5 - Developpement mobile</Text>
   <Pressable style={styles.bouton}onPress={() => Alert.alert('Bienvenue','Votre premiere application IAIL S5 fonctionne !')}>
     <Text style={styles.texteBouton}>Bienvenue</Text>
   </Pressable>
   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7FD',
    padding: 20,
  },
  titre: {
    color: '#C9A227',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sousTitre: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  bouton: {
   marginTop: 24,
   backgroundColor: '#C9A227',
   paddingVertical: 15,
   paddingHorizontal: 30,
   borderRadius: 10,
 },
 texteBouton: {
   color: '#FFFFFF',
   fontWeight: 'bold',
   textAlign: 'center',
   fontSize: 16,
 },
});