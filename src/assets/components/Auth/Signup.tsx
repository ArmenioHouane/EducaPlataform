import { FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { authentication, database } from '../../../firebase/config';
import { doc, DocumentReference, getDoc, setDoc } from 'firebase/firestore';
import { Usuario } from '../../../model/Usuario';
import { useState, ChangeEvent } from 'react';

export const Signup = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  function cheekUser(user: User) {
    const docRef = doc(database, "usuarios", user.uid);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Dados encontrados");
          navigate("/");
        } else {
          saveUser(user, docRef);
        }
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao verificar o usuario: " + error.message);
      });
  }

  function saveUser(user: User, docRef: DocumentReference) {
    const usuario = new Usuario(
      user.uid,
      name || user.displayName,
      user.email,
      "default",
      user.photoURL,
      user.emailVerified,
      user.phoneNumber
    );

    setDoc(docRef, usuario.toObject())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error('Erro ao salvar dados:', error);
      });
  }

  function signInWithFacebook(): void {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const user = result.user;
        cheekUser(user);
      }).catch((error) => {
        console.log(error);
        const email = error.customData.email;
        if (email != null) {
          console.log("Este email ja esta sendo usado");
        }
      });
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        cheekUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: name })
          .then(() => {
            cheekUser(user);
          })
          .catch((error) => {
            console.log('Erro ao atualizar o perfil do usuário: ', error);
          });
      })
      .catch((error) => {
        console.log('Erro ao criar usuário: ', error);
      });
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-80 min-h-screen bg-backWhitelm dark:bg-blackbg">
      <div className="mt-20 mb-10 bg-white dark:bg-blacklg rounded-lg shadow-lg p-8 w-96 mx-auto">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Cadastre-se
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Já tem uma conta?{' '}
            <Link
              className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
              to="/login"
            >
              Entre aqui
            </Link>
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white dark:bg-blacklg text-gray-800 shadow-sm hover:bg-backWhitelm dark:hover:bg-blackbg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <svg
              className="w-4 h-auto"
              width={46}
              height={47}
              viewBox="0 0 46 47"
              fill="none"
            >
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"
              />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"
              />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"
              />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"
              />
            </svg>
            Cadastre-se com Google
          </button>

          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white dark:bg-blacklg text-gray-800 shadow-sm hover:bg-backWhitelm dark:hover:bg-blackbg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 mt-4"
            onClick={signInWithFacebook}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(1, 132, 255, 1)"
            >
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.591-1.56h1.7V3.268C16.017 3.184 15.125 3 14.084 3c-2.383 0-4.014 1.453-4.014 4.123v2.469H7.391v3.209h2.679v8.196h3.327z"></path>
            </svg>
            Cadastre-se com Facebook
          </button>

          <div className="py-3 px-6">
            <hr />
          </div>
          
          <form onSubmit={signup}>
            <div className="grid gap-y-4">

            <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold ml-1 mb-2 text-gray-800 dark:text-white"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={onNameChange}
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold ml-1 mb-2 text-gray-800 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onEmailChange}
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required
                />
              </div>

          

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold ml-1 mb-2 text-gray-800 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={onPasswordChange}
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-bold ml-1 mb-2 text-gray-800 dark:text-white"
                >
                  Confirmar Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={onConfirmPasswordChange}
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="py-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:focus:ring-offset-black"
              >
                Registar-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
