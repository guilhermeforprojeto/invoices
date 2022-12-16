import './overview.css'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

function Overview() {

  // this.state = {
  //   categories: [

  //     {
  //       id: 1,
  //       name: "Teste",
  //       movie: [
  //         {
  //           id: 1, title: "The boy in the asçdlkmalçksmd", released: 2008
  //         }
  //       ]
  //     }
  //   ]
  // }

  return (
    <>
      <section className='cts_overview'>
        <h1>Overview</h1>
        <section className='cts'>
          <div className='ct_title'>
            <PriceCheckIcon />
            <span>CONTAS 2021</span>
          </div>
          <div className='ct_title'>
            <PriceCheckIcon />
            <span>CONTAS 2022</span>
          </div>
          <div className='ct_title'>
            <PriceCheckIcon />
            <span>CONTAS 2023</span>
          </div>
        </section>
        {/* <aside className='sidebar-container'>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movie.map((movie) => (
                <li key={movie.id}>
                  {movie.title} cachorro louco {movie.released}
                </li>
              ))}
            </ul>
            </div>
            ))}
            
          </aside> */}
      </section>
    </>
  )
}

export default Overview;