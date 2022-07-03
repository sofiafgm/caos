import React from 'react'

const Home = () => (
  <>
    <section>
      <table border="2" cellpading="10">
        <tr>
          <td>Nombre del producto</td>
          <td>Información técnica</td>
          <td>Características</td>
          <td>Beneficios</td>
        </tr>

        <tr>
          <td>Un Caos organizado</td>
          <td>
            <ul>
              <li>5 secciones</li>
              <li>Redes sociales</li>
              <li>Mapas con ubicaciones de los puntos de venta</li>
              <li>Footer con links de contacto y ayuda</li>
            </ul>
          </td>

          <td>Página para dar a conocer el trabajo y marca de una ilustradora</td>

          <td>
            <ol>
              <li>Exponer la trayectoria de la ilustradora</li>
              <li>Dar a conocer la ubicación de los puntos de venta</li>
              <li>Generar un mayor número de seguidores en las redes sociales</li>
              <li>Ser un escaparate de los productos y precios de los mismos</li>
              <li>Generar nuevos clientes</li>
            </ol>
          </td>
        </tr>
      </table>
    </section>

    <section>
      <h4>Aqui van las ubicaciones de los puntos de venta</h4>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.855340355148!2d-103.35870988571858!3d20.675463505122472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b137659278b3%3A0xc604925cc03e8ad1!2zRWwgYmHDumw!5e0!3m2!1ses!2smx!4v1656369158405!5m2!1ses!2smx"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

    {/*{!--Aún no sé en qué lugar posicionar el formulario, así que o puse aquó como una sección más --}*/}
    <section>
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
            <label htmlFor="desplegable">Elije el producto</label>
            <select id="">
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
    </section>
  </>
)

export default Home
