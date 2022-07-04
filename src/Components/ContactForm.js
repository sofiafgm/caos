import React from "react";

const ContactForm = () => (<section className="contacto">
  {/*{<!-- Aún no sé en qué lugar posicionar el formulario, así que o puse aquó como una sección más -->}*/}
  <form>
    <fieldset>
      <legend>Contáctanos para adquirir nuestros productos</legend>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
      </div>

      <div>
        <h4>Género</h4>
        <label htmlFor="hombre">Hombre</label>
        <input type="radio" name="genero" id="hombre" />
      </div>

      <div>
        <label htmlFor="mujer">Mujer</label>
        <input type="radio" name="genero" id="mujer" />
      </div>

      <div>
        <label htmlFor="correo">email</label>
        <input type="email" id="correo" />
      </div>

      <div>
        <label htmlFor="telefono">Telefono</label>
        <input type="tel" id="telefono" />
      </div>

      <div>
        <label htmlFor="desplegable">Elige el producto</label>
        <select id="despegable">
          <option value="">Agenda</option>
          <option value="">Taza</option>
          <option value="">Separador</option>
        </select>
      </div>

      <div>
        <label htmlFor="comentarios">Comentarios</label>
        <textarea name="" id="comentarios" cols="30" rows="10"></textarea>
      </div>

      <div>
        <h4>Quiero recibir promociones</h4>
        <label htmlFor="opcion1">si</label>
        <input type="checkbox" id="opcion1" />
        <label htmlFor="opcion2">no</label>
        <input type="checkbox" id="opcion2" />
      </div>

      <div>
        <input type="submit" value="Enviar formulario" />
        <input type="reset" value="Limpiar formulario" />
      </div>
    </fieldset>
  </form>
</section>)

export default ContactForm