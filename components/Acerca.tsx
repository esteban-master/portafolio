import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Acerca = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-5 mt-16">
      <div className="flex justify-center md:col-span-2">
        <img
          className="h-60 w-60 md:h-72 md:w-72 object-cover rounded-full shadow-xl"
          src="https://images.ctfassets.net/aq13lwl6616q/1SE1kxAzL5ymDD8zi6k8sQ/8b6a9dbb2512081b4f738d019dd66478/andrei.png?w=800&q=50"
          alt="Imagen"
        />
      </div>
      <div className="md:col-span-3 my-5 md:my-0">
        <div className="flex flex-col items-center md:block">
          <h1 className="text-3xl lg:text-5xl font-bold my-1">
            Esteban Beltran
          </h1>
          <span className=" block text-xl lg:text-3xl text-gray-600 font-light">
            Desarrollador de software
          </span>
          <div className="flex space-x-3 my-5">
            <a
              href="https://github.com/esteban-master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-xl h-10 text-purple-500 cursor-pointer hover:text-purple-600 transition duration-200 ease-out"
                icon={["fab", "github"]}
              />
            </a>
            <a
              href="https://twitter.com/estebanmaster5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-xl h-10 text-purple-500 cursor-pointer hover:text-purple-600 transition duration-200 ease-out"
                icon={["fab", "twitter"]}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/esteban-beltran-002b19208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-xl h-10 text-purple-500 cursor-pointer hover:text-purple-600 transition duration-200 ease-out"
                icon={["fab", "linkedin"]}
              />
            </a>
          </div>
        </div>
        <div className="space-y-3 text-justify my-6">
          <p className="text-lg text-gray-700 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            exercitationem impedit perspiciatis, ab recusandae odit aliquam
            rerum optio inventore a tenetur perferendis quia dolorem eligendi
            atque praesentium fugiat. Ipsa, sint.
          </p>
          <p className="text-lg text-gray-700 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            exercitationem impedit perspiciatis, ab recusandae odit aliquam
            rerum optio inventore a tenetur perferendis quia dolorem eligendi
            atque praesentium fugiat. Ipsa, sint. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id dicta nisi doloremque repellendus
            officia consequuntur soluta, corporis ab. Vel ut, fugit deleniti
            recusandae atque explicabo perspiciatis mollitia sit. Natus,
            cupiditate.{" "}
          </p>
          <p className="text-lg text-gray-700 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iusto
            nobis minima quod facilis labore, sunt accusamus vel fugiat
            architecto assumenda optio, natus dolor a quisquam esse alias animi
            odit!
          </p>
        </div>
      </div>
    </div>
  );
};
