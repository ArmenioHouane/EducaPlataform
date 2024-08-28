import React, { useState } from 'react';

interface Student {
  nome: string;
  turma: string;
  curso: string;
  numero: string;
}

interface AddStudentModalProps {
  onClose: () => void;
  onAddStudent: (student: Student) => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({ onClose, onAddStudent }) => {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [curso, setCurso] = useState('');
  const [numero, setNumero] = useState('');

  const handleSubmit = () => {
    if (nome && turma && curso && numero) {
      const newStudent: Student = { nome, turma, curso, numero };
      onAddStudent(newStudent);
      onClose();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Adicionar Novo Aluno</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Turma</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Curso</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Número</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
