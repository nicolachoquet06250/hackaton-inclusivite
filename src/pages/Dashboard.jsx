import {useState} from "react";
import NewMenuButton from "../components/NewMenuButton";
import PublicMenuModal from "../components/PublicMenuModal";

const CardItem = ({ children }) => (<div className='w-full card'>
    {children}
</div>);

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                MyDiet
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/"
                  >
                    <i className="fa-solid fa-right-from-bracket text-lg leading-lg text-white opacity-75"></i>
                    <span className='ml-2'>
                        Nicolas Choquet
                    </span>
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
                        name: 'Entré'
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
        }
    ]);

    const handleModal = () => {
        setIsActive(!isActive);
    }

    return (<>
        <Navbar />
        
        <div className='flex min-h-full py-4 px-4 sm:px-6 lg:px-8'>
            {menus.length === 0 && 
                (<div className='w-full text-white text-center'>
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
                                    <CardItem>
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
                </CardItem>))}
        </div>
        <NewMenuButton handleModal={handleModal}/>
        <PublicMenuModal isActive={isActive} onClose={() => setIsActive(false)}/>
    </>);
}

export default Dashboard;