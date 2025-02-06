import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  border: 2px solid #007bff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  margin: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: row;  
    border: none;
    top: 0;
    padding: 1rem;
    margin: 0;
    border-radius: 0;
    background-color: white;
    left: 0;
    right: 0;
    height: 22px;
    justify-content: flex-start;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 769px) {
    flex-direction: column;
    height: 100%;
    width: 12%;
    top: 0;
    right: 0;
    padding: 1rem; /* Menambah padding untuk tampilan desktop agar lebih rapi */
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const FilterCategoryButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#f0a500' : 'transparent')};
  color: ${(props) => (props.isSelected ? 'white' : '#f0a500')};
  border: 1px solid #007bff;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  display: inline-block;
  max-width: 100px;  /* Membatasi lebar maksimal kategori */
  overflow: hidden;  /* Sembunyikan teks yang lebih panjang */
  text-overflow: ellipsis;  /* Menampilkan ... jika teks terpotong */
  white-space: nowrap;  /* Agar teks tidak ter-wrap ke bawah */

  &:hover {
    background-color: #007bff;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: nowrap;  /* Jangan biarkan kategori wrap ke bawah */
  gap: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    overflow-x: auto; /* Untuk scrolling horizontal pada mobile */
    white-space: nowrap; /* Agar kategori tidak ter-wrap */
    padding: 1rem;
    max-width: 100%; /* Pastikan container tidak melewati layar */
  }

  @media (min-width: 769px) {
    flex-direction: column; 
    gap: 1rem;
    max-width: 100%;  
    justify-content: flex-start; 
  }
`;

export const CategoriesTitle = styled.h2`
  font-size: 1.5rem;
  color: #007bff;

  @media (max-width: 768px) {
    // display: none; /* Sembunyikan judul kategori pada mobile */
  }
`;
