export const Card = ({pokemon, loading, infoPoke})=>{
    return (
        <>
            {
                loading? <h1>Loading...</h1>:
                pokemon.map((item)=>{
                    return (
                        <>
                            <div key={item.id} className="card" onClick={()=>infoPoke(item)}>
                                <h2>{item.id}</h2>
                                <img className="img" src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}