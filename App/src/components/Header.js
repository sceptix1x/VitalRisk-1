import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Acerca de</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#333",
    paddingVertical: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Nota: Las sombras son diferentes en React Native
    alignItems: "center",  // Centrar los elementos horizontalmente
    justifyContent: "center",  // Centrar los elementos verticalmente
  },
  nav: {
    flexDirection: "row",  // Mostrar los enlaces en una fila
    justifyContent: "space-around",  // Espaciado igual entre los elementos
    width: "100%",  // Asegurar que la barra ocupe todo el ancho
  },
  navItem: {
    marginHorizontal: 15,  // Espaciado horizontal entre los elementos
  },
  navLink: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "none",  // React Native no soporta text-decoration, pero puedes usar este estilo para evitar subrayado
  },
  navLinkHovered: {
    color: "#4CAF50",  // Este estilo se puede aplicar de manera dinámica si es necesario
  }
});
