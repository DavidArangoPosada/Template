// Sample data
const clientsData = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com', phone: '555-0101' },
  { id: 2, name: 'María García', email: 'maria@email.com', phone: '555-0102' },
  { id: 3, name: 'Carlos López', email: 'carlos@email.com', phone: '555-0103' },
  { id: 4, name: 'Ana Martínez', email: 'ana@email.com', phone: '555-0104' },
  { id: 5, name: 'Pedro Sánchez', email: 'pedro@email.com', phone: '555-0105' },
  { id: 6, name: 'Laura Torres', email: 'laura@email.com', phone: '555-0106' },
  { id: 7, name: 'Diego Ruiz', email: 'diego@email.com', phone: '555-0107' },
  { id: 8, name: 'Sofia Castro', email: 'sofia@email.com', phone: '555-0108' },
  { id: 9, name: 'Miguel Flores', email: 'miguel@email.com', phone: '555-0109' },
  { id: 10, name: 'Carmen Díaz', email: 'carmen@email.com', phone: '555-0110' }
];

export function showClientsPage() {
  const pageSize = 5;
  let currentPage = 1;

  function renderTable(page) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = clientsData.slice(start, end);
    const totalPages = Math.ceil(clientsData.length / pageSize);

    document.getElementById('pageContent').innerHTML = `
      <header class="content-header">
        <h1>Clientes</h1>
      </header>
      <div class="content">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${paginatedData.map(client => `
              <tr>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td class="actions">
                  <button class="icon-button" title="Ver detalles">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="icon-button" title="Editar">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="icon-button delete" title="Eliminar">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="pagination">
          <button ${page === 1 ? 'disabled' : ''} onclick="window.changePage(${page - 1})">
            <i class="fas fa-chevron-left"></i>
          </button>
          <span>Página ${page} de ${totalPages}</span>
          <button ${page === totalPages ? 'disabled' : ''} onclick="window.changePage(${page + 1})">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  // Expose changePage function to window for pagination buttons
  window.changePage = (newPage) => {
    currentPage = newPage;
    renderTable(currentPage);
  };

  renderTable(currentPage);
}