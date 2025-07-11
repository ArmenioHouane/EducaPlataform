{/*  primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      */}

import ComplexNavbar from "../Shared/Header"
import { FooterWithSitemap } from "../Shared/Footer"
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';





export const Checkout = () => (

  <>
<ComplexNavbar />
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 ">
      <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0 mt-10">
        <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Carrinho
            </span>
          </li>
          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Checkout
            </span>
          </li>
          <li className="flex shrink-0 items-center">
            <svg
              className="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Resumo do pedido
          </li>
        </ol>
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Detalhes de entrega
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="your_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Seu nome{" "}
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Ana Carla"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="your_email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Seu e-mail*{" "}
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Ana@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-country-input-3"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      País*{" "}
                    </label>
                  </div>
                  <select
                    id="select-country-input-3"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected="">Moçambique</option>
                    <option value="AS">Africa do Sul</option>
                    
                  </select>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-city-input-3"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Provincia*{" "}
                    </label>
                  </div>
                  <select
                    id="select-city-input-3"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option selected="">Maputo</option>
                    <option value="GZ">Gaza</option>
                    <option value="IN">Inhambane</option>
                    <option value="MN">Manica</option>
                    <option value="SF">Sofala</option>
                    <option value="TT">Tete</option>
                    <option value="ZB">Zambezia</option>
                    <option value="NP">Nampula</option>
                    <option value="NS">Niassa</option>
                    <option value="CD">Cabo Delgado</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="phone-input-3"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Número de telefone*{" "}
                  </label>
                  <div className="flex items-center">
                    <button
                      id="dropdown-phone-button-3"
                      data-dropdown-toggle="dropdown-phone-3"
                      className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <svg
  fill="none"
  aria-hidden="true"
  className="me-2 h-4 w-4"
  viewBox="0 0 20 15"
>
  <rect
    width="19.6"
    height={14}
    y=".5"
    fill="#fff"
    rx={2}
  />
  <mask
    id="a"
    style={{ maskType: "luminance" }}
    width={20}
    height={15}
    x={0}
    y={0}
    maskUnits="userSpaceOnUse"
  >
    <rect
      width="19.6"
      height={14}
      y=".5"
      fill="#fff"
      rx={2}
    />
  </mask>
  <g mask="url(#a)">
    <path fill="#007847" d="M0 0h20v5H0z" />
    <path fill="#000" d="M0 5h20v5H0z" />
    <path fill="#FCE100" d="M0 10h20v5H0z" />
    <path fill="#DE3831" d="M0 0l9 7.5L0 15z" />
    <path
      fill="#FFD700"
      d="M3 6.65l1.2-.87-1.23-.32.46-1.27-.82.66-.82-.66.46 1.27-1.23.32L2 6.65v2.5z"
    />
    <path fill="#000" d="M4.68 6.18l.32.88-1.2-.87-1.2.87.32-.88-1.23-.32 1.02-.8-1.02-.8 1.23-.32-.32-.88 1.2.87 1.2-.87-.32.88 1.23.32-1.02.8 1.02.8z" />
  </g>
</svg>

                      +258
                      <svg
                        className="-me-0.5 ms-2 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown-phone-3"
                      className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-phone-button-2"
                      >
                       <li>
  <button
    type="button"
    className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    role="menuitem"
  >
    <span className="inline-flex items-center">
      <svg
        fill="none"
        aria-hidden="true"
        className="me-2 h-4 w-4"
        viewBox="0 0 20 15"
      >
        <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
        <mask
          id="a"
          style={{ maskType: "luminance" }}
          width={20}
          height={15}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
        </mask>
        <g mask="url(#a)">
          <path fill="#FCE100" d="M0 0h20v5H0z" />
          <path fill="#007847" d="M0 10h20v5H0z" />
          <path fill="#000" d="M0 5h20v5H0z" />
          <path fill="#DE3831" d="M0 0l9 7.5L0 15z" />
          <path
            fill="#FFD700"
            d="M3 6.65l1.2-.87-1.23-.32.46-1.27-.82.66-.82-.66.46 1.27-1.23.32L2 6.65v2.5z"
          />
          <path fill="#000" d="M4.68 6.18l.32.88-1.2-.87-1.2.87.32-.88-1.23-.32 1.02-.8-1.02-.8 1.23-.32-.32-.88 1.2.87 1.2-.87-.32.88 1.23.32-1.02.8 1.02.8z" />
        </g>
      </svg>
      Moz (+258)
    </span>
  </button>
</li>

                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15"
                              >
                                <rect
                                  width="19.6"
                                  height={14}
                                  y=".5"
                                  fill="#fff"
                                  rx={2}
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width={20}
                                  height={15}
                                  x={0}
                                  y={0}
                                  maskUnits="userSpaceOnUse"
                                >
                                  <rect
                                    width="19.6"
                                    height={14}
                                    y=".5"
                                    fill="#fff"
                                    rx={2}
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                  <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    stroke="#DB1F35"
                                    strokeLinecap="round"
                                    strokeWidth=".667"
                                    d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                                  />
                                  <path
                                    fill="#E6273E"
                                    fillRule="evenodd"
                                    d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </svg>
                              United Kingdom (+44)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="19.6"
                                  height={14}
                                  y=".5"
                                  fill="#fff"
                                  rx={2}
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width={20}
                                  height={15}
                                  x={0}
                                  y={0}
                                  maskUnits="userSpaceOnUse"
                                >
                                  <rect
                                    width="19.6"
                                    height={14}
                                    y=".5"
                                    fill="#fff"
                                    rx={2}
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                  <path
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeWidth=".667"
                                    d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                                  />
                                  <path
                                    fill="url(#paint0_linear_374_135177)"
                                    fillRule="evenodd"
                                    d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="url(#paint1_linear_374_135177)"
                                    fillRule="evenodd"
                                    d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                    clipRule="evenodd"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_374_135177"
                                    x1={0}
                                    x2={0}
                                    y1=".5"
                                    y2="7.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#fff" />
                                    <stop offset={1} stopColor="#F0F0F0" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_374_135177"
                                    x1={0}
                                    x2={0}
                                    y1=".5"
                                    y2="7.033"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FF2E3B" />
                                    <stop offset={1} stopColor="#FC0D1B" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              Australia (+61)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15"
                              >
                                <rect
                                  width="19.6"
                                  height={14}
                                  y=".5"
                                  fill="#fff"
                                  rx={2}
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width={20}
                                  height={15}
                                  x={0}
                                  y={0}
                                  maskUnits="userSpaceOnUse"
                                >
                                  <rect
                                    width="19.6"
                                    height={14}
                                    y=".5"
                                    fill="#fff"
                                    rx={2}
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path
                                    fill="#262626"
                                    fillRule="evenodd"
                                    d="M0 5.167h19.6V.5H0v4.667z"
                                    clipRule="evenodd"
                                  />
                                  <g filter="url(#filter0_d_374_135180)">
                                    <path
                                      fill="#F01515"
                                      fillRule="evenodd"
                                      d="M0 9.833h19.6V5.167H0v4.666z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                  <g filter="url(#filter1_d_374_135180)">
                                    <path
                                      fill="#FFD521"
                                      fillRule="evenodd"
                                      d="M0 14.5h19.6V9.833H0V14.5z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_374_135180"
                                    width="19.6"
                                    height="4.667"
                                    x={0}
                                    y="5.167"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feFlood
                                      floodOpacity={0}
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_374_135180"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_374_135180"
                                      result="shape"
                                    />
                                  </filter>
                                  <filter
                                    id="filter1_d_374_135180"
                                    width="19.6"
                                    height="4.667"
                                    x={0}
                                    y="9.833"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feFlood
                                      floodOpacity={0}
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_374_135180"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_374_135180"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              Germany (+49)
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            <span className="inline-flex items-center">
                              <svg
                                className="me-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 20 15"
                              >
                                <rect
                                  width="19.1"
                                  height="13.5"
                                  x=".25"
                                  y=".75"
                                  fill="#fff"
                                  stroke="#F5F5F5"
                                  strokeWidth=".5"
                                  rx="1.75"
                                />
                                <mask
                                  id="a"
                                  style={{ maskType: "luminance" }}
                                  width={20}
                                  height={15}
                                  x={0}
                                  y={0}
                                  maskUnits="userSpaceOnUse"
                                >
                                  <rect
                                    width="19.1"
                                    height="13.5"
                                    x=".25"
                                    y=".75"
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeWidth=".5"
                                    rx="1.75"
                                  />
                                </mask>
                                <g mask="url(#a)">
                                  <path
                                    fill="#F44653"
                                    d="M13.067.5H19.6v14h-6.533z"
                                  />
                                  <path
                                    fill="#1035BB"
                                    fillRule="evenodd"
                                    d="M0 14.5h6.533V.5H0v14z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </svg>
                              France (+33)
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="phone-input"
                        className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="name@flowbite.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="company_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Nome da empresa{" "}
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="MozPro LDA"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="vat_number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Número de BI {" "}
                  </label>
                  <input
                    type="text"
                    id="vat_number"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="090123123123A"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2 ">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-darkbtncolorlm px-5 py-2.5 text-sm font-medium text-white hover:bg-bgHoverlm hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-bgHoverlm dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    Adicionar novo endereço
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Pagamento
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="credit-card"
                        aria-describedby="credit-card-text"
                        type="radio"
                        name="payment-method"
                        defaultValue=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        defaultChecked=""
                      />
                    </div>
                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="credit-card"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Cartão de crédito{" "}
                      </label>
                      <p
                        id="credit-card-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Pague com seu cartão de crédito
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Apagar
                    </button>
                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        defaultValue=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>
                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="pay-on-delivery"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Mpesa{" "}
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        +5 Mzn  Taxa de processamento de pagamento
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Apagar
                    </button>
                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="paypal-2"
                        aria-describedby="paypal-text"
                        type="radio"
                        name="payment-method"
                        defaultValue=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>
                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="paypal-2"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Conta do Paypal{" "}
                      </label>
                      <p
                        id="paypal-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Conecte-se à sua conta
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Apagar
                    </button>
                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="m-kesh"
                        aria-describedby="m-kesh-text"
                        type="radio"
                        name="payment-method"
                        defaultValue=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        defaultChecked=""
                      />
                    </div>
                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="credit-card"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        M-kesh{" "}
                      </label>
                      <p
                        id="credit-card-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                       +5 Mzn  Taxa de processamento de pagamento
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Apagar
                    </button>
                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        defaultValue=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>
                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="pay-on-delivery"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Emola{" "}
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        +5 Mzn  Taxa de processamento de pagamento
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Apagar
                    </button>
                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="paypal-2"
                        aria-describedby="paypal-text"
                        type="radio"
                        name="payment-method"
                        defaultValue=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>
                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="paypal-2"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        BIM {" "}
                      </label>
                      <p
                        id="paypal-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Conecte-se à sua conta
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Apagar
                    </button>
                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>







            <div>
              <label
                htmlFor="voucher"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Insira um cartão-presente, voucher ou código promocional{" "}
              </label>
              <div className="flex max-w-md items-center gap-4">
                <input
                  type="text"
                  id="voucher"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder=""
                  required=""
                />
                <button
                  type="button"
                  className="flex items-center  justify-center rounded-lg bg-darkbtncolorlm px-5 py-2.5 text-sm font-medium text-white hover:bg-bgHoverlm focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    8,094.00 Mzn
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Economias
                  </dt>
                  <dd className="text-base font-medium text-green-500">0 Mzn</dd>
                </dl>

                
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    8,094.00 Mzn
                  </dd>
                </dl>
              </div>
            </div>
            <div className="space-y-3">

            <Link to="/pagar">
        <Button
          
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 dark:bg-darklinkcolorlm dark:hover:bg-bgHoverlm px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-bgHoverlm focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <span>Prossiga para o pagamento</span>
        </Button>
      </Link>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Um ou mais itens no seu carrinho requerem uma conta. {" "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-primary-700  underline hover:no-underline dark:text-linkdm hover:font-bold"
                >
                  Faça login ou crie uma conta agora.
                </a>
                .
              </p>
            </div>
          </div>
          
        </div>
        
      </form>
      
    </section>
    <FooterWithSitemap />
    </> 
  );
  