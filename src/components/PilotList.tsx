import { schemaProps } from "./Form/formValidation";

const PilotList = ({ pilots }: { pilots: schemaProps[] }) => {
  return (
    <section className="w-full max-w-4xl my-8">
      <h2 className="text-2xl font-semibold mb-4"> Registered Pilots</h2>
      {pilots.length === 0 ? (
        <p className="text-gray-600">No pilots signed up yet.</p>
      ) : (
        <ul className="space-y-4">
          {pilots.map((pilot, index) => (
            <li
              key={index}
              className=" p-4 text-[1rem] rounded-2xl border-2
       border-[#000] border-r-6 outline-0  "
            >
              <strong>{pilot.name}</strong> ({pilot.email})
              <br />
              Gender: {pilot.gender}
              <br />
              Age: {pilot.age}, Flight Experience: {pilot.flightExperience} yrs
              <br />
              Aircraft: {pilot.aircraftTypes}
              <br />
              Country: {pilot.country}
              <br />
              available : {pilot.availability}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default PilotList;
