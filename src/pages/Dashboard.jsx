import {useState} from "react";
import NewMenuButton from "../components/NewMenuButton";
import PublicMenuModal from "../components/PublicMenuModal";
import CardItem from '../components/CardItem';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3" style={{ background: '#10654E' }}>
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                <img src="data:image/png;base64,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" style={{ width: '50px' }} />
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
                        Tonton Kevin
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
            title: 'Anniversaire Tata Janine',
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