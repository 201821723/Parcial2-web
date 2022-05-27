import React, { useState } from "react";

const ListaEspacios = () => {
  let [seleccionado, setSeleccionado] = useState();

  const [offers] = useState([
    {
      name: "Casa Bogotá",
        address: "Calle 12 No. 7-25",
        phone: "3104916478",
        type: "house",
        isActive: true,
        id: "H001",
    },
    {
      name: "Casa Zipaquirá",
        address: "Carrera 133 No. 18-33",
        phone: "3176503921",
        type: "house",
        isActive: true,
        id: "H002",
    },
    {
      name: "Apartamento Cartagena",
        address: "Avenida Boyacá No. 117-11",
        phone: "3082106599",
        type: "loft",
        isActive: true,
        id: "A001",
    },
    {
      name: "Apartamento Cali",
        address: "Transversal 140 No. 101-23",
        phone: "3001092520",
        type: "loft",
        isActive: false,
        id: "A002"
    }
  ]);

  return (
    <div className="container mt-4">
            <div className="row">
                {offers.map((e) => {
                    return(
                        <div className="col-3">
                            <div className="card" onClick={() => {setSeleccionado(e)}}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7KDO5ugSYwei57f27d5q5yj15RPd6W3qNokGupqMDksuJ5jMWSE3398BmLl7Ec92Hyc&usqp=CAU" alt="" ></img>
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">{e.address}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {seleccionado != null ? <ListaEspacios espacioSelecionado={seleccionado.id} /> : null}
        </div>
  );
};

export default ListaEspacios;
