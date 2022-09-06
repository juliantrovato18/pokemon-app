export const PokeInfo = ({data})=>{
    console.log(data);
    return (
        <>
            {
                (!data)? "":
                <>
                    <div>
                        <h3>{data.name}</h3>
                        <img  src={data.sprites.front_default} alt="" />
                    <div className="abilities">
                    <div className="group">
                        <h3>{data.abilities[0].ability.name}</h3>
                    </div>
                    <div className="group">
                        <h3>{data.abilities[1].ability.name}</h3>
                    </div>
                    </div>
                    <div className="base-state">
                        <h3 className="2">HP:{data.stats[0].base_stat}</h3>
                        <h3>attack:{data.stats[1].base_stat}</h3>
                        <h3>speed:{data.stats[2].base_stat}</h3>
                        <h3>life:{data.stats[3].base_stat}</h3>
                        <h3>defense:{data.stats[4].base_stat}</h3>
                    </div>    
                    </div>
                </>
            }
        </>
    )
}