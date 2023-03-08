import { useEffect } from "react";
import Layout from "../../../layout/layout";
import { item } from "../../../components/servicios/item";
import img1 from '../../../img/OwnDark.png'
const Proyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="bg-gray-900">
        <section>
          <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                <div class="max-w-md mx-auto text-center lg:text-left">
                  <header>
                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                      Create Ecommerces
                    </h2>

                    <p class="mt-4 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quas rerum quam amet provident nulla error!
                    </p>
                  </header>

                  <a
                    href="https://owndark.com/"
                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                  >
                    Visitar Pagina
                  </a>
                </div>
              </div>

              <div class="lg:col-span-2 lg:py-8">
                <ul class="grid grid-cols-1 gap-4">
                  <li>
                    <a href="#" class="block group">
                      <img
                        src={img1}
                        alt=""
                        class="object-cover w-full rounded"
                      />

                      <div class="mt-3">
                        <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {''}
                        </h3>

                        <p class="mt-1 text-sm text-gray-700">{''}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Proyectos;
