import {useState} from "react";
import NewMenuButton from "../components/NewMenuButton";
import PublicMenuModal from "../components/PublicMenuModal";
import profilPicture from '../assets/man.png';
import logo from '../assets/logo.png';

const CardItem = ({ children }) => (<div className='bg-my-white mt-20 w-1/3 h-1/4 card mt-28'>
    {children}
</div>);

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
      <>
        <nav className="bg-my-white fixed flex flex-wrap items-center justify-between min-w-full px-2 py-3 ">
          <div className="mx-auto flex flex-wrap items-center justify-between w-full">
            <img src={logo} alt="logo" className="ml-3 rounded-lg w-14 h-14"/>
            <div className="w-full ml-2 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
                
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="/"
                  >
                    <i className="fa-solid fa-right-from-bracket text-lg leading-lg text-black opacity-75"></i>
                    <span className='ml-2'>
                        Nicolas Choquet
                    </span>
                    <img src={profilPicture} alt="profilpicture" className="ml-3 rounded-full w-10 h-10"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
};

const Dashboard = () => {
    const [isActive, setIsActive] = useState(false);

    const [menus, setMenus] = useState([
        {
            title: 'Hackaton 2022',
            menu: {
                type: 'Repas',
                details: [
                    {
                        name: 'Entrée'
                    },
                    {
                        name: 'Plat'
                    },
                    {
                        name: 'Dessert'
                    },
                    {
                        name: 'Boisson',
                        type: 'Sans alcool'
                    }
                ],
                presents: 150,
                categories: {
                    'Végans': 50,
                    'Viandes': 100
                },
                typeMenuChoice: 'Un menu unique',
                resultChoice: 'Liste de réstaurateurs/traiteurs locaux pouvant répondre au besoin',
                result: {
                    name: 'AlloTraiteur',
                    address: '2 rue des oliviers',
                    city: 'Nice',
                    zip: '06000'
                }
            }
        },
        {
            title: 'Séminaire Norsys',
            menu: {
                type: 'Apéro',
                details: [
                    {
                        name: 'Boisson',
                        type: 'Avec alcool'
                    }
                ],
                presents: 25,
                categories: {
                    'Crustacés': 1,
                    'Arachide': 1,
                    'Végans': 3,
                    'Gluten': 2,
                    'Viandes': 18
                },
                typeMenuChoice: 'Plusieurs menus',
                resultChoice: 'Liste de réstaurateurs/traiteurs locaux pouvant répondre au besoin',
                result: {
                    name: 'AlloTapas',
                    address: '2 rue des tapas',
                    city: 'Nice',
                    zip: '06000'
                }
            }
        }
    ]);

    const handleModal = () => {
        setIsActive(!isActive);
    }

    return (<>
        <Navbar />
        
        <div className='bg-my-green1 justify-evenly flex min-h-screen py-4 px-4 sm:px-6 lg:px-8'>
            {menus.length === 0 && 
                (<div className='w-full text-black text-center'>
                    Vous n'avez créé aucun menu.
                </div>)}

            {menus.map((menu, i) => 
                (<CardItem key={i}>
                    <h2 className='text-xl'>
                        {menu.title}
                    </h2>
                    <hr className='h-2 mt-2' />
                    <ul className='list-disc ml-4'>
                        <li>
                            {menu.menu.type}

                            <ul className='list-disc ml-4'>
                                {menu.menu.details.map((d, i) => (<li key={i}>
                                    {d.name}{d.type ? `: ${d.type}` : ''}
                                </li>))}
                            </ul>
                        </li>

                        <li>
                            <b>{menu.menu.presents}</b> participants total

                            <ul className='list-disc ml-4'>
                                {Object.keys(menu.menu.categories).map((c, i) => (<li key={i}>
                                    <b>{menu.menu.categories[c]}</b> {c}
                                </li>))}
                            </ul>
                        </li>

                        <li>
                            {menu.menu.typeMenuChoice}
                        </li>

                        <li>
                            {menu.menu.resultChoice}

                            <ul>
                                <li>
                                    <div className='mt-4'>Traiteur choisis :</div>
                                    <CardItem >
                                        <h2>{menu.menu.result.name}</h2>

                                        <hr className='h-2 mt-2' />

                                        <p>
                                        {menu.menu.result.address},
                                        <br />
                                        {menu.menu.result.zip} {menu.menu.result.city}
                                        </p>
                                    </CardItem>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </CardItem>),
                )}
        </div>
        <div className="flex justify-center">
            <NewMenuButton handleModal={handleModal}/>
        </div>
        
        
        <PublicMenuModal isActive={isActive} onClose={() => setIsActive(false)}/>
    </>);
}

export default Dashboard;