import { useEffect } from "react";
import Layout from "../../../layout/layout";
import {item} from '../../../components/servicios/item'


const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="bg-gray-900">
        <section>
          <div class="max-w-screen-xl dark:bg-gray-900 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                Product Collection
              </h2>

              <p class="max-w-md mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </header>

            <ul class="grid gap-32 mt-8 pl-16 pr-16 sm:grid-cols-3 lg:grid-cols-3">
              <li>{item('backiee-245534.jpg','Curso para Ligar')}</li>

              <li>{item('backiee-186635.jpg','Curso para Ligar')}</li>

              <li>{item('backiee-245534.jpg','Curso para Ligar')}</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Servicios;
