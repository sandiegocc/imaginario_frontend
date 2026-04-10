import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Definimos la interfaz basada en tu respuesta de la API
interface User {
  _id: string;
  email: string;
  whatsapp: string;
  fullName: string;
  team: string;
  events: string[];
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'));
  const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  // Getters (computed)
  const isLoggedIn = computed(() => !!token.value);

  // Acciones
  function setAuth(newToken: string, newUser: User) {
    token.value = newToken;
    user.value = newUser;

    // Persistencia manual
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  function logout() {
    token.value = null;
    user.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return { token, user, isLoggedIn, setAuth, logout };
});
