import React from 'react';
import './InicioSesion.css';
function InicioSesion() {
    return (
        <div class="h-100 my-4">
        <div class="row">
            <div class="col-md-10 d-flex flex-wrap align-middle p-4">
                <h1 class="align-self-center mx-auto my-2">Iniciar Sesión</h1>
                <input type="text" id="username" class="form-control border-bottom my-4" placeholder="Correo, numero o usuario"/>

                <input type="text" id="password" class="form-control border-bottom my-4" placeholder="Contraseña"/>

                <button class="btn bg-success text-blanco align-self-end btn-lg ml-auto my-4">Iniciar</button>
            </div>
        </div>
    </div>
    );
}

export default InicioSesion;
