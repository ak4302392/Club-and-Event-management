import Card from "./Card";

const Clubs = () => {
  return (
    <div className="md:px-40 md:py-5 sm:px-20 sm:py-2 px-10 py-1 ">
      <h1 className="pb-5 text-2xl text-lg font-bold text-gray-700   ">
        Clubs
      </h1>
      <div className="grid md:grid-cols-3 md:gap-2 sm:grid-cols-2 sm:gap-2 grid-cols-1 gap-2 content-center">
        <Card
          isEvent={false}
          image={require("../../images/manit_logo.jpg")}
          title="Maulana Azad National Institute of Technology, Bhopal"
          details="Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India."
        />
        <Card
          isEvent={false}
          image={require("../../images/aaroha.png")}
          title="Maulana Azad National Institute of Technology, Bhopal"
          details="Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India."
        />
        <Card
          isEvent={false}
          image={require("../../images/football.jpg")}
          title="Maulana Azad National Institute of Technology, Bhopal"
          details="Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India."
        />
      </div>
    </div>
  );
};

export default Clubs;
