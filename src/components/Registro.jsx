import React from 'react';
import RegistroLogo from './RegistroLogo.png'
function Registro() {
    return (
        <div class="h-100 my-4">
            <div class="row mt-4">
                <h1 class="align-self-center mx-auto my-2">Crear perfil</h1>
                <div class="col-md-6 mx-auto d-flex justify-content-center mt-4">
                    <img src={RegistroLogo} alt="" srcset="" class="img-fluid w-50"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 d-flex flex-wrap align-middle p-4">
                    <label for="full_name" class="font-weight-bold">Nombre completo*</label>
                    <input type="text" id="full_name" class="form-control" placeholder="Digite su nombre completo" />

                    <label for="job" class="font-weight-bold">Ocupación*</label>
                    <input type="text" id="job" class="form-control" placeholder="Digite su ocupación" />

                    <label for="celphone" class="font-weight-bold">Número *</label>
                    <input type="text" id="celphone" class="form-control" placeholder="Digite su numero telefonico" />

                    <label for="username" class="font-weight-bold">Usuario*</label>
                    <input type="text" id="username" class="form-control" placeholder="Digite su nombre de usuario" />

                    <label for="password" class="font-weight-bold">Contraseña*</label>
                    <input type="text" id="password" class="form-control" placeholder="Digite su contraseña" />

                    <button class="btn bg-success text-blanco align-self-end btn-md ml-auto my-4">Crear</button>
                </div>
            </div>
        </div>
    );
}

export default Registro;
