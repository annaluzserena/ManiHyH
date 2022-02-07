import React from "react";
import Variety from "./Variety";

function Products() {
    return (
        <section className="container-3" id="products">
            <h2>Nuestras variedades</h2>
            <span></span>
            <Variety
            name="Maní en Vaina Tostado"
            img="../assets/img/catra.png"
            detail="Arpillera: 10 x 2 kgs.
            Arpillera: 4 x 5 kgs.
            Arpillera: 1 x 20 kgs.
            Caja: 20 x 250 grs."
            />
            <Variety
            name="Maní Frito Salado
            Runners/Blanched"
            img="../assets/img/catra.png"
            detail="Caja: 24 x 100 grs.
            Caja: 12 x 900 grs.
            Arpillera: 15 x 2 kgs (Runners)
            Arpillera: 5 x 5 kgs.
            Arpillera: 1 x 30 kgs."
            />
            <Variety
            name="Maní Crocante Saborizado"
            img="../assets/img/catra.png"
            detail="Caja surtida: 48 x 70 grs.
            Salado Caja: 12 x 900 grs.
            Queso, Pizza; Jamón:
            Caja 12 x 900 grs.
            Salado Caja: 1 x 15 kgs.
            Queso, Pizza, Jamón Caja:
            1 x 15 kgs."
            />
            <Variety
            name="Maní Confitería"
            img="../assets/img/catra.png"
            detail="Maní con piel.
            Presentación:
            Arpillera: 5 x 5 kgs.
            Arpillera: 1 x 50 kgs."
            />
        </section>
    )
};

export default Products;