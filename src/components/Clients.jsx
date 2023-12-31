import styles, { layout } from "../style";
import { clients } from "../constants";
const Clients = () => {
  return (
    <section className={`my-4 ${styles.flexCenter}`}>
      <div className={`flex flex-wrap w-full ${styles.flexCenter}`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 sm:min-w-[192px] min-w-[120px] ${styles.flexCenter}`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
