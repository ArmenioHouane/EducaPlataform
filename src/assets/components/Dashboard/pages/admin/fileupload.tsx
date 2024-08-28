import React, { useState } from 'react';
import SampleDashboard from '../../dashboard';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const FileUpload = () => {
  const [fileData, setFileData] = useState([]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc
  const [sortType, setSortType] = useState('name'); // name, date, type
  const [filterType, setFilterType] = useState('All'); // All, Imagem, Documento, Video, Audio, Outros
  const [rowColors, setRowColors] = useState({});

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const nameWithoutExtension = selectedFile.name.split('.').slice(0, -1).join('.');
      setFileName(nameWithoutExtension);
    }
  };

  const handleNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleUpload = () => {
    if (file && fileName) {
      const extension = file.name.split('.').pop();
      const newFileName = `${fileName}.${extension}`;
      const newFileType = getFileType(file.type);
      const newFile = {
        id: Date.now(),
        name: newFileName,
        size: file.size,
        type: newFileType,
        date: new Date().toLocaleString(),
        url: URL.createObjectURL(file),
      };
      setFileData([...fileData, newFile]);
      setFile(null);
      setFileName('');
    }
  };

  const getFileType = (mimeType) => {
    if (mimeType.startsWith('image')) return 'Imagem';
    if (mimeType.startsWith('application/pdf') || mimeType.includes('document')) return 'Documento';
    if (mimeType.startsWith('video')) return 'Video';
    if (mimeType.startsWith('audio')) return 'Audio';
    return 'Outros';
  };
  const handleColorChange = (id, color) => {
    setRowColors((prevColors) => ({
      ...prevColors,
      [id]: color,
    }));
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (fileId) => {
    const updatedFiles = fileData.filter(file => file.id !== fileId);
    setFileData(updatedFiles);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSortTypeChange = (event) => {
    setSortType(event.target.value);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const getFilteredAndSortedFiles = () => {
    let filteredFiles = fileData;

    // Filtrar por tipo
    if (filterType !== 'All') {
      filteredFiles = filteredFiles.filter((file) => file.type === filterType);
    }

    // Ordenar por tipo de ordenação
    filteredFiles.sort((a, b) => {
      if (sortType === 'name') {
        return sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortType === 'date') {
        return sortOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (sortType === 'type') {
        return sortOrder === 'asc'
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type);
      }else if (sortType === 'size')
      
      {
        return sortOrder === 'asc' ? a.size - b.size : b.size - a.size;

       
      }
      else { return 0;}
    });

    return filteredFiles;
  };

  return (
    <SampleDashboard>
    <div className="   shadow   p-1  dark:bg-[#727171]  rounded-lg ">
      <h1 className='text-3xl font-bold dark:text-white '>File Manager</h1>
    <div className=' dark:bg-[#727171]  border shadow  dark:border-[#bbbbbb] rounded-lg  my-2 mx-2'>
      <div className=''>

      <div className="flex max-w-4xl mx-auto border mt-3 rounded-lg  p-4 space-x-4">
      {/* Left Component */}
      <div className="max-w-xs flex-1 p-4 border-dashed border bg-[#f7f6f6] border-black rounded-lg">
        <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-600" />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-blue-300 font-semibold text-black dark:hover:bg-bgHoverdm dark:text-white p-1 dark:bg-bgHoverlm focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-black"
          >
            <span>Select</span>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
          </label>
          <p className="pl-1">or drag and drop up to 10MB</p>
        </div>
        
      </div>

      {/* Right Components */}
      <div className="flex flex-col flex-1">
        {/* Second Component */}
        <div className="">
      <div className="relative w-full min-w-[200px] h-10">
        <input
          type="text"
          id="fileName"
          value={fileName}
          onChange={handleNameChange}
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          placeholder=" "
        />
        <label
          htmlFor="fileName"
          className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
          peer-placeholder-shown:text-blue-gray-500
          dark:peer-placeholder-shown:text-gray-200
           leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
        >
          Nome do Arquivo
        </label>
      </div>
    </div>

        {/* Third Component */}
        <button onClick={handleUpload} className="px-4 py-2 bg-blue-400 hover:bg-blue-700 text-white rounded-md mt-4">
          Upload
        </button>
      </div>
    </div>
            </div>


        





      
     

      <div className="file-filters mt-6">
        
        <div className="flex space-x-4 dark:text-gray-200 mb-4">

        <div className="relative ml-2 h-10 w-72 min-w-[200px]">
  <select
   id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}

    className="peer h-full w-full rounded-[7px] border dark:text-gray-300 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
     <option value="asc" >A a Z (Crescente)</option>
     <option value="desc">Z a A (Decrescente)</option>
     
  </select>
  <label  htmlFor="sortOrder"
    className="before:content[' '] after:content[' '] dark:text-gray-100 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Ordernar por:
  </label>
</div>


<div className="relative  h-10 w-72 min-w-[200px]">
  <select
   id="sortType" value={sortType} onChange={handleSortTypeChange}

    className="peer  h-full w-full rounded-[7px] border dark:text-gray-300 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                  <option value="date">Data</option>
                  <option value="type">Tipo</option>
                  <option value="size">Tamanho</option> 
                </select>
  <label  htmlFor="sortType"
    className="before:content[' '] after:content[' '] pointer-events-none dark:text-gray-100 absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Tipo:
  </label>
</div>
          


       <div className="relative  right-2   h-10 w-72 min-w-[100px] ">
  <select
   id="filterType" value={filterType} onChange={handleFilterTypeChange}
    className=" h-full w-full mr-3  rounded-[7px] border dark:text-gray-300 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
    
    <option value="All">Todos</option>
              <option value="Imagem">Imagem</option>
              <option value="Documento">Documento</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
              <option value="Outros">Outros</option>
                       
  </select>
  <label htmlFor="filterType"
    className="before:content[' '] after:content[' '] pointer-events-none dark:text-gray-100 m absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Tipo:
  </label>
</div>   
        
  </div>
      </div>

      <div className="file-table border rounded-lg ml-2 mb-2 mr-2  mt-6">
        <h3 className="text-lg mb-4 ml-2 mt-1">Arquivos Disponíveis</h3>
        <table className="w-full  border-collapse">
          <thead>
            <tr className='bg-[#cdcece]'>
              <th className="border   px-4 py-2">Nome</th>
              <th className="border  px-4 py-2">Tamanho</th>
              <th className="border px-4 py-2">Tipo</th>
              <th className="border px-4 py-2">Data</th>
              <th className="border px-4 py-2">Ação</th>
            </tr>
          </thead>




          <tbody>
            {getFilteredAndSortedFiles().map((file) => (
              <tr className='bg-[#e9e8e8]  hover:bg-gray-50' key={file.id}>
                
                <td className="border px-4 py-2">{file.name}</td>
              


                <td className="border  px-4 py-2">{(file.size / 1024).toFixed(2)} KB</td>
                <td className="border px-4 py-2">{file.type}</td>
                <td className="border px-4 py-2">{file.date}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDownload(file.url, file.name)}
                    className="px-2 py-1 bg-green-600 hover:bg-bgHoverlm text-white rounded-md"
                  >
                    Baixar
                  </button>
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="px-2 py-1 bg-[#ff0000d0] text-white hover:bg-bgHoverlm rounded-md ml-2"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </SampleDashboard>
  );
};

export default FileUpload;
