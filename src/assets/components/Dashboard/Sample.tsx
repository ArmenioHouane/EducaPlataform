import React from 'react';
import SampleDashboard from './dashboard';
import { FaBook } from 'react-icons/fa';
import { FaInfoCircle, FaPaperPlane, FaLaptopCode, FaClipboardCheck, FaEllipsisV } from 'react-icons/fa';
import { useState } from 'react';



const Dashboard: React.FC = () => {
  
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar a exibição da descrição
  
    const toggleDescription = () => {
      setIsOpen(!isOpen); // Alterna o estado ao clicar
    };

    const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar a exibição do dropdown

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const handleOptionClick = (option: string) => {
      console.log(option); // Aqui você pode adicionar a lógica para cada opção
      setDropdownOpen(false); // Fecha o dropdown após a seleção
    };
  return (
    <SampleDashboard>
    
    <div className="grid grid-cols-2">
  <div>
    <h1 className='text-2xl font-semibold dark:text-whitextdm'>Dashboard</h1>
  </div>
  
  <div className="text-right">
  <div>
    <button className='bg-[#00b7ff] dark:border-[#404040] shadow-md border-[#E5E7EB] border mb-3 rounded-lg  hover:bg-[#000] p-2 text-white'>
      Cursos 
    </button>
  </div></div>

</div>


<div className="p-4">
      <div className="flex items-center">
        <span className="mr-2 dark:text-whitextdm font-bold">OVERVIEW</span>
        <div className="flex-grow border-t-[2px] border-blue-300"></div>
      </div>


       <div className="flex items-center justify-between p-4 border dark:border-[#404040] bg-white dark:bg-[#262626] border-[#E5E7EB] rounded-lg shadow-sm">
      <div className="flex items-center">
        <FaBook className="text-2xl mr-2 text-blue-600" /> {/* Course icon */}
        <div className="flex flex-col">
          <span className="font-semibold dark:text-whitextdm">Curso</span> {/* Course name */}
          <span className="text-gray-600 dark:text-whitextdm">Aulas: 5</span> {/* Number of courses */}
        </div>
      </div>
      <button className="bg-blue-600  text-white px-4 py-2 rounded hover:bg-blue-700">
        Continuar
      </button>
    </div>









      <div className="flex items-center mt-4">
        <span className="mr-2 dark:text-whitextdm font-bold">CURSOS</span>
        <div className="flex-grow border-t-[2px] border-blue-300"></div>
      </div>



      <div 
      className={`border-[1px] dark:border-[#404040] border-[#E5E7EB] dark:bg-[#262626] rounded-lg shadow-lg transition-transform transform ${isOpen ? 'scale-105' : ''}`} 
      style={{ width: '314px', height: '170px' }} // Define as dimensões do card
      onClick={toggleDescription} // Adiciona a ação de clique
    >
      <div className="flex flex-col h-full">
        {/* Seção do ícone e fundo primário, visível apenas quando isOpen é false */}
        {!isOpen && (
          <div className="bg-blue-500 h-[100%] dark:bg-[#262626] p-4 flex items-center justify-center rounded-t-lg">
            <FaLaptopCode className="text-white text-3xl" /> {/* Ícone do curso */}
          </div>
        )}
        
        {isOpen && (
          <div className="bg-blue-600 p-4 flex items-center h-[100%] rounded-t-lg">
            <FaInfoCircle className="text-white mr-2" />
            <p className="text-white">Aprenda a programar com este curso prático.</p>
          </div>
        )}

        <div className="flex items-center justify-between bg-[#aaa3a3] p-4 h-[36px] rounded-b-lg">
          <h2 className="text-[17px] font-bold">Curso de Programação</h2>
          <div className='border-l-[1px]  h-9 ml-[70px]'></div>
          <FaPaperPlane className="text-blue-600 hover:text-[#20ff02] cursor-pointer" /> 

          
          {/* Ícone de enviar */}
        </div>
      </div>
    </div>





      <div className="flex items-center mt-4">
        <span className="mr-2 dark:text-whitextdm font-bold">QUIZZES</span>
        <div className="flex-grow border-t-[2px] border-blue-300"></div>
      </div>




      <div className="flex flex-col bg-white dark:bg-[#262626] border shadow-sm rounded-xl dark:border-[#404040] border-[#E5E7EB]  dark:shadow-neutral-700/70 max-w-[320px]">
      <div className="p-4 md:p-5">
        
        <div className="flex items-center mt-2">
          {/* Ícone de Quiz com fundo azul */}
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <FaClipboardCheck className="text-white text-xl" />
          </div>
          <div className="flex justify-between w-full">
            <p className="text-gray-500 dark:text-neutral-400">
            Introdução a Javascript
            </p>
            <span className="text-gray-400 dark:text-neutral-500">
              01/01/2024
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#d3d3d3] dark:bg-[#313131] border-t-2 rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:border-[#404040] border-[#E5E7EB]">
        <div className="h-1 bg-blue-500 rounded-full mb-2" style={{ width: '70%' }} /> {/* Barra de progresso */}
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white text-sm font-semibold rounded-lg py-1 px-3 hover:bg-blue-700 focus:outline-none">
            Continuar
          </button>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-blue-600 focus:outline-none">
              <FaEllipsisV className="text-xl" /> {/* Ícone de três pontos */}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border dark:bg-[#363636] rounded shadow-lg z-10">
                <button
                  onClick={() => handleOptionClick('Ver resultados')}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-blue-gray-300 dark:hover:bg-[#161414] w-full text-left"
                >
                  Ver resultados
                </button>
                <button
                  onClick={() => handleOptionClick('Continuar')}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white  dark:hover:bg-[#161414]   hover:bg-blue-gray-300 w-full text-left"
                >
                  Continuar
                </button>
                <button
                  onClick={() => handleOptionClick('Cancelar')}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-blue-gray-300 dark:hover:bg-[#161414]  w-full text-left"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>









    </div>







  </SampleDashboard>
  




  );
};

export default Dashboard;
