import styled from 'styled-components';

// Untuk tampilan Desktop
export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 250px; /* Lebar container kategori */
  position: fixed;
  top: 100px; /* Jarak dari atas */
  right: 0; /* Menempatkan kategori di sebelah kanan */
  z-index: 10; /* Agar tetap di atas konten utama */

  @media (max-width: 768px) {
    position: fixed; /* Agar mengambang saat mobile */
    top: 0; /* Menempel di atas */
    left: 0;
    width: 100%;
    background-color: #222;
    color: white;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    display: ${(props) => (props.isMobileMenuOpen ? 'block' : 'none')}; /* Menyembunyikan kategori pada mobile */
  }
`;

// Menampilkan kategori tombol
export const FilterCategoryButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#f0a500' : 'transparent')};
  color: ${(props) => (props.isSelected ? 'white' : '#f0a500')};
  border: 1px solid #f0a500;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d88800;
    color: white;
  }
`;

// Menu kategori di tampilan mobile
export const MobileCategoriesMenu = styled.div`
  display: ${(props) => (props.isMobileMenuOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #222;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 20;
  overflow-y: auto;
`;

// Tombol kategori di mobile
export const MobileCategoriesButton = styled.button`
  background-color: #f0a500;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: #d88800;
  }
`;
