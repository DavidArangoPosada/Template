import './style.css'
import { handleLogin, handleRegister } from './auth.js'

// Function to show login form
function showLogin() {
  document.querySelector('#app').innerHTML = `
    <div class="login-container">
      <form id="loginForm" class="login-form">
        <h2>Iniciar Sesión</h2>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" required>
        </div>
        <button type="submit">Iniciar Sesión</button>
        <p class="form-link">¿No tienes una cuenta? <a href="#" id="showRegister">Regístrate aquí</a></p>
      </form>
    </div>
  `
  
  document.querySelector('#loginForm').addEventListener('submit', handleLogin)
  document.querySelector('#showRegister').addEventListener('click', (e) => {
    e.preventDefault()
    showRegister()
  })
}

// Function to show register form
function showRegister() {
  document.querySelector('#app').innerHTML = `
    <div class="login-container">
      <form id="registerForm" class="login-form">
        <h2>Registro</h2>
        <div class="form-group">
          <label for="register-name">Nombre</label>
          <input type="text" id="register-name" required>
        </div>
        <div class="form-group">
          <label for="register-email">Correo electrónico</label>
          <input type="email" id="register-email" required>
        </div>
        <div class="form-group">
          <label for="register-password">Contraseña</label>
          <input type="password" id="register-password" required>
        </div>
        <button type="submit">Registrarse</button>
        <p class="form-link">¿Ya tienes una cuenta? <a href="#" id="showLogin">Inicia sesión aquí</a></p>
      </form>
    </div>
  `
  
  document.querySelector('#registerForm').addEventListener('submit', handleRegister)
  document.querySelector('#showLogin').addEventListener('click', (e) => {
    e.preventDefault()
    showLogin()
  })
}

// Show login form by default
showLogin()