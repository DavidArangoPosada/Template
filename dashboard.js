import { showClientsPage } from './pages/clients.js';

export function showDashboard() {
  document.querySelector('#app').innerHTML = `
    <div class="dashboard">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
          <h2>Mi App</h2>
          <button id="toggleSidebar" class="toggle-sidebar">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <nav class="sidebar-nav">
          <ul>
            <li><a href="#" class="nav-link active" data-page="dashboard">
              <i class="fas fa-home"></i>
              <span>Dashboard</span>
            </a></li>
            <li><a href="#" class="nav-link" data-page="clients">
              <i class="fas fa-users"></i>
              <span>Clientes</span>
            </a></li>
          </ul>
        </nav>
      </aside>
      <main class="main-content">
        <div id="pageContent">
          <header class="content-header">
            <h1>Dashboard</h1>
          </header>
          <div class="content">
            <p>Bienvenido al Dashboard</p>
          </div>
        </div>
      </main>
    </div>
  `

  // Toggle sidebar
  document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });

  // Navigation handling
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      e.target.closest('.nav-link').classList.add('active');
      
      const page = e.target.closest('.nav-link').dataset.page;
      if (page === 'clients') {
        showClientsPage();
      } else {
        document.getElementById('pageContent').innerHTML = `
          <header class="content-header">
            <h1>Dashboard</h1>
          </header>
          <div class="content">
            <p>Bienvenido al Dashboard</p>
          </div>
        `;
      }
    });
  });
}