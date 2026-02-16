import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  ArrowLeftRight,
  Plane,
  Route,
} from "lucide-react";
import { LOCATIONS } from "../../data/locations";

export default function BookingCard({ tripType, setTripType, activeTab }) {
  const navigate = useNavigate();

  /* ================= SAFE DEFAULT ================= */
  const currentTab = activeTab || "Local Trip";

  /* ================= LOCAL TRIP ================= */
  const [toLocation, setToLocation] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [filteredTo, setFilteredTo] = useState([]);
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [showToList, setShowToList] = useState(false);
  const [showFromList, setShowFromList] = useState(false);
  const [depDate, setDepDate] = useState("");
  const [depTime, setDepTime] = useState("");
  const [persons, setPersons] = useState("1");

  /* ================= AIRPORT ================= */
  const [airportFrom, setAirportFrom] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportDate, setAirportDate] = useState("");
  const [airportTime, setAirportTime] = useState("");
  const [filteredAirportFrom, setFilteredAirportFrom] = useState([]);
  const [showAirportFromList, setShowAirportFromList] = useState(false);

  /* ================= MULTIWAY ================= */
  const [multiFrom, setMultiFrom] = useState("");
  const [stop1, setStop1] = useState("");
  const [stop2, setStop2] = useState("");
  const [multiDate, setMultiDate] = useState("");
  const [multiTime, setMultiTime] = useState("");

  const [filteredMultiFrom, setFilteredMultiFrom] = useState([]);
  const [filteredStop1, setFilteredStop1] = useState([]);
  const [filteredStop2, setFilteredStop2] = useState([]);

  const [showMultiFromList, setShowMultiFromList] = useState(false);
  const [showStop1List, setShowStop1List] = useState(false);
  const [showStop2List, setShowStop2List] = useState(false);

  /* ================= TAXI ================= */
  const [selectedTaxiPackage, setSelectedTaxiPackage] = useState(null);

  /* ================= ROUND TRIP ================= */
  const [selectedRoundTrip, setSelectedRoundTrip] = useState(null);

  const filter = (value, setter) => {
    if (!value.trim()) return setter([]);
    setter(
      LOCATIONS.filter((l) =>
        l.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  useEffect(() => filter(toLocation, setFilteredTo), [toLocation]);
  useEffect(() => filter(fromLocation, setFilteredFrom), [fromLocation]);
  useEffect(() => filter(airportFrom, setFilteredAirportFrom), [airportFrom]);
  useEffect(() => filter(multiFrom, setFilteredMultiFrom), [multiFrom]);
  useEffect(() => filter(stop1, setFilteredStop1), [stop1]);
  useEffect(() => filter(stop2, setFilteredStop2), [stop2]);

  const showRoundTrips =
    currentTab === "Local Trip" &&
    tripType === "Round-Trip" &&
    toLocation &&
    fromLocation &&
    depDate &&
    depTime;

  const roundTripOptions = [
    { id: 1, depart: "06:30 AM", return: "08:45 PM", price: "₹4,200" },
    { id: 2, depart: "10:00 AM", return: "10:30 PM", price: "₹4,600" },
    { id: 3, depart: "02:45 PM", return: "12:15 AM", price: "₹4,900" },
    { id: 4, depart: "07:15 PM", return: "06:00 AM", price: "₹5,300" },
  ];

  const taxiPackages = [
    { id: 1, name: "4 Hours / 40 KM", price: "₹1,499" },
    { id: 2, name: "8 Hours / 80 KM", price: "₹2,699" },
    { id: 3, name: "12 Hours / 120 KM", price: "₹3,899" },
  ];

  const goToCheckout = () => navigate("/checkout");

  const cardStyle = (selected) =>
    `rounded-xl md:rounded-2xl p-2.5 md:p-4 cursor-pointer transition-all duration-300
     ${
       selected
         ? "bg-gradient-to-br from-[#0892D0]/15 to-[#4B0082]/15 shadow-xl scale-105"
         : "bg-gray-50 hover:shadow-md hover:scale-[1.02]"
     }`;

  return (
    <div className="w-[95%] max-w-7xl mx-auto mt-30">
      <style>{`
        @keyframes borderLight {
          0%, 100% {
            border-color: #0892D0;
            box-shadow: 0 0 20px rgba(8, 146, 208, 0.3), 0 0 40px rgba(8, 146, 208, 0.1);
          }
          50% {
            border-color: #4B0082;
            box-shadow: 0 0 20px rgba(75, 0, 130, 0.3), 0 0 40px rgba(75, 0, 130, 0.1);
          }
        }
        .border-light-animation {
          animation: borderLight 3s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-3 md:p-5 border-2 border-light-animation">

      {/* ================= LOCAL TRIP ================= */}
      {currentTab === "Local Trip" && (
        <>
          <div className="flex gap-4 md:gap-8 mb-3 md:mb-4 text-[10px] md:text-sm font-semibold">
            <span
              onClick={() => setTripType("One-Way")}
              className={`cursor-pointer pb-2 ${
                tripType === "One-Way"
                  ? "text-[#4B0082] border-b-2 border-[#4B0082]"
                  : "text-gray-400"
              }`}
            >
              <ArrowRight className="inline w-3 md:w-4 h-3 md:h-4 mr-1" />
              One-Way
            </span>

            <span
              onClick={() => setTripType("Round-Trip")}
              className={`cursor-pointer pb-2 ${
                tripType === "Round-Trip"
                  ? "text-[#4B0082] border-b-2 border-[#4B0082]"
                  : "text-gray-400"
              }`}
            >
              <ArrowLeftRight className="inline w-3 md:w-4 h-3 md:h-4 mr-1" />
              Round-Trip
            </span>
          </div>

          <FormGrid>
            <InputBox label="To" icon={MapPin} value={toLocation} setValue={setToLocation} list={filteredTo} showList={showToList} setShowList={setShowToList} />
            <InputBox label="From" icon={MapPin} value={fromLocation} setValue={setFromLocation} list={filteredFrom} showList={showFromList} setShowList={setShowFromList} />
            <SimpleInput label="Date" icon={Calendar} type="date" value={depDate} setValue={setDepDate} />
            <SimpleInput label="Time" icon={Clock} type="time" value={depTime} setValue={setDepTime} />
            <SelectPersons persons={persons} setPersons={setPersons} />
          </FormGrid>

          {showRoundTrips && (
            <div className="mt-3 md:mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {roundTripOptions.map(opt => (
                <div
                  key={opt.id}
                  onClick={() => setSelectedRoundTrip(opt.id)}
                  className={cardStyle(selectedRoundTrip === opt.id)}
                >
                  <div className="flex justify-between text-[10px] md:text-sm">
                    <span>{opt.depart}</span>
                    <span>{opt.return}</span>
                  </div>
                  <div className="text-right font-semibold text-[#4B0082] mt-1 md:mt-2 text-xs md:text-base">
                    {opt.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ================= TAXI ================= */}
      {currentTab === "Taxi Packages" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {taxiPackages.map(pkg => (
            <div
              key={pkg.id}
              onClick={() => setSelectedTaxiPackage(pkg.id)}
              className={cardStyle(selectedTaxiPackage === pkg.id)}
            >
              <h3 className="font-semibold text-sm md:text-lg">{pkg.name}</h3>
              <p className="text-[#4B0082] font-bold mt-2 md:mt-3 text-base md:text-xl">
                {pkg.price}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ================= AIRPORT ================= */}
      {currentTab === "Airport Transfer" && (
        <FormGrid>
          <InputBox label="From" icon={MapPin} value={airportFrom} setValue={setAirportFrom} list={filteredAirportFrom} showList={showAirportFromList} setShowList={setShowAirportFromList} />
          <SimpleInput label="Airport Name" icon={Plane} value={airportName} setValue={setAirportName} />
          <SimpleInput label="Date" icon={Calendar} type="date" value={airportDate} setValue={setAirportDate} />
          <SimpleInput label="Time" icon={Clock} type="time" value={airportTime} setValue={setAirportTime} />
        </FormGrid>
      )}

      {/* ================= MULTIWAY ================= */}
      {currentTab === "Multiway" && (
        <FormGrid>
          <InputBox label="From" icon={MapPin} value={multiFrom} setValue={setMultiFrom} list={filteredMultiFrom} showList={showMultiFromList} setShowList={setShowMultiFromList} />
          <InputBox label="Stop 1" icon={Route} value={stop1} setValue={setStop1} list={filteredStop1} showList={showStop1List} setShowList={setShowStop1List} />
          <InputBox label="Stop 2" icon={Route} value={stop2} setValue={setStop2} list={filteredStop2} showList={showStop2List} setShowList={setShowStop2List} />
          <SimpleInput label="Date" icon={Calendar} type="date" value={multiDate} setValue={setMultiDate} />
          <SimpleInput label="Time" icon={Clock} type="time" value={multiTime} setValue={setMultiTime} />
        </FormGrid>
      )}

      {/* BOOK NOW */}
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                        0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 15px rgba(255, 255, 255, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px rgba(8, 146, 208, 0.8),
                        0 0 30px rgba(8, 146, 208, 0.6),
                        0 0 40px rgba(75, 0, 130, 0.4),
                        0 0 50px rgba(75, 0, 130, 0.3);
            transform: scale(1.05);
          }
        }
        
        .glow-book-btn {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="mt-4 md:mt-6 flex justify-end">
        <button
          onClick={goToCheckout}
          className="glow-book-btn px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-base bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book Now
        </button>
      </div>
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

function FormGrid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {children}
    </div>
  );
}

function InputBox({ label, icon: Icon, value, setValue, list, showList, setShowList }) {
  return (
    <div className="relative">
      <label className="text-[10px] md:text-xs flex items-center gap-1 text-gray-500">
        <Icon className="w-2.5 md:w-3 h-2.5 md:h-3 text-[#4B0082]" /> {label}
      </label>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setShowList(true);
        }}
        onBlur={() => setTimeout(() => setShowList(false), 150)}
        placeholder={`Enter ${label.toLowerCase()}...`}
        className="w-full mt-1 px-1 py-1.5 md:py-2 text-[11px] md:text-sm bg-transparent border-0 border-b border-gray-300 focus:border-[#4B0082] focus:outline-none placeholder:text-gray-400"
      />
      {showList && list.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border rounded-lg shadow max-h-40 overflow-y-auto">
          {list.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setValue(item);
                setShowList(false);
              }}
              className="px-2 md:px-3 py-1.5 md:py-2 text-[11px] md:text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SimpleInput({ label, icon: Icon, type = "text", value, setValue }) {
  return (
    <div>
      <label className="text-[10px] md:text-xs flex items-center gap-1 text-gray-500">
        <Icon className="w-2.5 md:w-3 h-2.5 md:h-3 text-[#4B0082]" /> {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={type === "date" ? "Select date" : type === "time" ? "Select time" : `Enter ${label.toLowerCase()}...`}
        className="w-full mt-1 px-1 py-1.5 md:py-2 text-[11px] md:text-sm bg-transparent border-0 border-b border-gray-300 focus:border-[#4B0082] focus:outline-none placeholder:text-gray-400"
      />
    </div>
  );
}

function SelectPersons({ persons, setPersons }) {
  return (
    <div>
      <label className="text-[10px] md:text-xs flex items-center gap-1 text-gray-500">
        <Users className="w-2.5 md:w-3 h-2.5 md:h-3 text-[#4B0082]" /> Persons
      </label>
      <select
        value={persons}
        onChange={(e) => setPersons(e.target.value)}
        className="w-full mt-1 px-1 py-1.5 md:py-2 text-[11px] md:text-sm bg-transparent border-0 border-b border-gray-300 focus:border-[#4B0082] focus:outline-none"
      >
        {[...Array(10).keys()].map((n) => (
          <option key={n + 1}>{n + 1}</option>
        ))}
      </select>
    </div>
  );
}