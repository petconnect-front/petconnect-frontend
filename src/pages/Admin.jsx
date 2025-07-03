import AdminNavbar from '../components/admin/AdminNavbar';
import UserTable from '../components/admin/UserTable';
import ShelterTable from '../components/admin/ShelterTable';
import PetTable from '../components/admin/PetTable';



function Admin() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-dark mb-4">Panel del Administrador 🛠️</h1>
        
        {/* Mostrar una sección por ahora, luego lo haremos por tabs o rutas internas */}
        <div className="grid gap-8">
          <UserTable />
          <ShelterTable />
          <PetTable />
        </div>
      </main>
    </div>
  );
}

export default Admin;
