import { supabase } from './src/lib/supabase.js'
import { showDashboard } from './dashboard.js'

export async function handleLogin(e) {
  e.preventDefault()
  
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    // Successful login
    console.log('Logged in:', data)
    showDashboard()
    
  } catch (error) {
    console.error('Error logging in:', error.message)
    // Here you can show error message to user
  }
}

export async function handleRegister(e) {
  e.preventDefault()
  
  const email = document.querySelector('#register-email').value
  const password = document.querySelector('#register-password').value
  const name = document.querySelector('#register-name').value

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        }
      }
    })

    if (error) throw error

    // Successful registration
    console.log('Registered:', data)
    showDashboard()
    
  } catch (error) {
    console.error('Error registering:', error.message)
    // Here you can show error message to user
  }
}