// redux/actions/themeActions.js
import { setTheme, toggleTheme } from '../slices/themeSlice';

// Action to initialize theme based on system preference
export const initializeTheme = () => (dispatch) => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('pitchcraft-theme');
  
  if (savedTheme) {
    dispatch(setTheme(savedTheme === 'dark'));
  } else {
    dispatch(setTheme(systemPrefersDark));
  }
};

// Action to toggle theme with side effects
export const toggleThemeWithEffects = () => (dispatch) => {
  dispatch(toggleTheme());
  
  // Additional side effects can be added here
  // For example, analytics tracking
  console.log('Theme toggled');
};

// Action to set specific theme
export const setSpecificTheme = (isDark) => (dispatch) => {
  dispatch(setTheme(isDark));
  
  // Additional side effects
  console.log(`Theme set to: ${isDark ? 'dark' : 'light'}`);
};